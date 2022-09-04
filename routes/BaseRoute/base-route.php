<?php

use App\Http\Controllers\AdminPanel\HomePageCarousel\HomePageCarouselController;
use Illuminate\Support\Facades\Route;


Route::get('/about-as', function() {
    return view('welcome');
});
Route::get('/upholstery', function() {
    return view('welcome');
});
Route::get('/wholesale-customers', function() {
    return view('welcome');
});
Route::get('/catalog', function() {
    return view('welcome');
});
Route::get('/catalog/about-product-item/{id}', function() {
    return view('welcome');
});
Route::post('/get-carousel-image-public', [HomePageCarouselController::class, 'getAllCarrouselImage']);

