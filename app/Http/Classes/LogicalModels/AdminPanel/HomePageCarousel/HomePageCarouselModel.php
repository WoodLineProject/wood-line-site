<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\HomePageCarousel;

use App\Http\Classes\LogicalModels\Common\Structure\CDateTime;
use App\Models\MSSQL\TableModels\Carousel_photo_path;
use Illuminate\Support\Facades\Storage;

class HomePageCarouselModel
{
    private const PHOTO_PATH = 'public/image/carouselPhoto';
    private const FORMAT = '.jpeg';
    private const PHOTO_URL = '/storage/app/public/image/carouselPhoto';

    public function __construct(
        private Carousel_photo_path $carousel_photo_path
    ){}

    public function getAllCarrouselImage(): array
    {
        return $this->carousel_photo_path
            ->selectRaw('id')
            ->selectRaw("IFNULL(position, 999) as position")
            ->selectRaw('name')
            ->selectRaw('path')
            ->orderBy('position')
            ->get()
            ->toArray();
    }

    public function uploadPhoto(array $files): bool
    {
        try {
            foreach ($files as $key => $file) {
                $newFilaName = '_CarrouselImage_'.CDateTime::getCurrentDateTimeStamp().'_'.$key.self::FORMAT;
                Storage::disk('local')->putFileAs(
                    self::PHOTO_PATH,
                    $file,
                    $newFilaName
                );
                $this->carousel_photo_path
                    ->insert([
                        'name' => $newFilaName,
                        'path' => self::PHOTO_URL.'/'.$newFilaName
                    ]);
            }
            return true;
        }catch (\Exception $e){return false;}
    }

    public function deletePhoto(array $files): bool
    {
        Storage::disk('local')->delete(self::PHOTO_PATH.'/'.$files["name"]);
        return $this->carousel_photo_path
            ->where('id', $files['id'])
            ->delete();
    }

    public function checkExistsPosition(int $position): bool
    {
        return $this->carousel_photo_path
            ->exists('position',$position);
    }

    public function setNullExistPosition(int $position): void
    {
        $this->carousel_photo_path
            ->where('position',$position)
            ->update(['position' => null]);
    }

    public function changePositionCarrouselImage(int $idItem, int $position): bool
    {
        return $this->carousel_photo_path
            ->where('id',$idItem)
            ->update(['position' => $position]);
    }
}
