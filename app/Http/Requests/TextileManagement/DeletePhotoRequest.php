<?php

namespace App\Http\Requests\TextileManagement;

use App\Models\MSSQL\TableModels\Textile_photo_path;
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
                "exists:" . Textile_photo_path::class . ",id",
            ],
            'name' => [
                'required',
                'string',
                "exists:" . Textile_photo_path::class . ",name",
            ],
        ];
    }
}
