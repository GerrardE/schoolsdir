<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
   <head>
        <!-- Basic Page Needs
            ================================================== -->
        <meta charset="utf-8">
        <!-- Mobile Specific Metas
        ================================================== -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <title> {{ config('app.name') }} | @yield('title') </title>
        {!! MetaTag::tag('description') !!}
        {!! MetaTag::tag('image') !!}
        {{--Set default share picture after custom section pictures--}}
        {!! MetaTag::tag('image', asset('images/favicon.ico')) !!}

        <!-- Google Web Fonts ================================================== -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CLato:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">

        <!-- Vendor CSS
        ============================================ -->

        <link rel="stylesheet" href="font/linea-basic/styles.css">
        <link rel="stylesheet" href="font/linea-ecommerce/styles.css">
        <link rel="stylesheet" href="font/linea-arrows/styles.css">
        <link rel="stylesheet" href="plugins/fancybox/jquery.fancybox.css">

        <!-- CSS theme files
        ============================================ -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/fontello.css">
        <link rel="stylesheet" href="css/owl.carousel.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsive.css">
   </head>
   <body>
        {{-- <div class="loader"></div> --}}
        <!-- - - - - - - - - - - - - - Wrapper - - - - - - - - - - - - - - - - -->
        <div id="wrapper" class="wrapper-container">
        <!-- - - - - - - - - - - - - Mobile Menu - - - - - - - - - - - - - - -->
        <nav id="mobile-advanced" class="mobile-advanced"></nav>

            @yield('content')
        <!-- - - - - - - - - - - - - - Footer - - - - - - - - - - - - - - - - -->
        <footer id="footer" class="footer-3">
            <div class="call-out join-us">
            <div class="container">
                <div class="row flex-row">
                    <div class="col-md-8">
                        <div class="bg-col-1">
                        <h5>Get newsletter</h5>
                        <form id="newsletter" class="join-form">
                            <button type="submit" class="btn btn-style-4 btn-big f-right" data-type="submit">Sign Up</button>
                            <div class="input-holder">
                                <input type="email" name="newsletter-email" placeholder="Email address">
                            </div>
                        </form>
                        </div>
                    </div>
                    <a href="#" class="col-md-4">
                        <div class="bg-col-2">
                        <div class="align-center">
                            <h5>TELL US ABOUT YOUR SCHOOL!</h5>
                        </div>
                        </div>
                    </a>
                </div>
            </div>
            </div>
            <div class="main-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="widget">
                        <!-- <a href="#" class="logo"><img src="images/logo2.png" alt=""></a> -->
                        <p>Schools<br>
                            Address.
                        </p>
                        <p>Phone: <span>+234 (0)802 269 4000</span> <br>
                            E-mail: <a href="mailto:#" class="link-text">schools@gmail.com</a>
                        </p>
                        <a href="#" class="link-text">Privacy Policy</a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="widget">
                        <h6 class="widget-title">Quick Links</h6>
                        <ul class="info-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/schoolsdir">Schools Directory</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="widget">
                        <h6 class="widget-title">Connect With Schools</h6>
                        <ul class="social-icons">
                            <li><a href="https://www.https://www.facebook.com" target="_blank"><i class="icon-facebook"></i></a></li>
                            <li><a href="https://www.https://twitter.com/" target="_blank"><i class="icon-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i class="icon-instagram-5"></i></a></li>
                        </ul>
                        </div>
                        <div class="widget">
                        <div class="copyright">
                            <p>Copyright © 2019 Schools. <br> All Rights Reserved.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
        <!-- - - - - - - - - - - - - end Footer - - - - - - - - - - - - - - - -->
        </div>
        <!-- - - - - - - - - - - - end Wrapper - - - - - - - - - - - - - - -->
        <!-- JS Libs & Plugins
            ============================================ -->
        <script src="js/libs/jquery.modernizr.js"></script>
        <script src="js/libs/jquery-2.2.4.min.js"></script>
        <script src="js/libs/jquery-ui.min.js"></script>
        <script src="js/libs/retina.min.js"></script>
        <script src="plugins/instafeed.min.js"></script>
        <script src="plugins/twitter/jquery.tweet.js"></script>
        <script src="plugins/jquery.queryloader2.min.js"></script>
        <script src="plugins/fancybox/jquery.fancybox.min.js"></script>
        <script src="plugins/owl.carousel.min.js"></script>
        <script src="plugins/bootstrap.js"></script>
        <!-- JS theme files
            ============================================ -->
        <script src="js/plugins.js"></script>
        <script src="js/script.js"></script>
   </body>
</html>
