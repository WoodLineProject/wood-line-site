<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SingInRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "email" => ['required','email','max:50'],
            "password" => ['required','string','max:200'],
        ];
    }
}
