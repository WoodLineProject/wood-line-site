<?php

use App\Http\Controllers\Common\TextileController;
use Illuminate\Support\Facades\Route;

Route::post('/get-textile-types', [TextileController::class, 'getTypes']);
Route::post('/get-textile-makers', [TextileController::class, 'getMakers']);
Route::post('/get-textile-colors', [TextileController::class, 'getColors']);
Route::post('/get-textiles', [TextileController::class, 'getTextiles']);
Route::post('/get-textiles-and-photo', [TextileController::class, 'getTextilesMergePhoto']);
Route::post('/get-textile-by-id', [TextileController::class, 'getTextileById']);
Route::post('/get-textile-photo-by-id-user', [TextileController::class, 'getPhotoById']);
