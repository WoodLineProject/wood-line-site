<?php
use Illuminate\Support\Facades\Route;
use App\Http\Classes\LogicalModels\Common\Structure\Roles;

Route::group(['middleware' => [
        'auth:sanctum',
        'checkRole:' . implode(",",[Roles::ADMIN,Roles::OWNER])
        ]
    ],
    function (){
        Route::get('/admin-panel', function() {
            return view('welcome');
        });
});
include "UserManagement/user-management.php";
include "OrdersCallBackPanel/orders-call-back-panel.php";
include "EmailSenderPanel/email-sender-panel.php";
include "ProductManagement/product-management.php";
include "TextileManagement/textile-management.php";
include "HomePageCarousel/home-page-carousel.php";
