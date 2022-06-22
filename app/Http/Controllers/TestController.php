<?php

namespace App\Http\Controllers;

use App\Models\MSSQL\TableModels\table_name;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class TestController extends BaseController
{

    public function __construct(
        private table_name $table_name,
    ){}
    public function test(Request $request){
        //dd($request->input());
       //$res = $this->table_name->take(5)->get()->toArray();
        $query = $this->table_name->select([
            'column_1',
        ])
            ->whereIn('column_1',[5,8]);
        /*if(true){
            $query->where('column_1', 7);
        }*/
       return $query->get()->toArray();
    }
}
