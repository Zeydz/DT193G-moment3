<script setup>
import { defineProps, defineEmits } from 'vue';
import { deleteTrack } from '@/services/trackService';

// Definiera props
const props = defineProps({
    tracks: Array,
    loading: Boolean,
    errorMessage: String
})

// Definiera emits
const emit = defineEmits(['trackDeleted']);

// Hantera borttagning av låt
async function handleDelete(id) {
    try {
        await deleteTrack(id);
        emit('trackDeleted', id);
    } catch (error) {
        console.error("Fel vid borttagning:", error);
    }
}
</script>

<template>
    <section class="p-6 text-white flex flex-col max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-6 text-center">Låtar</h1>
        <ul class="space-y-4">
            <!-- For loop för att printa ut -->
            <div v-if="loading" class="text-slate-400 text-center">Söker efter låtar...</div>
            <div v-else-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>
            <div v-else-if="tracks.length === 0" class="text-slate-400 text-center">Inga låtar hittades.</div>
            <li v-else v-for="track in tracks" :key="track._id"
                class="p-4 bg-slate-800 rounded-lg shadow-md flex justify-between items-center">
                <div>
                    <h2 class="text-xl font-semibold">{{ track.title }}</h2>
                    <p class="text-sm text-slate-400">Artist: {{ track.artist }}</p>
                    <p class="text-sm text-slate-400">Släppt: {{ track.yearReleased }}</p>
                    <p class="text-sm text-slate-400">Tillagd i spellista: {{ track.addedToPlaylist }}</p>
                    <p v-if="track.genre && track.genre.trim() !== ''" class="text-sm text-slate-400">Genre: {{
                        track.genre }}</p>
                </div>
                <!-- Knapp för att ta bort en track -->
                <button @click="handleDelete(track._id)"
                    class="px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700 transition-colors cursor-pointer">
                    Ta bort
                </button>
            </li>
        </ul>
    </section>
</template>