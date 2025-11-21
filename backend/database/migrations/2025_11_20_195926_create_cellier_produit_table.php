<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cellier_produit', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cellier_id')->constrained()->onDelete('cascade');
            $table->foreignId('produit_id')->constrained()->onDelete('cascade');
            $table->integer('quantite')->default(1); // nombre de bouteilles dans le cellier
            $table->timestamps();

            $table->unique(['cellier_id', 'produit_id']); // éviter doublons
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cellier_produit');
    }
};
