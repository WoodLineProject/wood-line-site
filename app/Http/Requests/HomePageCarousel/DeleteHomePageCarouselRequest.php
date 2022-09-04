<?php

namespace App\Http\Requests\HomePageCarousel;

use App\Models\MSSQL\TableModels\Carousel_photo_path;
use Illuminate\Foundation\Http\FormRequest;

class DeleteHomePageCarouselRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => [
                'required',
                'int',
                'min:1',
                "exists:" . Carousel_photo_path::class . ",id",
            ],
            'name' => [
                'required',
                'string',
                "exists:" . Carousel_photo_path::class . ",name",
            ],
        ];
    }
}
