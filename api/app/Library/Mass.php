<?php

namespace App\Library;

class Mass
{

    public function __construct($magnitude, $unit)
    {
        // Magnitude is stored as micrograms
        $units = [
          'ug' => 1,
          'mg' => 1000,
          'g' => 1000000,
          'kg' => 1000000000
        ];
        if (!array_key_exists($unit, $units)) {
            throw new Exception('Unsupported unit of mass.');
        }
        $this->unit = $unit;

        $microgramMagnitude = $magnitude * $units[$unit];

        $this->magnitude = $microgramMagnitude;
    }

    public function __toString()
    {
        return $this->magnitude . 'ug';
    }

    public function toMilligrams()
    {
        return $this->magnitude*1000 . 'mg';
    }
}
