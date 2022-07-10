<?php

namespace App\Http\Requests\UserManagement;

use Illuminate\Foundation\Http\FormRequest;

class ChangePassRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required','int','min:1'],
            'password' => ['required', 'string', 'min:8'],
        ];
    }
}
