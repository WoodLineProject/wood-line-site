<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmailSenderRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'topic' => ['required', 'string'],
            'body' => ['required', 'string'],
            'selectedUsers' => ['required', 'array', 'min:1']
        ];
    }
}
