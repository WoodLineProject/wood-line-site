<?php

use App\Http\Controllers\Common\DicController;
use Illuminate\Support\Facades\Route;

Route::post('/get-product-types',  [DicController::class, 'getTypes']);
