<template>
    <div class="mt-6 grid text-xl font-medium gap-4 content text-orange-100">
        <h1 class="text-3xl font-bold text-orange-200 pb-4 underline">{{ name }}</h1>
        <p v-for="(skill, i) in skills" :key="i">
            {{ skill }}
        </p>
    </div>
</template>
<script setup lang="ts">
const { name, skills } = defineProps<{
    name: string;
    skills: string[];
}>();
</script>
