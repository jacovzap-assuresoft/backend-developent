<?php

namespace Tests\Feature;

use App\Models\Animal;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class AnimalControllerTest extends TestCase
{
    use RefreshDatabase;

    // /**
    //  * @test
    //  */
 
    public function get_all_animals()
    {
        Animal::factory()->count(3)->create();

        $response = $this->get('/api/animals');

        $response->assertStatus(200);
        $response->assertJsonCount(3, 'data');
    }

    /**
     * @test
     */

    public function create_animal()
    {
        $animal = Animal::factory()->make();

        $response = $this->post('/api/animals', $animal->toArray());
        print_r($response->getContent());

        $response->assertStatus(201);
        $response->assertJsonCount(1, 'data');
    }
}