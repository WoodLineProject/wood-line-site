<?php

namespace App\Http\Controllers\Auth;

use App\Http\Classes\LogicalModels\Auth\Register\RegisterModel;
use App\Http\Requests\RegisterRequest;
use Illuminate\Routing\Controller as BaseController;

class LoginRegController extends BaseController
{
    public function __construct(
        private RegisterModel $model,
    )
    {}

    public function register(RegisterRequest $request): bool
    {
        return $this->model->register($request->validated());
    }


}
