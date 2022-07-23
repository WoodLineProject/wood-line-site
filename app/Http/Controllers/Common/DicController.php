<?php

namespace App\Http\Controllers\Common;

use App\Http\Classes\LogicalModels\Common\Dic\Dic;
use App\Http\Controllers\WebController;
use Illuminate\Http\JsonResponse;

class DicController extends WebController
{
    public function __construct(
        private Dic $model
    ){}

    public function getTypes(): JsonResponse
    {
        $result = $this->model->getTypes();
        return $this->makeGoodResponse($result);
    }
}
