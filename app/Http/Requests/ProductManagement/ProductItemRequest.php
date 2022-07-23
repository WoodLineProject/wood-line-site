<?php

namespace App\Http\Requests\ProductManagement;

use App\Models\MSSQL\TableModels\{Dic_age_type, Dic_layout_type, Dic_product_type};
use Illuminate\Foundation\Http\FormRequest;

class ProductItemRequest extends FormRequest
{
    public function rules(): array
    {
        return [
                'id' => ['nullable', 'int', 'min:1'],
                'name' => ['required', 'string', 'max:50'],
                'product_type_id' => [
                    'required',
                    'int',
                    'min:1',
                    "exists:" . Dic_product_type::class . ",id",
                ],
                'layout_type_id' => [
                    'required',
                    'int',
                    'min:1',
                    "exists:" . Dic_layout_type::class . ",id",
                ],
                'age_type_id' => [
                    'required',
                    'int',
                    'min:1',
                    "exists:" . Dic_age_type::class . ",id",
                ],
                'is_angular' => ['required', 'boolean'],
                'all_sizes' => ['required', 'string', 'max:100'],
                'sleep_sizes' => ['required', 'string', 'max:100'],
                'count_pillow' => ['required', 'int', 'min:0'],
                'description' => ['required', 'string'],
        ];
    }
}
