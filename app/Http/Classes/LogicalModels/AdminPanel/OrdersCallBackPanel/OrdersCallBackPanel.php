<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\OrdersCallBackPanel;

class OrdersCallBackPanel implements OrdersCallBackPanelInterface
{
    public function __construct(
        private OrdersCallBackPanelModel $model
    ){}

    public function getOrdersCallBack(): array
    {
        return $this->model->getOrdersCallBack();
    }

    public function makeComplete(array $data): bool
    {
        return $this->model->makeComplete($data);
    }
}
