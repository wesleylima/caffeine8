<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Models\Drink;
use App\Models\Dose;
use App\Library\Mass;
use Illuminate\Http\Request;

# Half life 5.7 hours
# N(t) = N0(1/2)^(t/half-life)

$maxDailyDosage = new Mass(500, 'mg');

Route::get('/', function () {
    // $dateTime = (new \DateTime())->format('Y-m-d H:i:s');
    $dateTime = (new \DateTime())->format('Y-m-d 00:00:00');
    return response()->json(Dose::where('created_at', '>', $dateTime)->get());
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
    $todayStart = (new \DateTime())->format('Y-m-d 00:00:00');
    return response()->json(Dose::where('created_at', '>', $todayStart)->get());
});

Route::delete('doses/{doseId?}', function (Request $request) {
    $dose = Dose::find($request->doseId);
    if ($dose) {
        $dose->delete();
        return response()->json(["message" => "Deletion sucessful"]);
    }
    return response()->json(["error" => "Dose not found"], 404);
});
