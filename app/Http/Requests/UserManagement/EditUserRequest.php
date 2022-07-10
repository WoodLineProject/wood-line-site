<?php

namespace App\Http\Requests\UserManagement;

use Illuminate\Foundation\Http\FormRequest;

class EditUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required','int','min:1'],
            'role' => ['required','int','min:1','max:3'],
            'name' => ['required', 'string', 'max:50'],
            'surname' => ['required', 'string', 'max:50'],
            'patronymic' => ['required', 'string', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:100'],
            'phone' => ['required', 'regex:/[\+][0-9]{12}/'],
        ];
    }
}
