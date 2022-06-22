<?php

namespace App\Models\Traits;

trait GetStaticTableName
{
    public static function getTableName()
    {
        return with(new static)->getTable();
    }
}
