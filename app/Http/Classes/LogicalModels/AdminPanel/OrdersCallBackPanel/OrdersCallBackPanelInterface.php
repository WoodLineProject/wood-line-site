<?php

namespace App\Http\Classes\LogicalModels\AdminPanel\OrdersCallBackPanel;

interface OrdersCallBackPanelInterface
{
    public function getOrdersCallBack(): array;

    public function makeComplete(array $data): bool;
}
