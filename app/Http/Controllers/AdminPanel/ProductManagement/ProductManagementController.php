<?php

namespace App\Http\Controllers\AdminPanel\ProductManagement;

use App\Http\Classes\LogicalModels\AdminPanel\ProductManagement\ProductManagement;
use App\Http\Controllers\WebController;
use App\Http\Requests\ProductManagement\{AddProductTypeRequest, EditProductTypeRequest};
use Illuminate\Http\JsonResponse;

class ProductManagementController extends WebController
{
    public function __construct(
        private ProductManagement $model
    ){}

    public function addType(AddProductTypeRequest $request): JsonResponse
    {
        $result = $this->model->addType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
    public function editType(EditProductTypeRequest $request): JsonResponse
    {
        $result = $this->model->editType($request->input());
        return $this->makeGoodResponse(['result' => $result]);
    }
}
