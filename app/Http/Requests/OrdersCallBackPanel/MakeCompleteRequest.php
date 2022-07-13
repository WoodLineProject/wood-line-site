<?php

namespace App\Http\Requests\OrdersCallBackPanel;

use Illuminate\Foundation\Http\FormRequest;

class MakeCompleteRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['required', 'int', 'min:1'],
        ];
    }
}
