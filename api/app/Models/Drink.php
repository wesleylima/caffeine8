<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Library\Mass;

class Drink extends Model
{

    public function setCaffeineContentAttribute(Mass $amount)
    {
        $this->attributes['caffeine_content'] = $amount->magnitude;
    }

    public function getCaffeineContentAttribute($phoneNumber)
    {
        return new Mass($this->attributes['caffeine_content'], 'ug');
    }


    public function doses()
    {
        return $this->hasMany(\App\Models\Doses::class, 'drink_id');
    }
}
