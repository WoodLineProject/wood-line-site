<?php

namespace App\Models\MSSQL\TableModels;

use Illuminate\Database\Eloquent\Model;

class Product_photo_path extends Model
{
    public $timestamps = false;
    protected $connection = 'mysql';
    protected $table = 'kdfsnklw_woodTest.product_photo_path';
}
