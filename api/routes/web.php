<?php

use App\Models\Drink;
use App\Models\Dose;
use App\Library\Mass;
use Illuminate\Http\Request;

Route::get('/', function () {
    $todayStart = (new \DateTime())->format('Y-m-d 00:00:00');
    return response()->json(Dose::where('created_at', '>', $todayStart)->get());
});

Route::get('drinks', function () {
    return response()->json(Drink::all());
});


Route::post('doses', function (Request $request) {
    $data = $request->all();
    if (isset($data['percentageConsumed'])) {
        $percentageConsumed = $data['percentageConsumed'];
    } else {
        $percentageConsumed = 100;
    }

    $dose = new Dose();
    $dose->drink_id = $data['drinkId'];
    $dose->percentage_consumed = $percentageConsumed;
    $dose->save();
    return response()->json($dose);
});

Route::delete('doses/{doseId?}', function (Request $request) {
    $dose = Dose::find($request->doseId);
    if ($dose) {
        $dose->delete();
        return response()->json(["message" => "Delete sucessful"]);
    }
    return response()->json(["error" => "Dose not found"], 404);
});
