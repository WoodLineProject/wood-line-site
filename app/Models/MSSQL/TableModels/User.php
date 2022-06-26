<?php

namespace App\Models\MSSQL\TableModels;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $connection = 'mysql';
    protected $table = 'kdfsnklw_woodTest.users';
}
