<?php
declare(strict_types=1);

namespace App\Models\MSSQL;

use App\Models\Traits\GetStaticTableName;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Created by PhpStorm.
 * User: Yarusha
 * Date: 20.05.2021
 * Time: 08:47
 *
 * @mixin Builder
 * @method Builder whereBetweenDate(string $field, array $dates) Scope a query to only where field between dates.
 * @method static Builder create(array $attributes = [])
 */
class BaseModel extends Model
{
    use GetStaticTableName;
    use HasFactory;

    public $timestamps = false; // no ORM custom timestamps fields in table
    public $guarded = ['disable_this_feature']; // disables mass assignment protection

    /**
     * Scope a query to only where field between dates
     *
     * @param Builder $query
     * @param string $field
     * @param array $dates
     * @return Builder
     */
    public function scopeWhereBetweenDate(
        Builder $query,
        string $field,
        array $dates
    ): Builder {
        $start = ($dates[0] instanceof Carbon) ? $dates[0] : Carbon::parse($dates[0]);
        $end   = ($dates[1] instanceof Carbon) ? $dates[1] : Carbon::parse($dates[1]);

        $query->where($field, '>=', $start->startOfDay());
        $query->where($field, '<', $end->addDay()->startOfDay());

        return $query;
    }

}
