<?php

namespace App\Http\Requests\common;

use Illuminate\Foundation\Http\FormRequest;

class GetByIdRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required','int','min:1'],
        ];
    }
}
