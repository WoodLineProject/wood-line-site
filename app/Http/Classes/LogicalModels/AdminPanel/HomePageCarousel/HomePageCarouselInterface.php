<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\HomePageCarousel;

interface HomePageCarouselInterface
{
    public function getAllCarrouselImage(): array;
    public function uploadPhoto(array $files): bool;
    public function deletePhoto(array $files): bool;
    public function changePositionCarrouselImage(array $files): bool;
}
