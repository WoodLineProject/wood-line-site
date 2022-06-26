<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "name" => ['required','string','max:20'],
            "email" => ['required','email','max:50'],
            "password" => ['required','string','max:200'],
            "number" => ['required','string','max:20'],
        ];
    }
}




