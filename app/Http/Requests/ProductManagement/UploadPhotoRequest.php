<?php

namespace App\Http\Requests\ProductManagement;

use App\Models\MSSQL\TableModels\Product_photo_path;
use Illuminate\Foundation\Http\FormRequest;

class UploadPhotoRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required', 'int', 'min:1'],
            'image' => ['required', 'array'],
        ];
    }
}
