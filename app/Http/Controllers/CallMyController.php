<?php

namespace App\Http\Controllers;

use App\Http\Classes\LogicalModels\CallMy\CallMy;
use App\Http\Requests\CallMyRequest;
use Illuminate\Http\JsonResponse;

class CallMyController extends WebController
{
    public function __construct(
        private CallMy $model,
    ){}


    public function callMy(CallMyRequest $request): JsonResponse
    {
        $result = $this->model->callMy($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
}
