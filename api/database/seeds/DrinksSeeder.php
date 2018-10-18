<?php
use Illuminate\Database\Seeder;

class DrinksSeeder extends Seeder
{

    /**
     * Seed Drinks
     *
     * @return  void
     */
    public function run()
    {
        //Empty the table
        DB::table('drinks')->delete();

        //Get drinks from seed csv file
        $drinksPath = app_path('Models/Reference/drinks.csv');
        $fileHandle = fopen($drinksPath, "r");

        while (($drink = fgetcsv($fileHandle)) !== false) {
            DB::table('drinks')->insert([
                'name' => $drink[0],
                'description' => $drink[1],
                'caffeine_content' => $drink[2] * 1000,
                'created_at' => (new \DateTime())->format('Y-m-d H:i:s'),
                'updated_at' => (new \DateTime())->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
