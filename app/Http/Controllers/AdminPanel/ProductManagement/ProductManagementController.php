<?php

namespace App\Http\Controllers\AdminPanel\ProductManagement;

use App\Http\Classes\LogicalModels\AdminPanel\ProductManagement\ProductManagement;
use App\Http\Controllers\WebController;
use Illuminate\Http\JsonResponse;

class ProductManagementController extends WebController
{
    public function __construct(
        private ProductManagement $model
    ){}

    public function getTypes(): JsonResponse
    {
        $result = $this->model->getTypes();
        return $this->makeGoodResponse($result);
    }
}
