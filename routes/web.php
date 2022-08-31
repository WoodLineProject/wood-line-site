<?php
use App\Http\Controllers\AdminPanel\EmailSenderPanel\EmailSenderPanelController;
use App\Http\Controllers\CallMyController;
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
Route::post('/call-my',  [CallMyController::class, 'callMy']);
Route::post('/send-mail-to-simple-users',[EmailSenderPanelController::class, 'sendMailToSimpleUsers']);

//------------------------


//owner all


include "BaseRoute/base-route.php";
include "BaseRoute/dic-get-route.php";
include "BaseRoute/textile-get-route.php";
include "AdminPanel/admin-panel.php";
