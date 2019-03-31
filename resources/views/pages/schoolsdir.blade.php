@extends('layouts.app')
@section('title', 'School Directory')
@section('content')
@include('inc.header')
<div id="content">

        <!-- - - - - - - - - - - - - - Breadcrumbs - - - - - - - - - - - - - - - - -->

        <div class="breadcrumbs-wrap with-bg">

          <div class="container">

            <h1 class="page-title">School Listings</h1>

            <ul class="breadcrumbs">

              <li><a href="/">Home</a></li>
              <li>All Schools</li>

            </ul>

          </div>

        </div>

        <!-- - - - - - - - - - - - - end Breadcrumbs - - - - - - - - - - - - - - - -->

        <div class="page-content-wrap">

          <div class="container">

            <div class="row">

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

                    <li><h6><a href="#">Pre School/ Nursery</a></h6></li>
                    <li><h6><a href="#">Primary</a></h6></li>
                    <li><h6><a href="#">Secondary</a></h6></li>
                    <li><h6><a href="#">Sixth Form</a></h6></li>
                    <li><h6><a href="#">Special Education Needs</a></h6></li>
                    <li><h6><a href="#">Featured Schools</a></h6></li>
                    <li><h6><a href="#">Ranking</a></h6></li>

                  </ul>

                </div>

                <!-- widget -->
                <div class="widget widget-bg">

                  <h5 class="wt-title">Filter by School Fees</h5>

                  <!--price-->
                  <fieldset class="price-scale">
                    <div class="clearfix range-values">
                      <input class="f-left first-limit" readonly type="text" value="=N=1,000">
                      <input class="f-right last-limit" readonly type="text" value="=N=99,000,000">
                    </div>
                    <div id="price"></div>
                  </fieldset>
                  <a href="#" class="btn btn-style-2 btn-small">Filter</a>

                </div>

                <!-- widget -->
                <div class="widget widget-bg">

                  <h5 class="wt-title">Advertise Here</h5>

                  <div class="products-holder">

                    <!-- product -->
                    <div class="product">

                    </div>
                    <!-- product -->
                    <div class="product">

                    </div>
                    <!-- product -->
                    <div class="product">

                    </div>

                  </div>

                </div>

                <!-- widget -->
                {{-- <div class="widget widget-bg">

                  <h5 class="wt-title">Tags</h5>

                  <div class="tagcloud">

                    <a href="#">campaign</a>
                    <a href="#">election</a>
                    <a href="#">democrats</a>
                    <a href="#">events</a>
                    <a href="#">government</a>
                    <a href="#">liberty</a>
                    <a href="#">media</a>
                    <a href="#">press releases</a>
                    <a href="#">senate</a>

                  </div>

                </div> --}}

                <!-- widget -->
                {{-- <div class="widget widget-bg2">

                  <h5 class="wt-title">Like Us On Facebook</h5>

                  <div id="fb-root"></div>
                  <script>(function(d, s, id) {
                      var js, fjs = d.getElementsByTagName(s)[0];
                      if (d.getElementById(id)) return;
                      js = d.createElement(s); js.id = id;
                      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
                      fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                  </script>

                  <div class="fb-page" data-href="https://www.facebook.com/facebook" data-height="155" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore">
                      <a href="https://www.facebook.com/facebook">Facebook</a>
                    </blockquote>
                  </div>


                </div> --}}

              </aside>
              <main id="main" class="col-md-8 col-sm-12">

                <div class="product-sort-section flex-row flex-justify flex-center">

                  <span>Showing 1– 6 of 36 results</span>

                  <div class="custom-select">
                    <div class="select-title">Sort Fees By</div>
                    <ul id="menu-type" class="select-list"></ul>
                    <select class="hide">
                      <option value="menu">Lowest To Highest</option>
                      <option value="menu">Highest To Lowest</option>
                    </select>
                  </div>

                </div>

                <div class="products-holder">

                  <div class="col-md-4 col-xs-6">

                    <div class="product">

                      <!-- - - - - - - - - - - - - - Product Image - - - - - - - - - - - - - - - - -->
                      <div class="product-image">
                        <a href="#"><img src="images/263x263_img1.jpg" alt=""></a>
                      </div>
                      <!-- - - - - - - - - - - - - - End of Product Image - - - - - - - - - - - - - - - - -->
                      <!-- - - - - - - - - - - - - - Product Description - - - - - - - - - - - - - - - - -->
                      <div class="product-description">

                            <h5><a href="#">CMS School</a></h5>
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
                      <!-- - - - - - - - - - - - - - End of Product Description - - - - - - - - - - - - - - - - -->

                    </div>

                  </div>

                  <div class="col-md-4 col-xs-6">

                    <div class="product">

                        <!-- - - - - - - - - - - - - - Product Image - - - - - - - - - - - - - - - - -->
                        <div class="product-image">
                          <a href="#"><img src="images/263x263_img2.jpg" alt=""></a>
                        </div>
                        <!-- - - - - - - - - - - - - - End of Product Image - - - - - - - - - - - - - - - - -->

                        <!-- - - - - - - - - - - - - - Product Description - - - - - - - - - - - - - - - - -->
                        <div class="product-description">

                                <h5><a href="#">Greenspring Schools</a></h5>
                                <div class="tagcloud">
                                    <a href="#">preschool/nursery</a>
                                    <a href="#">primary</a>
                                    <a href="#">secondary</a>
                                </div>

                          <div class="wrapper">

                            <div class="product-price new-price f-left"><a href="#" class="info-btn">View Profile</a></div>
                            <ul class="rating f-right">
                              <li><i class="icon icon-star-8"></i></li>
                              <li><i class="icon icon-star-8"></i></li>
                              <li><i class="icon icon-star-8"></i></li>
                              <li><i class="icon icon-star-8"></i></li>
                              <li><i class="icon icon-star-empty-3"></i></li>
                            </ul>

                          </div>

                        </div>
                        <!-- - - - - - - - - - - - - - End of Product Description - - - - - - - - - - - - - - - - -->

                      </div>

                  </div>

                  <div class="col-md-4 col-xs-6">

                    <div class="product">

                        <!-- - - - - - - - - - - - - - Product Image - - - - - - - - - - - - - - - - -->
                        <div class="product-image">
                          <a href="#"><img src="images/263x263_img3.jpg" alt=""></a>
                        </div>
                        <!-- - - - - - - - - - - - - - End of Product Image - - - - - - - - - - - - - - - - -->
                        <!-- - - - - - - - - - - - - - Product Description - - - - - - - - - - - - - - - - -->
                        <div class="product-description">

                                <h5><a href="#">Grace Schools</a></h5>
                                <div class="tagcloud">
                                    <a href="#">primary</a>
                                    <a href="#">secondary</a>
                                </div>

                        <div class="wrapper">

                            <div class="product-price new-price f-left"><a href="#" class="info-btn">View Profile</a></div>
                            <ul class="rating f-right">
                            <li><i class="icon icon-star-8"></i></li>
                            <li><i class="icon icon-star-8"></i></li>
                            <li><i class="icon icon-star-8"></i></li>
                            <li><i class="icon icon-star-8"></i></li>
                            <li><i class="icon icon-star-empty-3"></i></li>
                            </ul>

                        </div>

                        </div>
                        <!-- - - - - - - - - - - - - - End of Product Description - - - - - - - - - - - - - - - - -->

                    </div>

                  </div>

                </div>

                <div class="products-holder">

                  <div class="col-md-4 col-xs-6">

                    <div class="product">

                      <!-- - - - - - - - - - - - - - Product Image - - - - - - - - - - - - - - - - -->
                      <div class="product-image">
                        <a href="#"><img src="images/263x263_img1.jpg" alt=""></a>
                      </div>
                      <!-- - - - - - - - - - - - - - End of Product Image - - - - - - - - - - - - - - - - -->
                      <!-- - - - - - - - - - - - - - Product Description - - - - - - - - - - - - - - - - -->
                      <div class="product-description">

                            <h5><a href="#">CMS School</a></h5>
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
                      <!-- - - - - - - - - - - - - - End of Product Description - - - - - - - - - - - - - - - - -->

                    </div>

                  </div>

                  <div class="col-md-4 col-xs-6">

                    <div class="product">

                        <!-- - - - - - - - - - - - - - Product Image - - - - - - - - - - - - - - - - -->
                        <div class="product-image">
                          <a href="#"><img src="images/263x263_img2.jpg" alt=""></a>
                        </div>
                        <!-- - - - - - - - - - - - - - End of Product Image - - - - - - - - - - - - - - - - -->

                        <!-- - - - - - - - - - - - - - Product Description - - - - - - - - - - - - - - - - -->
                        <div class="product-description">

                                <h5><a href="#">Greenspring Schools</a></h5>
                                <div class="tagcloud">
                                    <a href="#">preschool/nursery</a>
                                    <a href="#">primary</a>
                                    <a href="#">secondary</a>
                                </div>

                          <div class="wrapper">

                            <div class="product-price new-price f-left"><a href="#" class="info-btn">View Profile</a></div>
                            <ul class="rating f-right">
                              <li><i class="icon icon-star-8"></i></li>
                              <li><i class="icon icon-star-8"></i></li>
                              <li><i class="icon icon-star-8"></i></li>
                              <li><i class="icon icon-star-8"></i></li>
                              <li><i class="icon icon-star-empty-3"></i></li>
                            </ul>

                          </div>

                        </div>
                        <!-- - - - - - - - - - - - - - End of Product Description - - - - - - - - - - - - - - - - -->

                      </div>

                  </div>

                  <div class="col-md-4 col-xs-6">

                    <div class="product">

                        <!-- - - - - - - - - - - - - - Product Image - - - - - - - - - - - - - - - - -->
                        <div class="product-image">
                          <a href="#"><img src="images/263x263_img3.jpg" alt=""></a>
                        </div>
                        <!-- - - - - - - - - - - - - - End of Product Image - - - - - - - - - - - - - - - - -->
                        <!-- - - - - - - - - - - - - - Product Description - - - - - - - - - - - - - - - - -->
                        <div class="product-description">

                                <h5><a href="#">Grace Schools</a></h5>
                                <div class="tagcloud">
                                    <a href="#">primary</a>
                                    <a href="#">secondary</a>
                                </div>

                        <div class="wrapper">

                            <div class="product-price new-price f-left"><a href="#" class="info-btn">View Profile</a></div>
                            <ul class="rating f-right">
                            <li><i class="icon icon-star-8"></i></li>
                            <li><i class="icon icon-star-8"></i></li>
                            <li><i class="icon icon-star-8"></i></li>
                            <li><i class="icon icon-star-8"></i></li>
                            <li><i class="icon icon-star-empty-3"></i></li>
                            </ul>

                        </div>

                        </div>
                        <!-- - - - - - - - - - - - - - End of Product Description - - - - - - - - - - - - - - - - -->

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

            </div>

          </div>

        </div>

      </div>
@endsection
