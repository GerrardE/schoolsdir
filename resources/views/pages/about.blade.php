@extends('layouts.app')
@section('title', 'About')
@section('content')
@include('inc.header')
<!-- - - - - - - - - - - - - - Content - - - - - - - - - - - - - - - - -->
<div id="content">
    <!-- - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - -->
    <div class="breadcrumbs-wrap with-bg">
        <div class="container">
            <h1 class="page-title">About Us</h1>
            <ul class="breadcrumbs">
                <li><a href="/">Home</a></li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
    <!-- - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - -->
    <div class="page-content-wrap">
        <div class="container">
            <div class="row">
                <main id="main" class="col-md-8 col-sm-12">
                <div class="content-element3">
                    <h3>Schools</h3>
                    <p>Schoolsss. </p>
                </div>
                <div class="content-element3">
                    <img src="images/750x550_img1.png" alt="">
                </div>
                <div class="content-element3">
                    <p>fghjjkkkkw</p>
                </div>
                <div class="content-element3">
                    <div class="blockquote-holder with-bg style-2">
                        <blockquote>
                            <div class="author">Our Vision</div>
                            <p>“wwwww”</p>
                        </blockquote>
                    </div>
                </div>
                <div class="content-element2">
                    <p>wwww</p>
                </div>
                <div class="content-element3">
                    <div class="blockquote-holder with-bg style-2">
                        <blockquote>
                            <div class="author">Our Mission</div>
                            <p>“wwww”</p>
                        </blockquote>
                    </div>
                </div>
                <div class="share-wrap">
                    <span class="share-title">Share this:</span>
                    <ul class="social-icons share">
                        <li><a href="#" class="sh-facebook"><i class="icon-facebook"></i>Facebook</a></li>
                        <li><a href="#" class="sh-twitter"><i class="icon-twitter"></i>Twitter</a></li>
                        <li><a href="#" class="sh-mail"><i class="icon-mail"></i>Email to a Friend</a></li>
                    </ul>
                </div>
                </main>
                <aside id="sidebar" class="col-md-4 col-sm-12">
                <!-- widget -->
                <div class="widget">
                    <div class="action-widget style-2 type-vr">
                        <!-- action-item -->
                        <a href="#" class="action-item register">
                            <i class="icon icon-basic-todo-txt"></i>
                            <h5 class="action-title"><b>Create an account</b></h5>
                            <p></p>
                        </a>
                        <!-- action-item -->
                        <a href="#" class="action-item get-involved">
                            <i class="icon icon-ecommerce-megaphone"></i>
                            <h5 class="action-title"><b>Register your school</b></h5>
                            <p></p>
                        </a>
                        <!-- action-item -->
                        <a href="#" class="action-item event">
                            <i class="icon icon-basic-mail-open-text"></i>
                            <h5 class="action-title"><b>Update your school profile</b></h5>
                            <p>Provide interesting school facts</p>
                        </a>
                    </div>
                </div>
                <!-- widget -->
                <div class="widget widget-holder">
                    <div class="widget-twitter two-tweet">
                        <h5 class="wt-title">From Twitter</h5>
                        <div id="twitter" class="twitter" data-twitter-items="2"></div>
                        <a href="#" class="info-btn">Follow us on Twitter</a>
                    </div>
                </div>
                <div class="widget widget-holder">
                    <div class="widget-instagram">
                        <h5 class="wt-title">From Instagram</h5>
                        <div class="carousel-type-2 type-2">
                            <div id="instafeed" class="instagram-carousel"></div>
                        </div>
                        <a href="#" class="info-btn">Follow us on Instagram</a>
                    </div>
                </div>
                </aside>
            </div>
        </div>
    </div>
</div>
<!-- - - - - - - - - - - - - end Content - - - - - - - - - - - - - - - -->
@endsection
