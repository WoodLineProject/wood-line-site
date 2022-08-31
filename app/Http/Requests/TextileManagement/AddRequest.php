<?php

namespace App\Http\Requests\TextileManagement;

use Illuminate\Foundation\Http\FormRequest;

class AddRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name_ukr' => ['required', 'string', 'max:50'],
            'name_rus' => ['required', 'string', 'max:50'],
        ];
    }
}
