<?php

namespace App\Http\Requests\ProductManagement;

use App\Models\MSSQL\TableModels\Product_photo_path;
use Illuminate\Foundation\Http\FormRequest;

class DeletePhotoRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => [
                'required',
                'int',
                'min:1',
                "exists:" . Product_photo_path::class . ",id",
            ],
            'name' => [
                'required',
                'string',
                "exists:" . Product_photo_path::class . ",name",
            ],
        ];
    }
}
