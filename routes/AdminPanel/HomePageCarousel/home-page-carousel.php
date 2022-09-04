<?php

use App\Http\Classes\LogicalModels\Common\Structure\Roles;

use App\Http\Controllers\AdminPanel\HomePageCarousel\HomePageCarouselController;
use Illuminate\Support\Facades\Route;

Route::group (['middleware' => [
    'auth:sanctum',
    'checkRole:' .implode(",", [Roles::ADMIN, Roles::OWNER])
]
],
    function() {
        Route::get('/home-page-carousel', function () {
            return view('welcome');
        });
        Route::post('/get-all-carrousel-image', [HomePageCarouselController::class, 'getAllCarrouselImage']);
        Route::post('/upload-carrousel-image', [HomePageCarouselController::class, 'uploadCarrouselImage']);
        Route::post('/delete-carrousel-image', [HomePageCarouselController::class, 'deleteCarrouselImage']);
        Route::post('/change-position-carrousel-image', [HomePageCarouselController::class, 'changePositionCarrouselImage']);
    }
);
