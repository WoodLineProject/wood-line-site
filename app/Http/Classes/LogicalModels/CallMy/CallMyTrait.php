<?php

namespace App\Http\Classes\LogicalModels\CallMy;

use Illuminate\Support\Arr;

trait CallMyTrait
{
    private string $name;
    private string $patronymic;
    private string $phone;

    public function initParams(array $data): void
    {
        $this->name = Arr::get($data, 'name');
        $this->patronymic = Arr::get($data, 'patronymic');
        $this->phone = Arr::get($data, 'phone');
    }
}
