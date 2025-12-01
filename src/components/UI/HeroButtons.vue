<script setup>
</script>

<!-- Knappar på hero-bilden -->
<template>
    <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <!-- Vänsterknappen -->
        <router-link to="/tracks">
            <button
                class="flex items-center gap-2 px-6 py-3 text-white bg-cyan-500/10 border border-cyan-500/30 rounded-xl hover:bg-cyan-500/20 transition-colors">
                Se låtlistan
                <span class="transition-transform group-hover:translate-x-1">→</span>
            </button>
        </router-link>

        <!-- Högerknappen -->
        <router-link to="/about">
            <button
                class="px-6 py-3 text-cyan-500 border border-cyan-500/30 rounded-xl hover:bg-slate-800/50 transition-colors">
                Läs mer om projektet
            </button>
        </router-link>
    </div>
</template>