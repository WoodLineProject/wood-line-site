<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
// не трогать
Route::get('/', function() {
    return view('welcome');
});
Route::get('/{any}', function() {
    return view('welcome');
});
Auth::routes();
//------------------------




Route::group(['middleware' => 'auth:sanctum'], function (){
    Route::post('/test3',  [TestController::class, 'test']);
});
Route::post('/test2',  [TestController::class, 'test']);


