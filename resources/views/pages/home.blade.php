@extends('layouts.app')
@section('title', 'Home')
@section('content')
@include('inc.header')
<!-- - - - - - - - - - - - - end Header - - - - - - - - - - - - - - - -->
<div class="media-holder full-src" data-bg="images/pupils.jpg">
    <div class="media-inner left-side">
        <h1><br>
            <span>Schools</span>
        </h1>
        <h4></h4>
        <div class="join-us">
            <form class="join-form">
                <button type="submit" class="btn btn-style-4 btn-big f-right" data-type="submit">Find A School</button>
                <div class="input-holder">
                <input type="text" name="state" placeholder="State">
                <input type="text" placeholder="Budget">
                <input type="text" placeholder="SEN Facility">
                </div>
            </form>
        </div>
    </div>
</div>
<!-- - - - - - - - - - - - - - Content - - - - - - - - - - - - - - - - -->
<div id="content">
    <!-- actions -->
    <div class="action-widget action-col-4 pull-top">
        <div class="container">
            <!-- action-item -->
            <div class="action-col">
                <a href="/schoolsdir" class="action-item register">
                <h5 class="action-title">Pre-School</h5>
                <!-- <p>Submit your application</p> -->
                </a>
            </div>
            <!-- action-item -->
            <div class="action-col">
                <a href="/schoolsdir" class="action-item event">
                <h5 class="action-title">Primary</h5>
                <!-- <p>Find schools near you</p> -->
                </a>
            </div>
            <!-- action-item -->
            <div class="action-col">
                <a href="/schoolsdir" class="action-item get-involved">
                <h5 class="action-title">Secondary</h5>
                <!-- <p>Become a volunteer</p> -->
                </a>
            </div>
            <!-- action-item -->
            <div class="action-col">
                <a href="/schoolsdir" class="action-item donate">
                <h5 class="action-title">Sixth Form</h5>
                <!-- <p>Support our candidate</p> -->
                </a>
            </div>
        </div>
    </div>
    <div class="page-section">
        <div class="container">
            <div class="title-holder align-center">
                <h2 class="section-title">FEATURED SCHOOLS</h2>
                <p class="text-size-big">We guide you through choosing the best schools for your children.</p>
            </div>
            <div class="carousel-type-2">
                <div class="owl-carousel content-element2" data-max-items="4" data-item-margin="30">
                <!-- Carousel Item -->
                <div class="item-carousel">
                    <div class="issue-item">
                        <figure><a href="#"><img src="images/263x180_img1.jpg" alt=""></a></figure>
                        <div class="product-description">
                                <h5><a href="#">Greenspring Schools</a></h5>

                                    <div class="tagcloud">
                                        <a href="#">preschool/nursery</a>
                                        <a href="#">primary</a>
                                        <a href="#">SEN Facilities</a>
                                    </div>

                            <div class="wrapper">

                              <div class="product-price new-price f-left"><a href="#" class="info-btn">View Profile</a></div>
                              <ul class="rating f-right">
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                              </ul>

                            </div>

                          </div>
                    </div>
                </div>
                <!-- Carousel Item -->
                <div class="item-carousel">
                    <div class="issue-item">
                        <figure><a href="#"><img src="images/263x180_img2.jpg" alt=""></a></figure>
                        <div class="product-description">
                                <h5><a href="#">Corona Schools</a></h5>
                                    <div class="tagcloud">
                                        <a href="#">preschool/nursery</a>
                                        <a href="#">primary</a>
                                        <a href="#">Sixth form</a>
                                    </div>

                            <div class="wrapper">

                              <div class="product-price new-price f-left"><a href="#" class="info-btn">View Profile</a></div>
                              <ul class="rating f-right">
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                              </ul>

                            </div>

                          </div>
                    </div>
                </div>
                <!-- Carousel Item -->
                <div class="item-carousel">
                    <div class="issue-item">
                        <figure><a href="#"><img src="images/263x180_img3.jpg" alt=""></a></figure>
                        <div class="product-description">
                                <h5><a href="#">Grace Schools</a></h5>
                                    <div class="tagcloud">
                                        <a href="#">preschool/nursery</a>
                                        <a href="#">SEN Facilities</a>
                                    </div>

                            <div class="wrapper">

                              <div class="product-price new-price f-left"><a href="#" class="info-btn">View Profile</a></div>
                              <ul class="rating f-right">
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                              </ul>

                            </div>

                          </div>
                    </div>
                </div>
                <!-- Carousel Item -->
                <div class="item-carousel">
                    <div class="issue-item">
                        <figure><a href="#"><img src="images/263x180_img4.jpg" alt=""></a></figure>
                        <div class="product-description">

                            <h5><a href="#">CMS School</a></h5>
                                <div class="tagcloud">
                                    <a href="#">primary</a>
                                    <a href="#">SEN Facilities</a>
                                </div>

                            <div class="wrapper">

                              <div class="product-price new-price f-left"><a href="#" class="info-btn">View Profile</a></div>
                              <ul class="rating f-right">
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                                <li><i class="icon icon-star-8"></i></li>
                              </ul>

                            </div>

                          </div>
                    </div>
                </div>
                </div>
                <div class="align-center">
                <a href="/schoolsdir" class="btn">See All Schools</a>
                </div>
            </div>
        </div>
    </div>
    <div class="page-section with-bg-img" data-bg="images/consultant.jpg">
        <div class="container">
            <div class="row">
                <div class="col-sm-5 ed-consult">
                <h3 class="section-title ed-consult"><strong>Meet Our Educational Consultant</strong> </h3>
                <p class="text-size-big"><strong>Do you have a child with special education needs?
                    Our special education needs consultant can help you.</strong>
                </p>
                <a href="#" class="btn btn-style-3">Get in touch now</a>
                </div>
            </div>
        </div>
    </div>
    <div class="page-section-bg4 with-bg-img" data-bg="images/1920x1060_bg1.jpg">

        <div class="container extra-size">

          <div class="align-center content-element4">
            <h6 class="section-sub-title">The Latest</h6>
            <h2 class="section-title">News & Updates</h2>
          </div>

          <div class="carousel-type-2">
            <div class="owl-carousel owl-theme widget-holder style-3 content-element2" data-max-items="3" data-item-margin="30">

              <!-- Carousel Item -->
              <div class="item">

                <article class="entry">

                  <!-- - - - - - - - - - - - - - Attachment - - - - - - - - - - - - - - - - -->

                  <div class="entry-attachment">

                    <figure class="thumbnail-attachment"><img src="images/469x305_img1.jpg" alt=""></figure>

                  </div>

                  <!-- - - - - - - - - - - - - - End of Attachment - - - - - - - - - - - - - - - - -->

                  <!-- - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - -->

                  <div class="entry-body">

                    <h5 class="entry-title"><a href="#">Nam Elit Agna, Endrerit Sit Amet, Tincidunt Ac, Viverra </a></h5>

                    <!-- - - - - - - - - - - - - - Entry Meta - - - - - - - - - - - - - - - - -->

                    <div class="entry-meta">

                      <time class="entry-date" datetime="2018-03-25">March 25, 2018</time>

                    </div>

                    <!-- - - - - - - - - - - - - - End of Meta - - - - - - - - - - - - - - - - -->

                    <!-- - - - - - - - - - - - - - Entry Excerpt - - - - - - - - - - - - - - - - -->

                    <p>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla.  </p>

                    <!-- - - - - - - - - - - - - - End of Entry Excerpt - - - - - - - - - - - - - - - - -->

                    <a href="/blog-detail" class="info-btn">Read More</a>

                  </div>

                  <!-- - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - -->

                </article>

              </div>

              <!-- Carousel Item -->
              <div class="item">

                <article class="entry">

                  <!-- - - - - - - - - - - - - - Attachment - - - - - - - - - - - - - - - - -->

                  <div class="entry-attachment">

                    <figure class="thumbnail-attachment"><img src="images/469x305_img2.jpg" alt=""></figure>

                  </div>

                  <!-- - - - - - - - - - - - - - End of Attachment - - - - - - - - - - - - - - - - -->

                  <!-- - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - -->

                  <div class="entry-body">

                    <h5 class="entry-title"><a href="#">Nam Elit Agna, Endrerit Sit Amet, Tincidunt Ac, Viverra </a></h5>

                    <!-- - - - - - - - - - - - - - Entry Meta - - - - - - - - - - - - - - - - -->

                    <div class="entry-meta">

                      <time class="entry-date" datetime="2018-03-25">March 25, 2018</time>

                    </div>

                    <!-- - - - - - - - - - - - - - End of Meta - - - - - - - - - - - - - - - - -->

                    <!-- - - - - - - - - - - - - - Entry Excerpt - - - - - - - - - - - - - - - - -->

                    <p>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla.  </p>

                    <!-- - - - - - - - - - - - - - End of Entry Excerpt - - - - - - - - - - - - - - - - -->

                    <a href="/blog-detail" class="info-btn">Read More</a>

                  </div>

                  <!-- - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - -->

                </article>

              </div>

              <!-- Carousel Item -->
              <div class="item">

                <article class="entry">

                  <!-- - - - - - - - - - - - - - Attachment - - - - - - - - - - - - - - - - -->

                  <div class="entry-attachment">

                    <figure class="thumbnail-attachment"><img src="images/469x305_img3.jpg" alt=""></figure>

                  </div>

                  <!-- - - - - - - - - - - - - - End of Attachment - - - - - - - - - - - - - - - - -->

                  <!-- - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - -->

                  <div class="entry-body">

                    <h5 class="entry-title"><a href="#">Nam Elit Agna, Endrerit Sit Amet, Tincidunt Ac, Viverra </a></h5>

                    <!-- - - - - - - - - - - - - - Entry Meta - - - - - - - - - - - - - - - - -->

                    <div class="entry-meta">

                      <time class="entry-date" datetime="2018-03-25">March 25, 2018</time>

                    </div>

                    <!-- - - - - - - - - - - - - - End of Meta - - - - - - - - - - - - - - - - -->

                    <!-- - - - - - - - - - - - - - Entry Excerpt - - - - - - - - - - - - - - - - -->

                    <p>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla.  </p>

                    <!-- - - - - - - - - - - - - - End of Entry Excerpt - - - - - - - - - - - - - - - - -->

                    <a href="/blog-detail" class="info-btn">Read More</a>

                  </div>

                  <!-- - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - -->

                </article>

              </div>

            </div>
            <div class="align-center">
              <a href="/blog" class="btn no-shadow">More News</a>
            </div>
          </div>

        </div>

      </div>
</div>
@endsection
