<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\HomePageCarousel;

class HomePageCarousel implements HomePageCarouselInterface
{
    public function __construct(
        private HomePageCarouselModel $model
    ){}

    public function getAllCarrouselImage(): array
    {
        return $this->model->getAllCarrouselImage();
    }

    public function uploadPhoto(array $files): bool
    {
        return $this->model->uploadPhoto( $files);
    }
    public function deletePhoto(array $files): bool
    {
        return $this->model->deletePhoto($files);
    }
    public function changePositionCarrouselImage(array $files): bool
    {
        if($this->model->checkExistsPosition($files['position'])){
            $this->model->setNullExistPosition($files['position']);
        }
        return $this->model->changePositionCarrouselImage($files['idItem'], $files['position']);
    }
}
