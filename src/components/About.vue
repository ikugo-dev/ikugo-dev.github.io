<template>
    <section id="about" class="snap-start h-screen">
        <div class="min-h-screen bg-gray-900 flex items-center justify-center p-8">
            <div class="relative w-full max-w-4xl">
                <div class="paper-texture shadow-2xl p-12 md:p-16 relative">

                    <img src="/images/paperclip.png" alt="Paperclip" class="absolute left-2 -top-6 w-14">
                    <div class="absolute top-10 right-16">
                        <p class="text-2xl font-bold tracking-widest">
                            ALEKSANDAR RISTIĆ
                        </p>
                    </div>

                    <div class="flex items-center gap-4 w-full mb-8">
                        <img src="/images/bottle.png" alt="Bottle" class="relative -top-6 w-8">
                        <!-- Header with colored bars -->

                        <div class="mb-8 flex-1">
                            <h1 class="text-4xl font-bold text-red-600 tracking-wide">
                                About me
                            </h1>
                            <div class="w-full h-0.5 bg-blue-600"></div>
                            <p class="text-xl text-red-600 tracking-wide">
                                Software developer
                            </p>
                        </div>
                    </div>


                    <h2 class="text-2xl mb-8 tracking-wider text-center">
                        Who I Am
                    </h2>

                    <div class="space-y-6 text-lg leading-relaxed">
                        <p class="indent-0">
                            I am a Software Engineering student at the Faculty of Electronic Engineering in Niš, Serbia.
                            <br>
                            When I’m not working on a personal project, I enjoy music, art, movies, and cooking.
                        </p>
                    </div>
                    <h2 class="text-2xl mb-8 tracking-wider text-center">
                        What I Do
                    </h2>

                    <div class="space-y-6 text-lg leading-relaxed">
                        <p class="indent-0">
                            Over the years, I’ve worked on a variety of projects and become a bit of a jack of all
                            trades.
                            <br>
                            Writing simple, maintainable code is something I take pride in, and I’m always eager to
                            learn and improve.
                        </p>
                    </div>

                    <!-- Aged paper effects -->
                    <div class="absolute top-0 right-0 w-32 h-32 bg-amber-200 opacity-20 rounded-bl-full"></div>
                    <div class="absolute bottom-0 left-0 w-24 h-24 bg-amber-300 opacity-15 rounded-tr-full"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Additional typewriter text styling */
* {
    font-family: 'Courier New', monospace;
}

p,
h1,
h2 {
    text-rendering: optimizeLegibility;
    letter-spacing: 0.05em;
}

/* Slight text shadow for typewriter effect */
.text-lg {
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
}

.paper-texture {
    background-color: #fef3c7;
    background-image: url("https://www.transparenttextures.com/patterns/beige-paper.png");
}

/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
</style>
