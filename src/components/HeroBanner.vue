<script setup lang="ts">
import HeroButtons from './UI/HeroButtons.vue';

</script>

<template>
    <!-- Hero-bilden -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <img src="../assets/bakgrund2.webp" alt="Hero bild" class="w-full h-full object-cover opacity-9">
    </section>

    <!-- Text overlayen -->
    <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 class="text-6xl font-bold mb-4">Välkommen till <span class="text-cyan-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">MusikLista!</span></h1>
        <p class="text-lg">Utforska och hantera dina favoritlåtar!</p>
        <HeroButtons />
    </div>
</template>
