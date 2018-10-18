<?php

use Illuminate\Http\Request;

Route::get('drinks', function () {
    return Drinks::all();
});
