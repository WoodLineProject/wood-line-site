<?php

namespace App\Http\Controllers\AdminPanel\HomePageCarousel;

use App\Http\Classes\LogicalModels\AdminPanel\HomePageCarousel\HomePageCarousel;
use App\Http\Controllers\WebController;
use App\Http\Requests\HomePageCarousel\{
    UploadHomePageCarouselRequest,
    DeleteHomePageCarouselRequest,
    ChangePositionHomePageCarouselRequest,
};
use Illuminate\Http\JsonResponse;

class HomePageCarouselController extends WebController
{
    public function __construct(
        private HomePageCarousel $model
    ){}

   public function getAllCarrouselImage(): JsonResponse
   {
       $result = $this->model->getAllCarrouselImage();
       return $this->makeGoodResponse(['result' => $result]);
   }
   public function uploadCarrouselImage(UploadHomePageCarouselRequest $request): JsonResponse
   {
       $result = $this->model->uploadPhoto($request->file('image'));
       return $this->makeGoodResponse(['result' => $result]);
   }
    public function deleteCarrouselImage(DeleteHomePageCarouselRequest $request): JsonResponse
    {
        $result = $this->model->deletePhoto($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }

    public function changePositionCarrouselImage(ChangePositionHomePageCarouselRequest $request): JsonResponse
    {
        $result = $this->model->changePositionCarrouselImage($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
}
