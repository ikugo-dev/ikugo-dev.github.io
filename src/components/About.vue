<template>
    <section id="about" class="snap-start h-screen bg-leather bg-emerald-900 flex items-center justify-center">
        <div class="max-w-6xl mx-auto text-left flex flex-col items-center">

            <div class="max-w-xl bg-leather bg-yellow-900 w-full p-1 mb-16">
                <h2
                    class="bg-leather bg-yellow-900 border-4 border-yellow-950 text-6xl pt-4 pb-2 font-bold text-center text-yellow-950">
                    About Me
                </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="p-6 bg-red-200 shadow-2xl -rotate-3">
                    <h3 class="text-3xl font-bold text-emerald-950 mb-4  underline decoration-dotted decoration-4">
                        Who I Am
                    </h3>
                    <p class="text-lg font-semibold leading-relaxed p-4">
                        Hi, I’m Aleksandar Ristić, a Software Engineering student at the Faculty of Electronic
                        Engineering in Niš, Serbia.<br>
                        I love programming in all its forms, from low-level systems to backend development, and I’ve
                        spent years sharpening my skills through personal projects and exploring new ideas.
                    </p>
                </div>
                <div class="p-6 bg-red-200 shadow-2xl rotate-1">
                    <h3 class="text-3xl font-bold text-emerald-950 mb-4  underline decoration-dotted decoration-4">
                        What I Do
                    </h3>
                    <p class="text-lg font-semibold leading-relaxed p-4">
                        Over the years, I’ve worked on a variety of projects and become a bit of a jack of all
                        trades.<br>
                        I enjoy collaborating with others, solving challenging problems, and building clean,
                        efficient, and scalable solutions.<br>
                        Writing simple, maintainable code is something I take pride in, and I’m always eager to
                        learn and improve.
                    </p>
                </div>
                <div class="p-6 bg-red-200 shadow-2xl rotate-6">
                    <h3 class="text-3xl font-bold text-emerald-950 mb-4  underline decoration-dotted decoration-4">
                        What I Love
                    </h3>
                    <p class="text-lg font-semibold leading-relaxed p-4">
                        When I’m not programming, I enjoy music, art, movies, and cooking.<br>
                        I like spending my free time being creative, whether it’s drawing or experimenting with new
                        coding ideas.<br>
                        For me, every day is a chance to grow and create something meaningful.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.bg-leather {
    background-image: url("https://www.transparenttextures.com/patterns/dark-leather.png");
}
</style>
