<?php

namespace App\Http\Classes\LogicalModels\Common\Structure;

/**
 * Created by PhpStorm.
 * User: Yarusha
 * Date: 09.01.2020
 * Time: 12:46
 */

use Carbon\Carbon as DateTimeClass;
use Carbon\Carbon;

class CDateTime
{
    public const DATE_FORMAT_DB = 'Y-m-d';
    public const DATE_FORMAT_DB_FD = 'Y-m-01';
    public const DATETIME_FORMAT_DB = 'Y-m-d H:i:s';
    public const DATETIME_FORMAT_DB_ZONE = 'Y-m-d\TH:i:s';
    public const DATETIME_FORMAT_DB_ZONE_MS = 'Y-m-d\TH:i:s.u';
    public const DATE_FORMAT_PEOP = 'd.m.Y';
    public const TIME_FORMAT_PEOP = 'H.i';
    public const DATETIME_FORMAT_PEOP = 'd.m.Y H:i:s';
    public const SECONDS_IN_HOUR = 3600;
    public const HOURS_IN_A_DAY = 24;

    /**
     * @param string $format
     * @return string
     * @throws \Exception
     */
    public static function getCurrentDate(string $format = self::DATETIME_FORMAT_DB) : string {
        return (new DateTimeClass())->format($format);
    }

    /**
     * @param string $format
     * @return string
     * @throws \Exception
     */
    public static function getCurrentDateModifyed(string $modify = '+0 day', string $format = self::DATETIME_FORMAT_DB) : string {
        return (new DateTimeClass())->modify($modify)->format($format);
    }

    /**
     * @param $date
     * @param string $modify
     * @param string $format
     * @return string
     * @throws \Exception
     */
    public static function getDateModifyed(string $date, string $modify = '+0 day', string $format = self::DATETIME_FORMAT_DB) : string {
        return (new DateTimeClass($date))->modify($modify)->format($format);
    }

    /**
     * @param string $format
     * @return mixed
     * @throws \Exception
     */
    public static function getCurrentDateTimeStamp() : int {
        return (new DateTimeClass())->getTimestamp();
    }

    /**
     * @param $date
     * @param string $format
     * @return string
     * @throws \Exception
     */
    public static function convertDateToDateFormat(string $date, string $format = self::DATE_FORMAT_PEOP) : string {
        return (new DateTimeClass($date))->format($format);
    }

    /**
     * @param string $date
     * @param string $format
     * @return string
     * @throws \Exception
     */
    public static function convertDateToTimeFormat(string $date, string $format = self::TIME_FORMAT_PEOP) : string {
        return (new DateTimeClass($date))->format($format);
    }

    /**
     * @param int|null $timestamp
     * @param string $format
     * @return string|null
     */
    public static function timestampToDateTime(?int $timestamp, string$format = self::DATETIME_FORMAT_DB) : ?string {
        return $timestamp ? DateTimeClass::parse($timestamp)->timezone(env('APP_TIMEZONE'))->format($format) : null;
    }
    /**
     * @return float
     */
    public static function microtimeFloat() : float {
        list($usec, $sec) = explode(" ", microtime());
        return ((float) $usec + (float) $sec);
    }
}
