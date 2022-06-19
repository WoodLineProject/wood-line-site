<?php

namespace App\Http\Controllers\testController;

use App\Http\Controllers\Controller;

class TestController extends Controller
{
    public function __construct(){}

    public function index(){
        return view('index');
    }
}
