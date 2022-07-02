<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//get user info
Route::middleware('auth:sanctum')->post('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => 'auth:sanctum'], function (){

});

