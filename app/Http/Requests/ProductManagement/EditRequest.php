<?php

namespace App\Http\Requests\ProductManagement;

use Illuminate\Foundation\Http\FormRequest;

class EditRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required', 'int', 'min:1'],
            'name_ukr' => ['required', 'string', 'max:50'],
            'name_rus' => ['required', 'string', 'max:50'],
        ];
    }
}
