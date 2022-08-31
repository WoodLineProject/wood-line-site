<?php

use App\Http\Controllers\Common\DicController;
use Illuminate\Support\Facades\Route;

Route::post('/get-product-types',  [DicController::class, 'getTypes']);
Route::post('/get-layout-types',  [DicController::class, 'getLayoutTypes']);
Route::post('/get-age-types',  [DicController::class, 'getAgeTypes']);
Route::post('/get-products',  [DicController::class, 'getProducts']);
Route::post('/get-products-and-photo',  [DicController::class, 'getProductsMergePhoto']);
Route::post('/get-product-by-id',  [DicController::class, 'getProductById']);
Route::post('/get-product-photo-by-id-user',  [DicController::class, 'getPhotoById']);
