<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <Navbar />
    <router-view />
  </div>
</template>

<style scoped></style>
