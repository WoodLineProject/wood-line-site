<?php

namespace App\Http\Controllers\Auth;


use App\Http\Classes\LogicalModels\Auth\Register\Register;
use App\Http\Classes\LogicalModels\Auth\SingIn\SingIn;
use App\Http\Requests\{
    RegisterRequest,
    SingInRequest,
};
use Illuminate\Routing\Controller as BaseController;

class LoginRegController extends BaseController
{
    public function __construct(
        private Register $registerModel,
        private SingIn $singInModel,
    )
    {}

    public function register(RegisterRequest $request): bool
    {
        return $this->registerModel->register($request->validated());
    }

    public function singIn(SingInRequest $request): bool
    {
        return $this->singInModel->singIn($request->validated());
    }


}
