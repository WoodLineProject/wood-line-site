<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CallMyRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:50'],
            'patronymic' => ['required', 'string', 'max:50'],
            'phone' => ['required', 'regex:/[\+][0-9]{12}/'],
        ];
    }
}
