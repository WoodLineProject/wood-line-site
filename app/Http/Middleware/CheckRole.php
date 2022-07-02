<?php

namespace App\Http\Middleware;

use App\Http\Classes\LogicalModels\Common\Structure\Roles;
use Closure;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     * @param string $role
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, string $role)
    {
        $userRole = Auth::user()->role;
        if($userRole !== Roles::OWNER){
            $all_args = func_get_args();
            $required_roles = array_splice($all_args, 2);
            $result = array_intersect($required_roles, [$userRole]);
            return count($result)
                ? $next($request)
                : response('Unauthenticated.', 401);
        }
        return $next($request);
    }
}
