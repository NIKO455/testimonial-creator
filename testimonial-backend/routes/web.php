<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'Data fetched successfully',
        'laravel version' => app()->version(),
    ]);
});

require __DIR__ . '/auth.php';
