<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Animal;

/**
* @OA\Info(
*             title="Animals API", 
*             version="1.0",
*             description="Descripcion"
* )
*
* @OA\Server(url="http://localhost:8000")
*/


class AnimalController extends Controller
{

/**
 * Get all animals 
 * @OA\Get (
 *     path="/api/animals",
 *     tags={"Animals"},
 *     @OA\Response(
 *         response=200,
 *         description="OK",
 *         @OA\JsonContent(
 *             @OA\Property(
 *                 property="data",
 *                 type="array",
 *                 @OA\Items(
 *                     type="object",
 *                     @OA\Property(property="id", type="number", example=1),
 *                     @OA\Property(property="name", type="string", example="Max"),
 *                     @OA\Property(property="species", type="string", example="Dog"),
 *                     @OA\Property(property="birthday", type="string", example="12-10-2015"),
 *                     @OA\Property(property="description", type="string", example="A good dog"),
 *                     @OA\Property(property="created_at", type="string", example="2023-02-23T00:09:16.000000Z"),
 *                     @OA\Property(property="updated_at", type="string", example="2023-02-23T12:33:45.000000Z")
 *                 )
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Internal Server Error",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string", example="Error getting animals"),
 *             @OA\Property(property="error", type="string", example="Error message")
 *         )
 *     )
 * )
 */

    public function get_all_animals()
    {
        try { 
            $animals = Animal::all();
            return response()->json($animals, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error getting animals', 'error' => $e->getMessage()], 500);
        }
    }

/**
 * Create new animal
 *
 * @OA\Post(
 *     path="/api/animals",
 *     tags={"Animals"},
 *     summary="Register a new animal",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             @OA\Property(property="name", type="string", example="Max"),
 *             @OA\Property(property="specie", type="string", example="Dog"),
 *             @OA\Property(property="birthday", type="string", example="12-10-2015"),
 *             @OA\Property(property="description", type="string", example="A good dog"),
 *             @OA\Property(property="created_at", type="string", example="2023-02-23T00:09:16.000000Z"),
 *             @OA\Property(property="updated_at", type="string", example="2023-02-23T12:33:45.000000Z")
 *         )
 *     ),
 *     @OA\Response(
 *         response=201,
 *         description="Created",
 *         @OA\JsonContent(
 *             @OA\Property(property="id", type="integer", example=1),
 *             @OA\Property(property="name", type="string", example="Max"),
 *             @OA\Property(property="specie", type="string", example="Dog"),
 *             @OA\Property(property="birthday", type="string", example="12-10-2015"),
 *             @OA\Property(property="description", type="string", example="A good dog"),
 *             @OA\Property(property="created_at", type="string", example="2023-02-23T00:09:16.000000Z"),
 *             @OA\Property(property="updated_at", type="string", example="2023-02-23T12:33:45.000000Z")
 *         )
 *     ),
 *     @OA\Response(
 *         response=500,
 *         description="Internal Server Error",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string", example="Error creating animal"),
 *             @OA\Property(property="error", type="string", example="Error message")
 *         )
 *     )
 * )
 */

    public function create_animal(Request $request)
    {
        try { 
            $animal = Animal::create($request->all());
            return response()->json($animal, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error creating animal', 'error' => $e->getMessage()], 500);
        }
    }
}
