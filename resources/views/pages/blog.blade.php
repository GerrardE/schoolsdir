@extends('layouts.app')
@section('title', 'Blog')
@section('content')
@include('inc.header')
<!-- - - - - - - - - - - - - - Content - - - - - - - - - - - - - - - - -->

<div id="content">

        <!-- - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - -->

        <div class="breadcrumbs-wrap with-bg2">

          <div class="container">

            <h1 class="page-title">Blog</h1>

            <ul class="breadcrumbs">

              <li><a href="/">Home</a></li>
              <li>Blog</li>

            </ul>

          </div>

        </div>

        <!-- - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - -->

        <div class="page-content-wrap">

          <div class="container">

            <div class="row">
              <main id="main" class="col-md-8 col-sm-12">

                <div class="events-holder">

                  <div class="event-item">
                    <div class="entry-attachment">

                      <img src="images/750x450_img1.jpg" alt="">

                    </div>
                    <div class="event-date">
                      <div class="event-month">Mar</div>
                      <div class="event-day">25</div>
                    </div>
                    <div class="event-info">
                      <h4 class="event-link"><span class="label">Featured</span><a href="/blog-detail">Nam Elit Agna, Endrerit Sit Amet, Tincidunt</a></h4>
                      <div class="entry-meta">

                        <a href="#" class="entry-comments-link">0 Comments</a>
                        <span class="entry-byline">by<a href="#"> Admin</a></span>
                        <span class="entry-cat">in<a href="#"> News</a></span>

                      </div>
                      <p>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. </p>
                      <a href="#" class="info-btn">Read More</a>
                    </div>
                  </div>

                  <div class="event-item">
                    <div class="entry-attachment">

                      <div class="carousel-type-2 type-2">
                        <div class="owl-carousel" data-max-items="1">

                          <div class="owl-item"><img src="images/750x450_img2.jpg" alt=""></div>

                          <div class="owl-item"><img src="images/750x450_img3.jpg" alt=""></div>

                          <div class="owl-item"><img src="images/750x450_img4.jpg" alt=""></div>

                        </div>
                      </div>

                    </div>
                    <div class="event-date">
                      <div class="event-month">Mar</div>
                      <div class="event-day">22</div>
                    </div>
                    <div class="event-info">
                      <h4 class="event-link"><a href="/blog-detail">Donec Porta Diam Eu Massa</a></h4>
                      <div class="entry-meta">

                        <a href="#" class="entry-comments-link">3 Comments</a>
                        <span class="entry-byline">by<a href="#"> Admin</a></span>
                        <span class="entry-cat">in<a href="#"> Government</a></span>

                      </div>
                      <p>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. </p>
                      <a href="#" class="info-btn">Read More</a>
                    </div>
                  </div>

                  <div class="event-item">
                    <div class="entry-attachment">

                      <div class="responsive-iframe">

                        <iframe src="https://www.youtube.com/embed/n9BsWhjX1Fw?rel=0&amp;showinfo=0&amp;autohide=2&amp;controls=0&amp;playlist=J2Y_ld0KL-4&amp;enablejsapi=1"></iframe>

                      </div>

                    </div>
                    <div class="event-date">
                      <div class="event-month">Mar</div>
                      <div class="event-day">11</div>
                    </div>
                    <div class="event-info">
                      <h4 class="event-link"><a href="/blog-detail">Neque Porro Quisquam Est Qui Dolorem Ipsum</a></h4>
                      <div class="entry-meta">

                        <a href="#" class="entry-comments-link">6 Comments</a>
                        <span class="entry-byline">by<a href="#"> Admin</a></span>
                        <span class="entry-cat">in<a href="#"> Press, Campaign</a></span>

                      </div>
                      <p>Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipisMauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. </p>
                      <a href="#" class="info-btn">Read More</a>
                    </div>
                  </div>

                </div>

                <ul class="pagination">
                  <li><a href="#" class="prev-page"></a></li>
                  <li><a href="#">1</a></li>
                  <li class="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#" class="next-page"></a></li>
                </ul>

              </main>
              <aside id="sidebar" class="col-md-4 col-sm-12">

                <!-- widget -->

                <div class="widget widget-bg">

                  <div class="join-us style-3">
                    <form class="join-form">
                      <button type="submit" class="btn btn-style-4 f-right btn-search"></button>
                      <div class="input-holder">
                        <input type="text" placeholder="Search">
                      </div>
                    </form>
                  </div>

                </div>

                <!-- widget -->

                <div class="widget widget-bg">

                  <h5 class="wt-title">Categories</h5>

                  <ul class="custom-list type-1">

                    <li><h6><a href="#">Competitions</a></h6></li>
                    <li><h6><a href="#">Events</a></h6></li>
                    <li><h6><a href="#">Featured</a></h6></li>
                    <li><h6><a href="#">News</a></h6></li>
                    <li><h6><a href="#">Parent's Corner</a></h6></li>
                    <li><h6><a href="#">Teacher's Space</a></h6></li>

                  </ul>

                </div>

                <div class="widget widget-bg">

                  <h5 class="wt-title">Advertise here</h5>



                </div>

                <div class="widget widget-bg">

                  <h5 class="wt-title">Tags</h5>

                  <div class="tagcloud">

                    <a href="#">Scholarships</a>
                    <a href="#">primary</a>
                    <a href="#">secondary</a>

                  </div>

                </div>

              </aside>
            </div>

          </div>

        </div>

      </div>

      <!-- - - - - - - - - - - - - end Content - - - - - - - - - - - - - - - -->

@endsection
