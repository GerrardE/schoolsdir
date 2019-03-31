;(function($){

	'use strict';

	$.mad_core = $.mad_core || {};

	$.mad_core = {

		setUp: function (options) {
			var base = this;

			var animEndEventNames = {
				'WebkitAnimation' : 'webkitAnimationEnd',
				'OAnimation' : 'oAnimationEnd',
				'msAnimation' : 'MSAnimationEnd',
				'animation' : 'animationend'
			},
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			}

			base.$window = $(window);
			base.ANIMATIONEND = animEndEventNames[ Modernizr.prefixed('animation') ];
			base.TRANSITIONEND = transEndEventNames[ Modernizr.prefixed('transition') ];
			base.SUPPORT = {
				animations : Modernizr.csstransitions && Modernizr.cssanimations,
				ANIMATIONSUPPORTED: Modernizr.cssanimations,
				TRANSITIONSUPPORTED: Modernizr.csstransitions,
				ISRTL: getComputedStyle(document.body).direction === 'rtl',
				ISTOUCH: Modernizr.touch
			};
			base.XHRLEVEL2 = !!window.FormData;
			base.event = base.SUPPORT.ISTOUCH ? 'touchstart' : 'click';

			// Refresh elements
			base.refresh();
		},

		DOMLoaded: function(options) {

			var base = this;

			// set up
			base.setUp(options);

			// counters
			if($('.counter').length) base.counters();
			
			// responsive menu
			if($('#header').length) base.navInit.init(this);

			// search
			if($('.search-holder').length) base.searchHolder();

			// background load
			if($('[data-bg]').length) base.bg();

			// sync carousel
			if($('.owl-carousel[data-sync]').length) base.syncOwlCarousel.init();

			// init view types (product boxes)
			if($('[data-view]').length) base.viewTypes();

			// dropdown elements init
			if($('.dropdown-invoker').length) base.dropdown();

			// close btn init
			if($('.item-close').length) base.closeBtn();
			if($('.shopping-cart-full').length) base.removeProduct();

			// hidden elements init
			if($('.hidden-section').length) base.hiddenSections();

			// prealoader init
			if($('#loader').length) base.preloader({
				waitAfterLoad: 1500
			});

		},

		elements: {
			'.main-navigation, .topbar:not(.no-mobile-advanced)': 'navMain',
			'#mobile-advanced': 'navMobile',
			'#wrapper': 'wrapper',
			'#header' : 'header'
		},

		/*
		Plugin Name: 	Refresh
		*/
		$: function (selector) {
			return $(selector);
		},

		refresh: function() {
			for (var key in this.elements) {
				this[this.elements[key]] = this.$(key);
			}
		},

		/*
		Plugin Name: 	SearchHolder
		*/
		searchHolder : function () {

		    $.searchClick = function (el, options) {
				this.el = $(el);
				this.init(options);
			}

			$.searchClick.DEFAULTS = {
				key_esc: 27
			}

			$.searchClick.prototype = {
				init: function (options) {
					var base = this;
					base.o = $.extend({}, $.searchClick.DEFAULTS, options);
					base.key_esc = base.o.key_esc;
					base.searchWrap = $('.searchform-wrap');
					base.searchBtn = $('.search-button', base.el);
					base.searchClose = $('.close-search-form', base.el);
					base.searchField = $('#s', base.el);
					base.event = Modernizr.touch ? 'touchstart' : 'click';

					base.set();
					base.bind();
				},
				set: function () {
					var transEndEventNames = {
						'WebkitTransition': 'webkitTransitionEnd',
						'MozTransition': 'transitionend',
						'OTransition': 'oTransitionEnd',
						'msTransition': 'MSTransitionEnd',
						'transition': 'transitionend'
					};
					this.transEndEventName = transEndEventNames[Modernizr.prefixed( 'transition' )];
					this.animations = Modernizr.csstransitions;
				},
				hide: function () {
				    var base = this;
				    base.searchWrap.addClass('closed').removeClass('opened');
				    var onEndTransitionFn = function () {
				      base.searchWrap.removeClass('closed');
				    };
				    if (base.animations) {
				      base.searchWrap.on(base.transEndEventName, onEndTransitionFn);
				    } else {
				      onEndAnimationFn();
				    }

				    var $body = $(document.body),
				    $popup = $(".searchform-wrap");

				},
				bind: function () {
					this.searchBtn.on(this.event, $.proxy(this.display_show, this));
					this.searchClose.on(this.event, $.proxy(function (e) {
						this.display_hide(e, this.key_esc);
					}, this));
					this.keyDownHandler(this.key_esc);

					$(window).on("load",function(){

				        var $win = $('.wrapper-container'); // or $box parent container
						var $box = $(".searchform-wrap");
						var $sb = $(".search-button");
						
					 	$win.on("click.Bst", function(event){		
							if ( 
				            $box.has(event.target).length === 0 //checks if descendants of $box was clicked
				            &&
				            !$box.is(event.target) //checks if the $box itself was clicked
				            &&
				            !$sb.is(event.target) //checks if the $box itself was clicked
					        ){
								$('.searchform-wrap').removeClass('opened');
							}
						});

						$('.close-search-form').on( "click", function() {
						  $('.searchform-wrap').removeClass('opened');
						});
						  
					});
				},
				display_show: function (e) {
					e.preventDefault();
					if (!this.searchWrap.hasClass('opened')) {
						this.searchWrap.addClass('opened');
						this.searchField.focus();
					}
				},
				display_hide: function (e, key) {
					var base = this;
					if (base.searchWrap.hasClass('opened')) {
						if (e.type == base.event || e.type == 'keydown' && e.keyCode === key) {
							e.preventDefault();
							base.hide();
							base.searchField.blur();
						}
					}
				},
				keyDownHandler: function (key) {
					$(window).on('keydown', $.proxy(function (e) {
						this.display_hide(e, key);
					}, this));
				}
			}

			$.fn.extend({
				searchClick: function (option) {
					if (!this.length) return this;
					return this.each(function () {
						var $this = $(this), data = $this.data('searchClick'),
							options = typeof option == 'object' && option;
						if (!data) {
							$this.data('searchClick', new $.searchClick(this, options));
						}
					});
				}
			});

			var searchHolder = $('.search-holder');

			if (searchHolder.length) {
				searchHolder.searchClick();

				$("#search-btn").on('click',function() {
					$(this).toggleClass('active');
		            $('.join-us').toggleClass('open-search');
		            return false;
		        });

			}

		},

		/**
		 * Emulates single accordion item
		 * @param Function callback
		 * @return jQuery collection;
		 **/
		hiddenSections: function(callback){

			var collection = $('.hidden-section');
			if(!collection.length) return;

			collection.each(function(i, el){
				$(el).find('.content').hide();
			});

			collection.on('click.hidden', '.invoker', function(e){

				e.preventDefault();

				var content = $(this).closest('.hidden-section').find('.content');

				content.slideToggle({
					duration: 500,
					easing: 'easeOutQuint',
					complete: callback ? callback : function(){}
				});

			});

			return collection;

		},

		/**
		 * Initializes dropdown module
		 * @return Object Core;
		 **/
		dropdown: function(){

			var dropdown = {

				init: function(){

					this.bindEvents();

				},

				bindEvents: function(){

					var self = this;

					$('body').on('click', '.dropdown-invoker', function(e){

						e.preventDefault();
						e.stopPropagation();

						var invoker = $(this),
							dropdown = invoker.next('.dropdown-window');

						self.smartPosition(dropdown);
						
						invoker.add(dropdown).toggleClass('opened');
						dropdown.parent().toggleClass('dropdown-over');

					});

					$(document).on('click', function(e){

						var dropdown = $('.dropdown-window');

						if(!$(e.target).closest(dropdown).length){

							dropdown.add(dropdown.prev('.dropdown-invoker')).removeClass('opened');
							dropdown.parent().removeClass('dropdown-over');

						}

					});

				},

				smartPosition: function(dropdown){

					var dWidth = dropdown.outerWidth(),
						dOfsset = dropdown.offset().left,
						$wW = $(window).width();

					if(dOfsset + dWidth > $wW) dropdown.addClass('reverse');

				}

			}

			dropdown.init();

			return this;

		},

		/**
		 * Initialize global close event
		 * @return Object Core;
		 **/
		closeBtn: function(){

			$('body').on('click.globalclose', '.item-close:not(.shopping-cart-full .item-close)', function(e){

				e.preventDefault();

				$(this).parent().stop().animate({
					opacity: 0
				}, function(){

					$(this).stop().slideUp(function(){

						$(this).remove();

					});

				});

			});

			return this;

		},

		/**
		Remove item
		**/
		removeProduct: function(collection){

			var c = $('.shopping-cart-full');

			c.on('click.removeProduct', '.item-close', function(e){

				e.preventDefault();

				$(this).closest('tr').stop().fadeOut(function(){
					$(this).remove();
				});

			});

		},

		/**
		 * Changes view type (product boxes)
		 * @return jQuery collection;
		**/
		viewTypes: function(){

			var collection = $('[data-view]');
			if(!collection.length) return;

			collection.on('click', function(e){

				e.preventDefault();
				var $this = $(this),
					target = $($this.data('target'));

				$this
					.addClass('active')
					.siblings()
					.removeClass('active');

				target
					.removeClass('view-list view-grid')
					.addClass('view-' + $this.data('view'));

			});

			return collection;

		},

		/**
		Counters
		**/
		counters : function(){

			var counter = $('.counter');

			counter.each(function(){

				var $this = $(this),
				offset = $this.offset().top - 3000;

				$(window).on('scroll',function(){
					if($this.hasClass('counted')) return false;

					if($(this).scrollTop() >= offset){

						$this.addClass('counted');
						
						(function ($) {
							$.fn.countTo = function (options) {
								options = options || {};
								
								return $(this).each(function () {
									// set options for current element
									var settings = $.extend({}, $.fn.countTo.defaults, {
										from:            $(this).data('from'),
										to:              $(this).data('to'),
										speed:           $(this).data('speed'),
										refreshInterval: $(this).data('refresh-interval'),
										decimals:        $(this).data('decimals')
									}, options);
									
									// how many times to update the value, and how much to increment the value on each update
									var loops = Math.ceil(settings.speed / settings.refreshInterval),
										increment = (settings.to - settings.from) / loops;
									
									// references & variables that will change with each update
									var self = this,
										$self = $(this),
										loopCount = 0,
										value = settings.from,
										data = $self.data('countTo') || {};
									
									$self.data('countTo', data);
									
									// if an existing interval can be found, clear it first
									if (data.interval) {
										clearInterval(data.interval);
									}
									data.interval = setInterval(updateTimer, settings.refreshInterval);
									
									// initialize the element with the starting value
									render(value);
									
									function updateTimer() {
										value += increment;
										loopCount++;
										
										render(value);
										
										if (typeof(settings.onUpdate) == 'function') {
											settings.onUpdate.call(self, value);
										}
										
										if (loopCount >= loops) {
											// remove the interval
											$self.removeData('countTo');
											clearInterval(data.interval);
											value = settings.to;
											
											if (typeof(settings.onComplete) == 'function') {
												settings.onComplete.call(self, value);
											}
										}
									}
									
									function render(value) {
										var formattedValue = settings.formatter.call(self, value, settings);
										$self.html(formattedValue);
									}
								});
							};
							
							$.fn.countTo.defaults = {
								from: 0,               // the number the element should start at
								to: 0,                 // the number the element should end at
								speed: 1000,           // how long it should take to count between the target numbers
								refreshInterval: 100,  // how often the element should be updated
								decimals: 0,           // the number of decimal places to show
								formatter: formatter,  // handler for formatting the value before rendering
								onUpdate: null,        // callback method for every time the element is updated
								onComplete: null       // callback method for when the element finishes updating
							};
							
							function formatter(value, settings) {
								return value.toFixed(settings.decimals);
							}
						}(jQuery));

						jQuery(function ($) {
						  // custom formatting example
						  $('.count-number').data('countToOptions', {
							formatter: function (value, options) {
							  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, '');
							}
						  });
						  
						  // start all the timers
						  $('.timer').each(count);  
						  
						  function count(options) {
							var $this = $(this);
							options = $.extend({}, options || {}, $this.data('countToOptions') || {});
							$this.countTo(options);
						  }
						});
						
					}

				});

			});

		},

		/**
		Isotope
		**/
		isotope : function(){
			var cthis = this;
			$('[data-isotope-options]').each(function(){

				var self = $(this),
				options = self.data('isotope-options');

				self.isotope(options);

			});
		},

		/**
		Sync Owl Carousel
		**/
		syncOwlCarousel: {

			init: function(){

				this.collection = $('.owl-carousel[data-sync]');
				if(!this.collection.length) return false;

				this.bindEvents();

			},

			bindEvents: function(){

				var self = this;

				this.collection.each(function(i, el){

					var $this = $(el),
						sync = $($this.data('sync'));

					if(!sync.length){
						console.log('Not found carousel with selector ' + $this.data('sync'));
						return;
					}

					// nav
					$this.on('click', '.owl-prev', function(e){
						sync.trigger('prev.owl.carousel');
					});
					$this.on('click', '.owl-next', function(e){
						sync.trigger('next.owl.carousel');
					});

					sync.on('click', '.owl-prev', function(e){
						$this.trigger('prev.owl.carousel');
					});
					sync.on('click', '.owl-next', function(e){
						$this.trigger('next.owl.carousel');
					});

					// // drag 
					$this.on('dragged.owl.carousel', function(e){

				        if(e.relatedTarget.state.direction == 'left'){
				            sync.trigger('next.owl.carousel');
				        }
				        else{
				            sync.trigger('prev.owl.carousel');
				        }
				        
					});

					sync.on('dragged.owl.carousel', function(e){

						if(e.relatedTarget.state.direction == 'left'){
				            $this.trigger('next.owl.carousel');
				        }
				        else{
				            $this.trigger('prev.owl.carousel');
				        }

					});

				});

			}

		},

		/**
		* Page preloader
		* @return Object modules;
		**/
		preloader: function(options){

			var config = {
				waitAfterLoad: 1000,
				duration: 1000
			},
			loader = $('#loader');

			$.extend(config, options);

			$('body').gatsbyImagesLoaded().then(function(){

				setTimeout(function(){

					loader.fadeOut(config.duration, function(){
						$(this).remove();
					});

				}, config.waitAfterLoad);

			});

			return this;

		},

		jQueryExtend: function(){

			$.fn.extend({

				gatsbyImagesLoaded : function () {

				    var $imgs = this.find('img[src!=""]');

				    if (!$imgs.length) {return $.Deferred().resolve().promise();}

				    var dfds = [];

				    $imgs.each(function(){
				        var dfd = $.Deferred();
				        dfds.push(dfd);
				        var img = new Image();
				        img.onload = function(){dfd.resolve();}
				        img.onerror = function(){dfd.resolve();}
				        img.src = this.src;
				    });

				    return $.when.apply($,dfds);

				}

			});

		},

		/**
		 Adds background image
		 * @return undefined;
		**/
		bg: function(collection){

			var collection = collection ? collection : $('[data-bg]');

			collection.each(function(){

				var $this = $(this),
					bg = $this.data('bg');

				if(bg) $this.css('background-image', 'url('+bg+')');

			});

		},

		navInit : {

			init : function (base) {

				this.createResponsiveButtons.call(base);
				this.navProcess(base);

				if ( base.SUPPORT.ISTOUCH ) {
					this.touchNavEvent(base);
				}
			},

			touchNavEvent: function (base) {
				var clicked = false;

				$("li.menu-item-has-children > a, li.cat-parent > a, li.page-item-has-children > a").on(base.event, function (e) {
					if (clicked != this) {
						e.preventDefault();
						clicked = this;
					}
				});
			},

			navProcess: function (base) {

				base.navInit.touchNav(base, base.$window);

				$(window).resize(function (e) {
					setTimeout(function () {
						base.navInit.touchNav(base, e.currentTarget);
					}, 30);
				});

			},

			touchNav: function (base, target) {

				if (base.SUPPORT.ISTOUCH || $(target).width() < 992) {

					if (!base.navMobile.children('ul').length) {
						base.navMobile.append(base.navMain.html());
					}

					base.navButton.on(base.event, function (e) {
						e.preventDefault();

						if (!base.wrapper.is('.active')) {
							$('html, body').animate({ scrollTop: 0 }, 0, function () {
								base.wrapper.css({
									height: base.navMobile.children('ul').outerHeight(true)
								}).addClass('active');
							});
						}
					});

					base.navHide.on(base.event, function (e) {
						e.preventDefault();
						if (base.wrapper.is('.active')) {
							base.wrapper.css({ height: 'auto' }).removeClass('active');
						}
					});

				} else {
					base.navMobile.children('ul').remove();
				}
			},

			createResponsiveButtons : function () {

				this.navButton = $('<button></button>', {
					type: 'button',
					id: 'responsive-nav-button',
					'class': 'responsive-nav-button'
				}).insertBefore(this.navMain);

				this.navHide = $('<a></a>', {
					id: 'advanced-menu-hide',
					'href' : '#'
				}).insertBefore(this.navMobile); 

			},

		}

	}

	$(function(){

		$.mad_core.DOMLoaded();

	});

})(jQuery);

/**
Custom select
**/
$.fn.madCustomSelect = function () {

	return this.each(function(){

		var list = $(this).children('ul'),
			select = $(this).find('select'),
			title = $(this).find('.select-title');
	 

		// select items to list items

		if($(this).find('[data-filter]').length){
			for(var i = 0,len = select.children('option').length;i < len;i++){
				list.append('<li data-filter="'+select.children('option').eq(i).data('filter')+'">'+select.children('option').eq(i).text()+'</li>')
			}
		}
		else{
			for(var i = 0,len = select.children('option').length;i < len;i++){
				list.append('<li>'+select.children('option').eq(i).text()+'</li>')
			}
		}
		select.hide();

		// open list
		
		title.on('click',function(){
			list.slideToggle(400);
			$(this).toggleClass('active');
		});

		// selected option

		list.on('click','li',function(){
			var val = $(this).text();
			title.text(val);
			list.slideUp(400);
			select.val(val);
			title.toggleClass('active');
			return false;
		});

	});

},

// Sticky and Go-top

(function ($, window) {

	function Temp(el, options) {
		this.el = $(el);
		this.init(options);
	}

	Temp.DEFAULTS = {
		sticky: true
	}

	Temp.prototype = {
		init: function (options) {
			var base = this;
				base.window = $(window);
				base.options = $.extend({}, Temp.DEFAULTS, options);
				base.stickyWrap = $('.sticky-header');
				base.goTop = $('<button class="go-to-top" id="go-to-top"></button>').appendTo(base.el);

			// Sticky
			if (base.options.sticky) {
				base.sticky.stickySet.call(base, base.window);
				base.stickyWrap.before($(".sticky-header").clone().addClass("clone-fixed"));
				
				$( window ).on('load', function() {

				  	$(".sticky-header.clone-fixed").css('top', '-' + $('#header').outerHeight() + 'px');
				     
				});
				
			}
			
			// Scroll Event
			base.window.on('scroll', function (e) {
				if (base.options.sticky) {
					base.sticky.stickyInit.call(base, e.currentTarget);
				}
				base.gotoTop.scrollHandler.call(base, e.currentTarget);
			});

			// Click Handler Button GotoTop
			base.gotoTop.clickHandler(base);
		},

		sticky: {

			stickySet: function () {
				var stickyWrap = this.stickyWrap, offset;
				if (stickyWrap.length) {
					offset = stickyWrap.outerHeight();
					$.data(stickyWrap, 'data', {
						offset: offset,
						height: stickyWrap.outerHeight(true)
					});
					 
				}
			},
			stickyInit: function (win) {
				var base = this, data;
				if (base.stickyWrap.length) {
					data = $.data(base.stickyWrap, 'data');
					base.sticky.stickyAction(data, win, base);
				}
			},
			stickyAction: function (data, win, base) {
				var scrollTop = $(win).scrollTop();
				if (scrollTop > data.offset)  {
					if (!base.stickyWrap.hasClass('sticky')) {
						base.stickyWrap.addClass('sticky');
						$('.sticky-header.clone-fixed').addClass('slideDown');
					}
				} else {
					if (base.stickyWrap.hasClass('sticky')) {
						base.stickyWrap.removeClass('sticky');
						$('.sticky-header.clone-fixed').removeClass('slideDown');
					}
				}
			}
		},
		gotoTop: {
			scrollHandler: function (win) {
				$(win).scrollTop() > 200 ?
					this.goTop.addClass('go-top-visible'):
					this.goTop.removeClass('go-top-visible');
					$('.fb-link').addClass('fb-visible');
			},
			clickHandler: function (self) {
				self.goTop.on('click', function (e) {
					e.preventDefault();
					$('html, body').animate({ scrollTop: 0 }, 800);
				});
			}
		}
	}

	/* Temp Plugin
	 * ================================== */

	$.fn.Temp = function (option) {
		return this.each(function () {
			var $this = $(this), data = $this.data('Temp'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('Temp', new Temp(this, options));
			}
		});
	}

	/*$(window).scroll(function()
		{
		    if( $(window).scrollTop() > 0 )
		{
		        $('.sticky-holder').css({display: 'block'});
		} 
		else 
		{
		        $('.sticky-holder').css({display: 'none'});
		}
	});*/

})(jQuery, window);

/*
Plugin Name: 	smoothScroll for jQuery.
Written by: 	Crivos - (http://www.crivos.com)
Version: 		0.1
*/
(function($) {

	$.extend({

		browserSelector: function() {

			var u = navigator.userAgent,
				ua = u.toLowerCase(),
				is = function (t) {
					return ua.indexOf(t) > -1;
				},
				g = 'gecko',
				w = 'webkit',
				s = 'safari',
				o = 'opera',
				h = document.documentElement,
				b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

			c = b.join(' ');
			h.className += ' ' + c;

		},

		smoothScroll: function() {

			// Scroll Variables (tweakable)
			var defaultOptions = {

				// Scrolling Core
				frameRate        : 150, // [Hz]
				animationTime    : 700, // [px]
				stepSize         : 80, // [px]

				// Pulse (less tweakable)
				// ratio of "tail" to "acceleration"
				pulseAlgorithm   : true,
				pulseScale       : 8,
				pulseNormalize   : 1,

				// Acceleration
				accelerationDelta : 20,  // 20
				accelerationMax   : 1,   // 1

				// Keyboard Settings
				keyboardSupport   : true,  // option
				arrowScroll       : 50,     // [px]

				// Other
				touchpadSupport   : true,
				fixedBackground   : true,
				excluded          : ""
			};

			var options = defaultOptions;

			// Other Variables
			var isExcluded = false;
			var isFrame = false;
			var direction = { x: 0, y: 0 };
			var initDone  = false;
			var root = document.documentElement;
			var activeElement;
			var observer;
			var deltaBuffer = [ 120, 120, 120 ];

			var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
						pageup: 33, pagedown: 34, end: 35, home: 36 };


			/***********************************************
			 * INITIALIZE
			 ***********************************************/

			/**
			 * Tests if smooth scrolling is allowed. Shuts down everything if not.
			 */
			function initTest() {

				var disableKeyboard = false;

				// disable keys for google reader (spacebar conflict)
				if (document.URL.indexOf("google.com/reader/view") > -1) {
					disableKeyboard = true;
				}

				// disable everything if the page is blacklisted
				if (options.excluded) {
					var domains = options.excluded.split(/[,\n] ?/);
					domains.push("mail.google.com"); // exclude Gmail for now
					for (var i = domains.length; i--;) {
						if (document.URL.indexOf(domains[i]) > -1) {
							observer && observer.disconnect();
							removeEvent("mousewheel", wheel);
							disableKeyboard = true;
							isExcluded = true;
							break;
						}
					}
				}

				// disable keyboard support if anything above requested it
				if (disableKeyboard) {
					removeEvent("keydown", keydown);
				}

				if (options.keyboardSupport && !disableKeyboard) {
					addEvent("keydown", keydown);
				}
			}

			/**
			 * Sets up scrolls array, determines if frames are involved.
			 */
			function init() {

				if (!document.body) return;

				var body = document.body;
				var html = document.documentElement;
				var windowHeight = window.innerHeight;
				var scrollHeight = body.scrollHeight;

				// check compat mode for root element
				root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
				activeElement = body;

				initTest();
				initDone = true;

				// Checks if this script is running in a frame
				if (top != self) {
					isFrame = true;
				}

				/**
				 * This fixes a bug where the areas left and right to
				 * the content does not trigger the onmousewheel event
				 * on some pages. e.g.: html, body { height: 100% }
				 */
				else if (scrollHeight > windowHeight &&
						(body.offsetHeight <= windowHeight ||
						 html.offsetHeight <= windowHeight)) {

					// DOMChange (throttle): fix height
					var pending = false;
					var refresh = function () {
						if (!pending && html.scrollHeight != document.height) {
							pending = true; // add a new pending action
							setTimeout(function () {
								html.style.height = document.height + 'px';
								pending = false;
							}, 500); // act rarely to stay fast
						}
					};
					html.style.height = 'auto';
					setTimeout(refresh, 10);

					var config = {
						attributes: true,
						childList: true,
						characterData: false
					};

					observer = new MutationObserver(refresh);
					observer.observe(body, config);

					// clearfix
					if (root.offsetHeight <= windowHeight) {
						var underlay = document.createElement("div");
						underlay.style.clear = "both";
						body.appendChild(underlay);
					}
				}

				// gmail performance fix
				if (document.URL.indexOf("mail.google.com") > -1) {
					var s = document.createElement("style");
					s.innerHTML = ".iu { visibility: hidden }";
					(document.getElementsByTagName("head")[0] || html).appendChild(s);
				}
				// facebook better home timeline performance
				// all the HTML resized images make rendering CPU intensive
				else if (document.URL.indexOf("www.facebook.com") > -1) {
					var home_stream = document.getElementById("home_stream");
					home_stream && (home_stream.style.webkitTransform = "translateZ(0)");
				}
				// disable fixed background
				if (!options.fixedBackground && !isExcluded) {
					body.style.backgroundAttachment = "scroll";
					html.style.backgroundAttachment = "scroll";
				}
			}


			/************************************************
			 * SCROLLING
			 ************************************************/

			var que = [];
			var pending = false;
			var lastScroll = +new Date;

			/**
			 * Pushes scroll actions to the scrolling queue.
			 */
			function scrollArray(elem, left, top, delay) {

				delay || (delay = 1000);
				directionCheck(left, top);

				if (options.accelerationMax != 1) {
					var now = +new Date;
					var elapsed = now - lastScroll;
					if (elapsed < options.accelerationDelta) {
						var factor = (1 + (30 / elapsed)) / 2;
						if (factor > 1) {
							factor = Math.min(factor, options.accelerationMax);
							left *= factor;
							top  *= factor;
						}
					}
					lastScroll = +new Date;
				}

				// push a scroll command
				que.push({
					x: left,
					y: top,
					lastX: (left < 0) ? 0.99 : -0.99,
					lastY: (top  < 0) ? 0.99 : -0.99,
					start: +new Date
				});

				// don't act if there's a pending queue
				if (pending) {
					return;
				}

				var scrollWindow = (elem === document.body);

				var step = function (time) {

					var now = +new Date;
					var scrollX = 0;
					var scrollY = 0;

					for (var i = 0; i < que.length; i++) {

						var item = que[i];
						var elapsed  = now - item.start;
						var finished = (elapsed >= options.animationTime);

						// scroll position: [0, 1]
						var position = (finished) ? 1 : elapsed / options.animationTime;

						// easing [optional]
						if (options.pulseAlgorithm) {
							position = pulse(position);
						}

						// only need the difference
						var x = (item.x * position - item.lastX) >> 0;
						var y = (item.y * position - item.lastY) >> 0;

						// add this to the total scrolling
						scrollX += x;
						scrollY += y;

						// update last values
						item.lastX += x;
						item.lastY += y;

						// delete and step back if it's over
						if (finished) {
							que.splice(i, 1); i--;
						}
					}

					// scroll left and top
					if (scrollWindow) {
						window.scrollBy(scrollX, scrollY);
					}
					else {
						if (scrollX) elem.scrollLeft += scrollX;
						if (scrollY) elem.scrollTop  += scrollY;
					}

					// clean up if there's nothing left to do
					if (!left && !top) {
						que = [];
					}

					if (que.length) {
						requestFrame(step, elem, (delay / options.frameRate + 1));
					} else {
						pending = false;
					}
				};

				// start a new queue of actions
				requestFrame(step, elem, 0);
				pending = true;
			}

			/***********************************************
			 * EVENTS
			 ***********************************************/

			/**
			 * Mouse wheel handler.
			 * @param {Object} event
			 */
			function wheel(event) {

				if (!initDone) {
					init();
				}

				var target = event.target;
				var overflowing = overflowingAncestor(target);

				// use default if there's no overflowing
				// element or default action is prevented
				if (!overflowing || event.defaultPrevented ||
					isNodeName(activeElement, "embed") ||
				   (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
					return true;
				}

				var deltaX = event.wheelDeltaX || 0;
				var deltaY = event.wheelDeltaY || 0;

				// use wheelDelta if deltaX/Y is not available
				if (!deltaX && !deltaY) {
					deltaY = event.wheelDelta || 0;
				}

				// check if it's a touchpad scroll that should be ignored
				if (!options.touchpadSupport && isTouchpad(deltaY)) {
					return true;
				}

				// scale by step size
				// delta is 120 most of the time
				// synaptics seems to send 1 sometimes
				if (Math.abs(deltaX) > 1.2) {
					deltaX *= options.stepSize / 120;
				}
				if (Math.abs(deltaY) > 1.2) {
					deltaY *= options.stepSize / 120;
				}

				scrollArray(overflowing, -deltaX, -deltaY);
				event.preventDefault();
			}

			/**
			 * Keydown event handler.
			 * @param {Object} event
			 */
			function keydown(event) {

				var target   = event.target;
				var modifier = event.ctrlKey || event.altKey || event.metaKey ||
							  (event.shiftKey && event.keyCode !== key.spacebar);

				// do nothing if user is editing text
				// or using a modifier key (except shift)
				// or in a dropdown
				if ( /input|textarea|select|embed/i.test(target.nodeName) ||
					 target.isContentEditable ||
					 event.defaultPrevented   ||
					 modifier ) {
				  return true;
				}
				// spacebar should trigger button press
				if (isNodeName(target, "button") &&
					event.keyCode === key.spacebar) {
				  return true;
				}

				var shift, x = 0, y = 0;
				var elem = overflowingAncestor(activeElement);
				var clientHeight = elem.clientHeight;

				if (elem == document.body) {
					clientHeight = window.innerHeight;
				}

				switch (event.keyCode) {
					case key.up:
						y = -options.arrowScroll;
						break;
					case key.down:
						y = options.arrowScroll;
						break;
					case key.spacebar: // (+ shift)
						shift = event.shiftKey ? 1 : -1;
						y = -shift * clientHeight * 0.9;
						break;
					case key.pageup:
						y = -clientHeight * 0.9;
						break;
					case key.pagedown:
						y = clientHeight * 0.9;
						break;
					case key.home:
						y = -elem.scrollTop;
						break;
					case key.end:
						var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
						y = (damt > 0) ? damt+10 : 0;
						break;
					case key.left:
						x = -options.arrowScroll;
						break;
					case key.right:
						x = options.arrowScroll;
						break;
					default:
						return true; // a key we don't care about
				}

				scrollArray(elem, x, y);
				event.preventDefault();
			}

			/**
			 * Mousedown event only for updating activeElement
			 */
			function mousedown(event) {
				activeElement = event.target;
			}


			/***********************************************
			 * OVERFLOW
			 ***********************************************/

			var cache = {}; // cleared out every once in while
			setInterval(function () { cache = {}; }, 10 * 1000);

			var uniqueID = (function () {
				var i = 0;
				return function (el) {
					return el.uniqueID || (el.uniqueID = i++);
				};
			})();

			function setCache(elems, overflowing) {
				for (var i = elems.length; i--;)
					cache[uniqueID(elems[i])] = overflowing;
				return overflowing;
			}

			function overflowingAncestor(el) {
				var elems = [];
				var rootScrollHeight = root.scrollHeight;
				do {
					var cached = cache[uniqueID(el)];
					if (cached) {
						return setCache(elems, cached);
					}
					elems.push(el);
					if (rootScrollHeight === el.scrollHeight) {
						if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
							return setCache(elems, document.body); // scrolling root in WebKit
						}
					} else if (el.clientHeight + 10 < el.scrollHeight) {
						overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
						if (overflow === "scroll" || overflow === "auto") {
							return setCache(elems, el);
						}
					}
				} while (el = el.parentNode);
			}


			/***********************************************
			 * HELPERS
			 ***********************************************/

			function addEvent(type, fn, bubble) {
				window.addEventListener(type, fn, (bubble||false));
			}

			function removeEvent(type, fn, bubble) {
				window.removeEventListener(type, fn, (bubble||false));
			}

			function isNodeName(el, tag) {
				return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
			}

			function directionCheck(x, y) {
				x = (x > 0) ? 1 : -1;
				y = (y > 0) ? 1 : -1;
				if (direction.x !== x || direction.y !== y) {
					direction.x = x;
					direction.y = y;
					que = [];
					lastScroll = 0;
				}
			}

			var deltaBufferTimer;

			function isTouchpad(deltaY) {
				if (!deltaY) return;
				deltaY = Math.abs(deltaY)
				deltaBuffer.push(deltaY);
				deltaBuffer.shift();
				clearTimeout(deltaBufferTimer);
				var allEquals    = (deltaBuffer[0] == deltaBuffer[1] &&
									deltaBuffer[1] == deltaBuffer[2]);
				var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
									isDivisible(deltaBuffer[1], 120) &&
									isDivisible(deltaBuffer[2], 120));
				return !(allEquals || allDivisable);
			}

			function isDivisible(n, divisor) {
				return (Math.floor(n / divisor) == n / divisor);
			}

			var requestFrame = (function () {
				  return  window.requestAnimationFrame       ||
						  window.webkitRequestAnimationFrame ||
						  function (callback, element, delay) {
							  window.setTimeout(callback, delay || (1000/60));
						  };
			})();

			var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;


			/***********************************************
			 * PULSE
			 ***********************************************/

			/**
			 * Viscous fluid with a pulse for part and decay for the rest.
			 * - Applies a fixed force over an interval (a damped acceleration), and
			 * - Lets the exponential bleed away the velocity over a longer interval
			 * - Michael Herf, http://stereopsis.com/stopping/
			 */
			function pulse_(x) {
				var val, start, expx;
				// test
				x = x * options.pulseScale;
				if (x < 1) { // acceleartion
					val = x - (1 - Math.exp(-x));
				} else {     // tail
					// the previous animation ended here:
					start = Math.exp(-1);
					// simple viscous drag
					x -= 1;
					expx = 1 - Math.exp(-x);
					val = start + (expx * (1 - start));
				}
				return val * options.pulseNormalize;
			}

			function pulse(x) {
				if (x >= 1) return 1;
				if (x <= 0) return 0;

				if (options.pulseNormalize == 1) {
					options.pulseNormalize /= pulse_(1);
				}
				return pulse_(x);
			}

			addEvent("mousedown", mousedown);
			addEvent("mousewheel", wheel);
			addEvent("load", init);

		}

	});

})(jQuery);