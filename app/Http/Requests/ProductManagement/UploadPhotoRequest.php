<?php

namespace App\Http\Requests\ProductManagement;

use Illuminate\Foundation\Http\FormRequest;

class UploadPhotoRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required', 'int', 'min:1'],
            'image' => ['required', 'array', 'max:10'],
            'image.*' => ['mimes:jpg,jpeg,png,bmp']
        ];
    }
}
