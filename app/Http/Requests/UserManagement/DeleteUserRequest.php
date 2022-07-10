<?php

namespace App\Http\Requests\UserManagement;

use Illuminate\Foundation\Http\FormRequest;

class DeleteUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required','int','min:1'],
        ];
    }
}
