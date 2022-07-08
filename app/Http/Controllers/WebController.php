<?php

namespace App\Http\Controllers;
use  \Illuminate\Http\JsonResponse;

use Illuminate\Routing\Controller as BaseController;

class WebController extends BaseController
{
    protected function makeGoodResponse(array $data): JsonResponse
    {
        return response()->json(["status" => true, "data" => $data]);
    }

    protected function makeBadResponse(string $massage): JsonResponse
    {
        return response()->json(["status" => false, "massage" => $massage]);
    }
}
