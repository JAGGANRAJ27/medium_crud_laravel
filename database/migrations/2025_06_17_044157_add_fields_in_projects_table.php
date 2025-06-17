<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->string('project_name')->after('id');
            $table->string('project_description')->after('project_name');
            $table->string('project_type')->after('project_description');
            $table->unsignedBigInteger('client_id')->after('project_type');
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade')->after('project_type');
            $table->string('amount')->after('client_id');
            $table->string('paid')->after('amount');
            $table->string('balance')->after('paid');
            $table->string('reference')->after('balance');
            $table->string('start_date')->after('reference');
            $table->string('end_date')->after('start_date');
            $table->string('status')->after('end_date');
            $table->string('project_link')->after('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('projects', function (Blueprint $table) {
            Schema::dropIfExists('projects');
        });
    }
};
