<?php

namespace App\Http\Controllers\AdminPanel\OrdersCallBackPanel;

use App\Http\Classes\LogicalModels\AdminPanel\OrdersCallBackPanel\OrdersCallBackPanel;
use App\Http\Controllers\WebController;
use App\Http\Requests\OrdersCallBackPanel\MakeCompleteRequest;
use Illuminate\Http\JsonResponse;

class OrdersCallBackPanelController extends WebController
{
    public function __construct(
        private OrdersCallBackPanel $model
    ){}

    public function getOrdersCallBack(): JsonResponse
    {
        $result = $this->model->getOrdersCallBack();
        return $this->makeGoodResponse($result);
    }

    public function makeComplete(MakeCompleteRequest $request): JsonResponse
    {
        $result = $this->model->makeComplete($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
}
