<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';
import { addTrack } from '@/services/trackService';

// Ladda emits
const emit = defineEmits(['trackAdded']);

// Formulär data
const title = ref('');
const artist = ref('');
const yearReleased = ref('');
const genre = ref('');
const addedToPlaylist = ref(false);

// Meddelanden
const errorMessage = ref('');
const successMessage = ref('');

// Hantera formulär submission
async function submitForm() {
    try {
        // Rensa meddelanden
        errorMessage.value = '';
        successMessage.value = '';

        // Skapa ny track objekt
        const newTrack = {
            title: title.value,
            artist: artist.value,
            yearReleased: yearReleased.value ? Number(yearReleased.value) : undefined,
            addedToPlaylist: addedToPlaylist.value,
            genre: genre.value || undefined
        };

        // Lägg till låt via service
        const added = await addTrack(newTrack);
        emit('trackAdded', added);
        successMessage.value = 'Låt tillagd!';

        // Rensa formulär
        title.value = '';
        artist.value = '';
        yearReleased.value = '';
        addedToPlaylist.value = false;
        genre.value = '';

    } catch (error) {
        console.error("Fel vid tillägg av låt:", error);
        errorMessage.value = 'Ett fel uppstod. Försök igen.';
    }
}
</script>

<template>
    <!-- Formulär för att lägga till låtar -->
    <form @submit.prevent="submitForm" class="bg-slate-800 p-6 rounded-xl max-w-xl mx-auto shadow-lg space-y-5 text-white mt-15">
        <h2 class="text-2xl font-semibold text-center mb-2">Lägg till ny låt</h2>

        <!-- Title -->
        <div class="flex flex-col">
            <label for="title" class="text-sm text-slate-300 mb-1">Titel</label>
            <input id="title" v-model="title" type="text" required placeholder="Låtens titel"
                class="bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        </div>

        <!-- Artist -->
        <div class="flex flex-col">
            <label for="artist" class="text-sm text-slate-300 mb-1">Artist</label>
            <input id="artist" v-model="artist" type="text" required placeholder="Artist"
                class="bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        </div>

        <!-- Year Released -->
        <div class="flex flex-col">
            <label for="yearReleased" class="text-sm text-slate-300 mb-1">Utgivningsår</label>
            <input id="yearReleased" v-model="yearReleased" type="number" min="1900" max="2025" placeholder="2025"
                class="bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        </div>

        <!-- Genre -->
        <div class="flex flex-col">
            <label for="genre" class="text-sm text-slate-300 mb-1">Genre (valfri)</label>
            <input id="genre" v-model="genre" type="text" placeholder="Pop, Rock..."
                class="bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        </div>

        <!-- Checkbox -->
        <div class="flex items-center gap-2">
            <input type="checkbox" v-model="addedToPlaylist" class="w-4 h-4 rounded accent-cyan-500" />
            <label class="text-sm text-slate-300">Lägg till i spellista</label>
        </div>

        <!-- Submit knapp -->
        <button type="submit"
            class="w-full py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl hover:bg-cyan-500/20 font-semibold transition-colors">
            Lägg till låt
        </button>

        <!-- Success / Error meddelande -->
        <p v-if="successMessage" class="text-green-400 text-center">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-400 text-center">{{ errorMessage }}</p>
    </form>
</template>
