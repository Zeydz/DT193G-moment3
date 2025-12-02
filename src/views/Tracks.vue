<script setup>
import { onMounted, ref } from 'vue';
import AddTracksForm from '@/components/UI/AddTracksForm.vue';
import TrackList from '@/components/UI/TrackList.vue';
import { fetchTrack } from '@/services/trackService';

// Lagra fetch information
const tracks = ref([]);
const loading = ref(true)
const errorMessage = ref('');

// Importera fetch funktion
async function loadTracks() {
    try {
        tracks.value = await fetchTrack();
    } catch (error) {
        errorMessage.value = 'Kunde inte hämta låtar.';
    } finally {
        // Sätt loading till false när fetch är klar
        loading.value = false;
    }
}

// Kör vid sidladdning
onMounted(() => {
    loadTracks();
});

// Uppdatera listan när en ny låt läggs till
function updateList(newTrack) {
    tracks.value.push(newTrack);
}

// När TrackList säger att en låt har tagits bort
function removeTrack(id) {
    tracks.value = tracks.value.filter(track => track._id !== id);
}

</script>

<template>
    <AddTracksForm @track-added="updateList" />

    <TrackList :tracks="tracks" :loading="loading" :errorMessage="errorMessage" @track-deleted="removeTrack" />
</template>