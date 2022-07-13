<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\OrdersCallBackPanel;

use App\Models\MSSQL\TableModels\OrderCallBack;

class OrdersCallBackPanelModel
{
    public function __construct(
        private OrderCallBack $orderCallBack
    ){}

    public function getOrdersCallBack(): array
    {
        return $this->orderCallBack
            ->select([
                'id',
                'name',
                'patronymic',
                'phone',
                'order_date',
            ])
            ->get()
            ->toArray();
    }

    public function makeComplete(array $data): bool
    {
        return $this->orderCallBack
            ->where('id',$data['id'])
            ->delete();
    }
}
