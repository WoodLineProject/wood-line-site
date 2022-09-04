<?php

namespace App\Http\Requests\HomePageCarousel;

use Illuminate\Foundation\Http\FormRequest;

class UploadHomePageCarouselRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'image' => ['required', 'array', 'max:10'],
            'image.*' => ['mimes:jpg,jpeg,png,bmp']
        ];
    }
}
