<?php

namespace App\Http\Requests\TextileManagement;

use App\Models\MSSQL\TableModels\{Dic_textile_type, Dic_textile_maker, Dic_textile_color};
use Illuminate\Foundation\Http\FormRequest;

class TextileItemRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['nullable', 'int', 'min:1'],
            'name' => ['required', 'string', 'max:50'],
            'type_id' => [
                'required',
                'int',
                'min:1',
                "exists:" . Dic_textile_type::class . ",id",
            ],
            'maker_id' => [
                'required',
                'int',
                'min:1',
                "exists:" . Dic_textile_maker::class . ",id",
            ],
            'color_id' => [
                'required',
                'int',
                'min:1',
                "exists:" . Dic_textile_color::class . ",id",
            ],
        ];
    }
}
