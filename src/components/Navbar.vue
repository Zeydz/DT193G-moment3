<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// Lista med länkar för navigationen
const navLinks = [
    { path: '/', label: 'Hem' },
    { path: '/tracks', label: 'Låtar' },
    { path: '/about', label: 'Om' },
]

// Reaktiv variabel för mobilmenyn
const isMenuOpen = ref(false)

// Hämta aktuell route
const route = useRoute()

// Funktion för att avgöra om en länk är aktiv
const isActive = (path) => route.path === path
</script>

<!-- Navigationen -->
<template>
    <nav class="z-50 bg-slate-950 text-white border-b border-slate-700">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Titel / Logoty -->
                <router-link to="/" class="flex items-center gap-2">
                    <span class="text-xl font-bold text-slate-50 ">MusikLista</span>
                </router-link>

                <!-- Dator navigation -->
                <div class="hidden md:flex items-center gap-2">
                    <!-- Loopa igenom och skriv ut alla navigationer, flexibelt -->
                    <router-link v-for="link in navLinks" :key="link.path" :to="link.path">
                        <button :class="[
                            'px-4 py-2 rounded-xl text-sm font-medium border transition-colors',
                            isActive(link.path)
                                ? 'bg-cyan-500/10 text-cyan-500 border-cyan-500/30'
                                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-50 hover:bg-slate-800/50'
                        ]">
                            {{ link.label }}
                        </button>
                    </router-link>
                </div>

                <!-- Hamburgareikon för mobiler -->
                <button class="md:hidden w-10 h-10 rounded-xl hover:bg-gray-700 transition-colors bg-slate-800/80 border border-cyan-500"
                    @click="isMenuOpen = !isMenuOpen">
                    <component :is="isMenuOpen ? XIcon : MenuIcon" class="w-5 h-5 text-white" />
                      <i :class="isMenuOpen ? 'pi pi-times text-cyan-500' : 'pi pi-bars text-cyan-500'"></i>
                </button>
            </div>

            <!-- Navigation för mobiler -->
            <div class="md:hidden overflow-hidden transition-all duration-700 " :class="isMenuOpen ? 'max-h-48 pb-4' : 'max-h-0'">
                <div class="flex flex-col gap-2 mt-2 justify-center items-center">
                    <router-link v-for="link in navLinks" :key="link.path" :to="link.path" @click="isMenuOpen = false">
                        <button :class="[
                            'w-full justify-center px-4 py-2 rounded-xl border text-sm font-medium transition-colors',
                            isActive(link.path)
                                ? 'bg-cyan-500/10 text-cyan-500 border-cyan-500/30'
                                : 'bg-transparent text-slate-400 border-transparent hover:text-slate-50 hover:bg-slate-800/50'
                        ]">
                            {{ link.label }}
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>