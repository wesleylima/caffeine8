<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dose extends Model
{
    public function drink()
    {
        return $this->belongsTo(\App\Models\Drink::class, 'drink_id');
    }
}
