;(function($){

	'use strict';

	$(function(){

		document.addEventListener("touchstart", function() {},false);

		if ('ontouchstart' in document.documentElement) {
			$('body').css('cursor', 'pointer');
		}

		/* ---------------------------------------------------- */
		/*	Load more											*/
		/* ---------------------------------------------------- */

		if ($('#load-more').length) {
			$('#load-more').on('click',function() {
				$(this).hide('slow');
				$('.portfolio-holder .add-item').show('slow');
			});
	    }

	    /* ---------------------------------------------------- */
		/*	flickr Gallery									    */
		/* ---------------------------------------------------- */

		if ($('#flickr').length) {
				$('#flickr').photostream({
			    api_key: '4ed566a8c1652e0548a2e91832b95db5',
			    user_id: '137251248@N05',
	            image_count: 14
			});

			$('#flickr').on('ps.complete', function () {
			    $(this).justifiedGallery({
			        rowHeight: 260,
			        maxRowHeight: 400,
			        lastRow: 'hide',
			        captions: false,
			        randomize: true,
			        margins: 4
			    });
			});

	    }

		/* ---------------------------------------------------- */
		/*	Items equal height									*/
		/* ---------------------------------------------------- */

		$(window).on('load resize',function() {
			
			//set the starting bigestHeight variable  
		    var biggestHeight = 0;  
		    //check each of them  
		    $('.project > .project-description').each(function(){  
		        //if the height of the current element is  
		        //bigger then the current biggestHeight value  
		        if($(this).height() > biggestHeight){  
		            //update the biggestHeight with the  
		            //height of the current elements  
		            biggestHeight = $(this).height();  
		        }  
		    });  
		    //when checking for biggestHeight is done set that  
		    //height to all the elements  
		    $('.project > .project-description').height(biggestHeight); 
		    
		});

	    /* ---------------------------------------------------- */
		/*	Revolution slider									*/
		/* ---------------------------------------------------- */

	    if ($('#rev-slider').length) {
			jQuery("#rev-slider").revolution({
	            sliderType:"standard",
		    	spinner: "spinner3",
		    	responsiveLevels: [4096,1024,768,480],
		    	delay:6000,
	            navigation: {
	                arrows:{
	                	enable:true,
	                	left: {
							container:"slider",
				            h_align:"left",
				            v_align:"center",
				            h_offset:30,
				            v_offset:0
						},
						right: {
				            container:"slider",
				            h_align:"right",
				            v_align:"center",
				            h_offset:30,
				            v_offset:0
						}
	                }
	            },
	            gridwidth:1140,
	            gridheight:700
	        });

	    }

	    if ($('#rev-slider-container').length) {
	    	jQuery("#rev-slider-container").revolution({
	    		sliderType:"standard",
		    	spinner: "spinner3",
		    	sliderLayout:"auto",
		    	responsiveLevels: [1024,778,480],
		    	delay:6000,
	            navigation: {
	                arrows:{
	                	enable:true,
	                	left: {
							container:"slider",
				            h_align:"left",
				            v_align:"center",
				            h_offset:20,
				            v_offset:0
						},
						right: {
				            container:"slider",
				            h_align:"right",
				            v_align:"center",
				            h_offset:20,
				            v_offset:0
						}
	                }
	            }
	        });
	    }

	    /* ---------------------------------------------------- */
		/*	Chose donate									    */
		/* ---------------------------------------------------- */

	    if ($('#chose-donate').length){
	    	$(".chose-item").on('click',function() {
	            $(this).addClass('active').siblings().removeClass('active');
	            return false;
	        });
	    }

	    /* ---------------------------------------------------- */
		/*	Menu switcher									    */
		/* ---------------------------------------------------- */

		if ($('#navbar-menu').length){

			$(window).on("load",function(){

				$(".navbar-toggle").on('click',function() {
					$(this).toggleClass('active');
		            $('#navbar-menu').toggleClass('open-navbar');
		            return false;
		        });

		        var $win = $('.wrapper-container'); // or $box parent container
				var $box = $("#navbar-menu");
				
			 	$win.on("click.Bst", function(event){		
					if ( 
		            $box.has(event.target).length === 0 //checks if descendants of $box was clicked
		            &&
		            !$box.is(event.target) //checks if the $box itself was clicked
			        ){
						$('#navbar-menu').removeClass('open-navbar');
						$(".navbar-toggle").removeClass('active');
					}
				});

				$("#navbar-close").on('click',function() {
		            $('#navbar-menu').removeClass('open-navbar');
		            return false;
		        });

		        $("li.dropdown > a").on('click',function() {
		            $(this).next('.sub-menu-wrap').slideToggle(400);
		            return false;
		        });
				  
			});

		}

		/* ---------------------------------------------------- */
		/*	Menu switcher									    */
		/* ---------------------------------------------------- */

		if ($('.tribe-events-filters').length){

			$('#tribe_events_filters_toggle').on('click', function() {
				$('.tribe-events-filters').addClass('show-filter');
			});

			$('#tribe_events_filters_close_filters').on('click', function() {
				$('.tribe-events-filters').removeClass('show-filter');
			});

			$('.tribe-events-filters-group-heading').on('click', function() {
				$(this).parent('.tribe_events_filter_item').toggleClass('active');
			});

		}

	    /* ---------------------------------------------------- */
        /*	Isotope												*/
        /* ---------------------------------------------------- */

		$( window ).on('load', function() {

		  	var $container = $('.isotope');
		    // filter buttons
		    $('#filters button').on('click', function(){
		    	var $this = $(this);
		        // don't proceed if already selected
		        if ( !$this.hasClass('is-checked') ) {
		          $this.parents('#options').find('.is-checked').removeClass('is-checked');
		          $this.addClass('is-checked');
		        }
				var selector = $this.attr('data-filter');
				$container.isotope({  itemSelector: '.item', filter: selector });
				return false;
		    });

		    $.mad_core.isotope();
		     
		});

		/* ---------------------------------------------------- */
        /*	Gallery carousel									*/
        /* ---------------------------------------------------- */

	  	var pageCarousel = $('.owl-carousel');

		if(pageCarousel.length){

			$('.owl-carousel').not('#thumbnails').each(function(){
	
				/* Max items counting */
				var max_items = $(this).data('max-items');
				var tablet_items = max_items;
				if(max_items > 1){
					tablet_items = max_items - 1;
				}
				var mobile_items = 1;

				var autoplay_carousel = $(this).data('autoplay');

				var center_carousel = $(this).data('center');

				var item_margin = $(this).data('item-margin');

				var item_dots = $(this).data('dots');
				
				/* Install Owl Carousel */
				$(this).owlCarousel({
				    smartSpeed : 450,
				    nav : true,
				    loop  : true,
				    autoplay : autoplay_carousel,
				    center: center_carousel,
				    autoplayTimeout: 3000,
				    navText : false,
				    margin: item_margin,
				    lazyLoad: true,
					dots: true,
      				dotsData: item_dots,
				    rtl: $.mad_core.SUPPORT.ISRTL ? true : false,
				    responsiveClass:true,
				    responsive : {
				        0:{
				            items:mobile_items
				        },
				        481:{
				            items:tablet_items
				        },
				        992:{
				            items:max_items
				        }
				    }
				});


			});

			$('.custom-owl-prev').on('click',function(){

				$('.owl-carousel').trigger('prev.owl.carousel');

				return false;

			});

			$('.custom-owl-next').on('click',function(){

				$('.owl-carousel').trigger('next.owl.carousel');

				return false;

			});

			if($('#thumbnails').length){
				$('#thumbnails').each(function(){
					
					/* Max items counting */
					var data = $(this).data();
					var max_items = $(this).data('max-items');
					var tablet_items = max_items;
					if(max_items > 1){
						tablet_items = max_items - 1;
					}
					var mobile_items = 1;

					var autoplay_carousel = $(this).data('autoplay');
					
					$(this).owlCarousel({
						items : max_items,
						URLhashListener : false,
						navSpeed : 800,
						nav : false,
						loop : false,
						margin: 10,
						rtl: $.mad_core.SUPPORT.ISRTL ? true : false,
						navText:false,
						responsive : {
					        0:{
					            items:tablet_items
					        },
					        481:{
					            items:max_items
					        },
					        1200:{
					            items:max_items
					        }
					    }
				    });
				});
			    
			}
		}

		/* ---------------------------------------------------- */
        /*	SmoothScroll										*/
        /* ---------------------------------------------------- */

		try {
			$.browserSelector();
			var $html = $('html');
			if ( $html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10') ) {
				$.smoothScroll();
			}
		} catch(err) {}

		/* ---------------------------------------------------- */
        /*	Custom Select										*/
        /* ---------------------------------------------------- */

		if ($('.custom-select').length) {
			$('.custom-select').madCustomSelect();
		}

		/* ---------------------------------------------------- */
		/*	Background size screen								*/
		/* ---------------------------------------------------- */

	    if ($('.media-holder.full-src').length) {

	    	$(window).on('load resize',function(){
		        $('.media-holder').css('height', window.innerHeight+'px');
		    });

	    }

		/* ---------------------------------------------------- */
        /*	Tabs												*/
        /* ---------------------------------------------------- */

        $(window).on("load",function(){

        	var tabs = $('.tabs-section');
			if(tabs.length){
				tabs.tabs({
					beforeActivate: function(event, ui) {
				        var hash = ui.newTab.children("li a").attr("href");
				   	},
					hide : {
						effect : "fadeOut",
						duration : 450
					},
					show : {
						effect : "fadeIn",
						duration : 450
					},
					updateHash : false
				});
			}

			/* ------------------------------------------------
				Tabs - opacity
			------------------------------------------------ */

			var tabs = $('.mad-tabs');

			if(tabs.length){

				tabs.MadTabs({
					easing: 'easeOutQuint',
					speed: 600,
					cssPrefix: 'mad-'
				});

			}

        });

		/* ---------------------------------------------------- */
        /*	Newsletter											*/
        /* ---------------------------------------------------- */

	    var subscribe = $('[id^="newsletter"]');
	      subscribe.append('<div class="message-container-subscribe"></div>');
	      var message = $('.message-container-subscribe'),text;

	      subscribe.on('submit',function(e){
	        var self = $(this);
	        
	        if(self.find('input[type="email"]').val() == ''){
	          text = "Please enter your e-mail!";
	          message.html('<div class="alert-box warning"><p>'+text+'</p></div>')
	            .slideDown()
	            .delay(4000)
	            .slideUp(function(){
	              $(this).html("");
	            });

	        }else{
	          self.find('span.error').hide();
	          $.ajax({
	            type: "POST",
	            url: "bat/newsletter.php",
	            data: self.serialize(), 
	            success: function(data){
	              if(data == '1'){
	                text = "Your email has been sent successfully!";
	                message.html('<div class="alert-box success"><p>'+text+'</p></div>')
	                  .slideDown()
	                  .delay(4000)
	                  .slideUp(function(){
	                    $(this).html("");
	                  })
	                  .prevAll('input[type="email"]').val("");
	              }else{
	                text = "Invalid email address!";
	                message.html('<div class="alert-box error"></i><p>'+text+'</p></div>')
	                  .slideDown()
	                  .delay(4000)
	                  .slideUp(function(){
	                    $(this).html("");
	                  });
	              }
	            }
	          });
	        }
	        e.preventDefault();
	    });

		/* ---------------------------------------------------- */
        /*	Loader												*/
        /* ---------------------------------------------------- */

		if($('.loader').length){

        	$("body").queryLoader2({
		        backgroundColor: '#14468c',
		        barColor : '#bf0d3e',
		        barHeight: 4,
		        deepSearch:true,
		        minimumTime:1000,
		        onComplete: function(){
		        	$(".loader").fadeOut('200');
		        }
	      	});

        }

		/* ---------------------------------------------------- */
        /*	Sticky menu											*/
        /* ---------------------------------------------------- */

		$('body').Temp({
			sticky: true
		});

		/* ---------------------------------------------------- */
        /*	SmoothScroll										*/
        /* ---------------------------------------------------- */

		try {
			$.browserSelector();
			var $html = $('html');
			if ( $html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10') ) {
				$.smoothScroll();
			}
		} catch(err) {}

		/* ------------------------------------------------
		Instagram Feed
		------------------------------------------------ */

	    if($('.instagram-feed').length){

	    	$('#instafeed').each(function(){

	    		var insta_items = $(this).data('instagram');

	    		var feed = new Instafeed({
			      target: 'instafeed',
			      tagName: 'living',
			      limit: insta_items,
			      get: 'user',
			      userId: 6147419631,
			      accessToken: '6147419631.1677ed0.1742f4ec1cbc488da871b09de5e6e7a1',
			      clientId: 'd38b6ce81bf644e9b5818371725ebc5e',
			      resolution: 'standard_resolution',
			      template: '<div class="nv-instafeed-item"><a href="{{image}}" title="{{location}}" data-fancybox="instagram"><img src="{{image}}" /></a></div>'
			    });
			      
			    feed.run();

	    	});

	    }

	    if($('.instagram-carousel').length){

	    	$('#instafeed').each(function(){

	    		var feed = new Instafeed({
			      target: 'instafeed',
			      tagName: 'living',
			      limit: 6,
			      get: 'user',
			      userId: 6147419631,
			      accessToken: '6147419631.1677ed0.1742f4ec1cbc488da871b09de5e6e7a1',
			      clientId: 'd38b6ce81bf644e9b5818371725ebc5e',
			      resolution: 'standard_resolution',
			      template: '<div class="nv-instafeed-item"><a href="{{image}}" title="{{location}}" data-fancybox="instagram"><img src="{{image}}" /></a></div>',
			        after: function() {
				        $('#instafeed').addClass('owl-carousel').owlCarousel({
				            items: 1,
				            nav : true,
				            dots: false,
						    loop  : true,
						    autoplay : true,
						    navText: false
				        });
				    }
			    });
			      
			    feed.run();

	    	});

	    }

	    /* ------------------------------------------------
		Twitter Feed
		------------------------------------------------ */

	    if($("#twitter").length){

    		$('#twitter').tweet({

			    modpath: 'plugins/twitter/',
			    username: "velikorodnov",
			    count: 3,
			    loading_text: 'loading twitter feed...'
			    /* etc... */

			});

			if ($('.widget-twitter').hasClass('two-tweet')) {
				$('.tweet_list > li').append('<div class="wrapper"><div class="entry-meta"><time class="entry-date" datetime="2018-03-25">March 25, 2018</time></div><div class="slash-list"><a href="#">Retweet</a><a href="#">Favorite</a></div></div>');
			} else {
				$('.tweet_list > li').append('<div class="entry-meta"><time class="entry-date" datetime="2018-03-25">March 25, 2018</time></div><div class="slash-list"><a href="#">Retweet</a><a href="#">Favorite</a></div>');
			}

		}

		if($(".tw-list").length){

    		$('.tw-list').tweet({

			    modpath: 'plugins/twitter/',
			    username: "velikorodnov",
			    count: 6,
			    loading_text: 'loading twitter feed...'
			    /* etc... */

			});
		}

		if($(".tweets").length){

			var follow = $(".tweets"),
			config = {
				modpath: 'plugins/twitter/',
			    username: "velikorodnov",
			    count: 3,
			}

			$(".tweets").each(function(){

				var self = $(this);

				self.tweet(config);
				var owl = self.data('owlCarousel');

				var owlConfig = {
					smartSpeed : 450,
				    autoplay : true,
				    autoplayTimeout: 3000,
				    navText : false,
				    lazyLoad: true,
					nav:true,
					loop: true,
					items: 1
				}
				self.children('.tweet_list').addClass('owl-carousel').owlCarousel(owlConfig);

			});
		}

		/* ------------------------------------------------
		Facebook Feed
		------------------------------------------------ */

		

		/* ---------------------------------------------------- */
		/*	Countdown											*/
		/* ---------------------------------------------------- */

		$('.countdown').each(function(){
			var $this = $(this),
				endDate = $this.data(),
				until = new Date(
					endDate.year,
					endDate.month || 0,
					endDate.day || 1,
					endDate.hours || 0,
					endDate.minutes || 0,
					endDate.seconds || 0
				);
			// initialize
			$this.countdown({
				until : until,
				format : 'dHMS',
				labels : ['years', 'month', 'weeks', 'days', 'hours', 'minutes', 'seconds']
			});
		});
		
		/* ---------------------------------------------------- */
        /*	Price Scale										    */
        /* ---------------------------------------------------- */

		var slider;
		if($('#price').length){
			slider = $('#price').slider({ 
		 		animate: true,
				range: true,
				values: [ 1, 99 ],
				min: 1,
				max: 99,
				slide : function(event ,ui){
					$('.range-values').find('.first-limit').val('$' + ui.values[0] + ',000');
					$('.range-values').find('.last-limit').val('$' + ui.values[1] + ',000');
				}
			});
		}
		if($('#distance').length){
			slider = $( "#distance" ).slider({
				animate: true,
			    value: 0,
			    min: 0,
			    max: 1000,
			    step: 1,
			    slide: function( event, ui ) {
			       $( "#amount" ).val(  ui.value + " km" );
			       $( "#total" ).val(  "Total: $ " + ui.value );
			    }
		    });
		    $( "#amount" ).val( $( "#distance" ).slider( "value" ) + " km" );
		    $( "#total" ).val( "Total: $ " +  $( "#distance" ).slider( "value" ) );
		}
		

		/* ---------------------------------------------------- */
        /*	Accordion & Toggle									*/
        /* ---------------------------------------------------- */

		var aItem = $('.accordion:not(.toggle) .accordion-item'),
			link = aItem.find('.a-title'),
			$label = aItem.find('label'),
			aToggleItem = $('.accordion.toggle .accordion-item'),
			tLink = aToggleItem.find('.a-title');

			aItem.add(aToggleItem).children('.a-title').not('.active').next().hide();

		function triggerAccordeon($item) {
			$item
			.addClass('active')
			.next().stop().slideDown()
			.parent().siblings()
			.children('.a-title')
			.removeClass('active')
			.next().stop().slideUp();
		}


		if ($label.length) {
			$label.on('click',function(){
				triggerAccordeon($(this).closest('.a-title'))
			});
		} else {
			link.on('click',function(){
				triggerAccordeon($(this))
			});
		}

		tLink.on('click',function(){
			$(this).toggleClass('active')
			.next().stop().slideToggle();

		});

		/* ---------------------------------------------------- */
        /*	Quantity											*/
        /* ---------------------------------------------------- */

		var q = $('.quantity');

		q.each(function(){
			var $this = $(this),
				button = $this.children('button'),
				input = $this.children('input[type="text"]'),
				val = +input.val();

			button.on('click',function(){
				if($(this).hasClass('qty-minus')){
					if(val === 1) return false;
					input.val(--val);
				}
				else{
					input.val(++val);
				}
			});
		});

		/* ---------------------------------------------------- */
        /*	Contact Form										*/
        /* ---------------------------------------------------- */

		if ($('#contact-form').length){

			var cf = $('#contact-form');
			cf.append('<div class="message-container"></div>');

			cf.on("submit",function(event){

				var self = $(this),text;

				var request = $.ajax({
					url:"bat/mail.php",
					type : "post",
					data : self.serialize()
				});

				request.then(function(data){
					if(data == "1"){

						text = "Your message has been sent successfully!";

						cf.find('input:not([type="submit"]),textarea').val('');

						$('.message-container').html('<div class="alert-box success"><i class="icon-smile"></i><p>'+text+'</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});

					}
					else{
						if(cf.find('textarea').val().length < 20){
							text = "Message must contain at least 20 characters!"
						}
						if(cf.find('input').val() == ""){
							text = "All required fields must be filled!";
						}
						$('.message-container').html('<div class="alert-box error"><i class="icon-warning"></i><p>'+text+'</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});
					}
				},function(){
					$('.message-container').html('<div class="alert-box error"><i class="icon-warning"></i><p>Connection to server failed!</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});
				});

				event.preventDefault();

			});

		}

		/* ---------------------------------------------------- */
		/*	Demo switcher									    */
		/* ---------------------------------------------------- */

		$(window).on("load",function(){

			$(".btn-demo").on('click',function() {
	            $('.demo-sw').toggleClass('open');
	            return false;
	        });

	        var $win = $('.wrapper-container'); // or $box parent container
			var $box = $(".demo-sw");
			var $sb = $(".btn-demo");
			
		 	$win.on("click.Bst", function(event){		
				if ( 
	            $box.has(event.target).length == 0 //checks if descendants of $box was clicked
	            &&
	            !$box.is(event.target) //checks if the $box itself was clicked
	            &&
	            !$sb.is(event.target) //checks if the $box itself was clicked
		        ){
					$('.demo-sw').removeClass('open');;
				}
			});
			  
		});

		/* ---------------------------------------------------- */
		/*	Animate a regular anchor navigation					*/
		/* ---------------------------------------------------- */

	    if ($('a.animated').length) {

	    	$('body').localScroll({
	           hash: true,
	           filter: '.animated',
	           onBefore: function(){
                 this.offset = -200;
               }
	        });

	    }

	    /* ---------------------------------------------------- */
		/*	Elevate zoom										*/
		/* ---------------------------------------------------- */

		if($('[data-zoom-image]').length){

			var button = $('.qv-preview');

			$("#zoom-image").elevateZoom({
				gallery:'thumbnails',
				galleryActiveClass: 'active',
				zoomType: "inner",
				cursor: "crosshair",
				responsive:true,
			    zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				easing:true,
				lensFadeIn: 500,
				lensFadeOut: 500
			});

		}

		/* ---------------------------------------------------- */
		/*	Google Maps											*/
		/* ---------------------------------------------------- */

		if ($('#googleMap').length) {

			$(document).ready(function() {

				var myCenter = new google.maps.LatLng(30.2259488, -97.7145152);

				function loadMap() {
				  	var mapProp = {
					    center: myCenter,
					    zoom:13,
					    mapTypeId:google.maps.MapTypeId.ROADMAP

					};

					var map = document.getElementById('googleMap');

					if(map !== null){

				    	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

					}

		            var marker = new google.maps.Marker({
		               position:myCenter,
		               map: map,
		               icon: 'images/map_marker.png'
		            });
		            
		            marker.setMap(map);

		            //Zoom to 7 when clicked on marker
		            google.maps.event.addListener(marker,'click',function() {
		               map.setZoom(9);
		               map.setCenter(marker.getPosition());
		            });

				}
				google.maps.event.addDomListener(window, 'load', loadMap);

			});
			
		}

		if ($('#googleMap2').length) {

			$(document).ready(function() {

				var myCenter = new google.maps.LatLng(30.2259488, -97.7145152);

				function loadMap() {
				  	var mapProp = {
					    center: myCenter,
					    zoom:13,
					    mapTypeId:google.maps.MapTypeId.ROADMAP

					};

					var map = document.getElementById('googleMap2');

					if(map !== null){

				    	var map = new google.maps.Map(document.getElementById("googleMap2"),mapProp);

					}

					var marker = new google.maps.Marker({
		               position:myCenter,
		               map: map,
		               icon: 'images/map_marker.png'
		            });
		            
		            marker.setMap(map);

		            //Zoom to 7 when clicked on marker
		            google.maps.event.addListener(marker,'click',function() {
		               map.setZoom(9);
		               map.setCenter(marker.getPosition());
		            });

				}
				google.maps.event.addDomListener(window, 'load', loadMap);

			});
			
		}

	});

})(jQuery);