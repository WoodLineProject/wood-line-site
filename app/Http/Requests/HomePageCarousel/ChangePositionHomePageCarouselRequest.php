<?php

namespace App\Http\Requests\HomePageCarousel;

use Illuminate\Foundation\Http\FormRequest;

class ChangePositionHomePageCarouselRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'idItem' => [
                'required',
                'int',
                'min:1',
            ],
            'position' => [
                'required',
                'int',
                'min:1',
            ],

        ];
    }
}
