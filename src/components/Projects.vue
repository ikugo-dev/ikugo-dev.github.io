<template>
    <section id="projects" class="snap-start h-screen py-16 flex items-center justify-center"
        style="background-image: url('/images/psych.png');">
        <div class="mx-auto text-center">
            <h2 class="text-5xl font-bold">Projects</h2>
            <div class="w-full max-w-screen-lg mx-auto">
                <Carousel v-bind="carouselConfig">
                    <Slide v-for="(project, i) in projects" :key="i">
                        <div class="carousel__item">
                            <Project :project="project" />
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
    itemsToShow: 2.5,
    wrapAround: true
}

import Project from "./Project.vue"
interface project {
    title: string
    url: string,
    image: string,
    description: string,
}
const projects: project[] = [
    {
        title: 'DOM Visualizer',
        url: 'https://github.com/ikugo-dev/DOM-visualizer',
        image: '/images/projects/dom-visualizer.webp',
        description: 'Website with backend golang parser for any XML-like text'
    },
    {
        title: 'Nobonoko Generator',
        url: 'https://github.com/ikugo-dev/nobonoko-generator',
        image: '/images/projects/nobonoko.webp',
        description: 'Desktop app that transforms images<br>into nobonoko-esque album covers'
    },
    {
        title: 'Simple Bezier Curves',
        url: 'https://github.com/ikugo-dev/simple-bezier-curves',
        image: '/images/projects/bezier.webp',
        description: 'A simple visualizer for dynamic<br>bezier curves using raylib'
    },
    {
        title: 'Huffman Coding',
        url: 'https://github.com/ikugo-dev/huffman-coding',
        image: '/images/projects/huffman.webp',
        description: 'A CLI tool for encoding or decoding<br>.txt files using the huffman algorithm'
    },
    {
        title: 'Bencode Parser',
        url: 'https://github.com/ikugo-dev/bencode-parser',
        image: '/images/projects/bencode.webp',
        description: 'Bencode parser libraries for C++'
    },
    {
        title: 'LAN Chat',
        url: 'https://github.com/ikugo-dev/lan-chat',
        image: '/images/projects/lan-chat.webp',
        description: 'HTTPS WebSocket (aka. WSS)<br>chat site served on local IP'
    }
];
</script>

<style scoped></style>
