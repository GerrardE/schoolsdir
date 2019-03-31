<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MetaTag;

class PagesController extends Controller
{
    public function home(){
        // Section description
        MetaTag::set('title', 'Home');
        MetaTag::set('description', 'Schools');

        return view('pages.home');
    }

    public function about(){
        MetaTag::set('title', 'About');
        MetaTag::set('description', '');

        return view('pages.about');
    }

    public function services(){
        MetaTag::set('title', 'Services');
        MetaTag::set('description', '');

        return view('pages.services');
    }

    public function schoolsdir(){
        MetaTag::set('title', 'Schools Directory');
        MetaTag::set('description', '');

        return view('pages.schoolsdir');
    }

    public function blog(){
        MetaTag::set('title', 'Blog');
        MetaTag::set('description', 'Blog');

        return view('pages.blog');
    }

    public function detail(){
        MetaTag::set('title', 'Post Details');
        MetaTag::set('description', 'Blog');

        return view('pages.blog-detail');
    }

    public function contact(){
        MetaTag::set('title', 'Contact');
        MetaTag::set('description', 'Contact Us');

        return view('pages.contact');
    }

    public function terms(){
        MetaTag::set('title', 'Terms & Conditions');
        MetaTag::set('description', 'terms');

        return view('pages.terms');
    }
}
