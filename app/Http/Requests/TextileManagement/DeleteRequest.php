<?php

namespace App\Http\Requests\TextileManagement;

use Illuminate\Foundation\Http\FormRequest;

class DeleteRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required', 'int', 'min:1'],
        ];
    }
}
