<?php

namespace App\Http\Requests\ProductManagement;

use Illuminate\Foundation\Http\FormRequest;

class AddProductTypeRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name_ukr' => ['required', 'string', 'max:50'],
            'name_rus' => ['required', 'string', 'max:50'],
        ];
    }
}
