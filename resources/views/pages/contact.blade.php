@extends('layouts.app')
@section('title', 'Contact')
@section('content')
@include('inc.header')
<div id="content">

    <!-- - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - -->

    <div class="breadcrumbs-wrap with-bg">

      <div class="container">

        <h1 class="page-title">Contact</h1>

        <ul class="breadcrumbs">

          <li><a href="/">Home</a></li>
          <li>Contact</li>

        </ul>

      </div>

    </div>

    <!-- - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - -->

    <div class="page-content-wrap">

      <div class="container">

        <div class="row">
          <main id="main" class="col-md-8 col-sm-12">

            <div class="content-element7">

              <h3>Contact Information</h3>


            </div>

            <div class="content-element4">
              <h3>We Want to Hear From You</h3>
            </div>

            <div class="join-us style-4">
              <form id="contact-form" class="join-form" method="POST" action="{{ action('ContactController@contact') }}}">
                  @csrf
                  @include('inc.alert')
                <div class="row flex-row">
                  <div class="col-sm-12">

                    <label class="required">Subject</label>
                    <input name="subject" type="text" required>

                  </div>
                  <div class="col-sm-12">

                    <label class="required">Full Name</label>
                    <input name="fullname" type="text" required>

                  </div>
                </div>
                <div class="row flex-row">
                  <div class="col-sm-8">

                    <label class="required">Email address</label>
                    <input name="email" type="email" required>

                  </div>
                  <div class="col-sm-4">

                    <label>Phone number</label>
                    <input type="text" name="phone" required>

                  </div>
                </div>
                <div class="row flex-row">
                  <div class="col-sm-12">

                    <label>Message</label>
                    <textarea name="message" rows="10" required></textarea>

                  </div>
                </div>
                <button type="submit" class="btn btn-style-4" data-type="submit">Submit</button>
              </form>
            </div>

          </main>
          <aside id="sidebar" class="col-md-4 col-sm-12">

            <div class="widget widget-bg widget-holder">
              <div class="widget-events">
                <!-- Google map -->
                <div class="map-section">

                    <div id="googleMap" class="map-container"></div>

                </div>
            </div>
            </div>
          </aside>
        </div>

      </div>

    </div>

  </div>

@endsection
