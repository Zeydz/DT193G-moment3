<script setup>
import Footer from '@/components/Footer.vue';
import HeroBanner from '@/components/HeroBanner.vue';
</script>

<template>
    <HeroBanner />
    <section class="bg-slate-900 text-white p-8 flex flex-col items-center justify-center py-25">
        <div class="w-4/5 sm:w-3/4 md:w-3/4 lg:w-2/3">
            <h2 class="text-2xl font-bold mb-4 text-center">Mitt fritidsintresse</h2>
            <p class="text-lg">På min fritid gillar jag att umgås med familj, programmera och spela diverse datorspel.
                För utveckling
                kör jag både Mac & Windows beroende på vad jag känner för att använda. När jag spelar datorspel brukar
                jag främst spela Counter-Strike, men även andra spel. </p>
        </div>
    </section>
    <Footer />
</template>