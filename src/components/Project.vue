<template>
    <div :class="['project-item', project.rotationClass]">
        <h3 class="text-2xl font-bold pb-4">{{ project.title }}</h3>
        <a :href="project.url" target="_blank">
            <img :src="project.image" :alt="project.title">
            <div class="overlay text-sm mt-2" v-html="project.description"></div>
        </a>
    </div>
</template>

<script setup lang="ts">
const { project } = defineProps<{
    project: {
        title: string;
        url: string;
        image: string;
        description: string;
        rotationClass: string
    };
}>();
</script>

<style scoped>
.project-item {
    width: 24em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    margin: 2em;
    padding: 1em;
    transition: transform 0.3s ease;
}

.project-item:hover {
    transform: scale(1.1);
}

.project-item .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-item:hover .overlay {
    opacity: 1;
}
</style>
