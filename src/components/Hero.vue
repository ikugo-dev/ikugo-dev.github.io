<template>
    <header id="hero" class="snap-start h-screen flex items-center justify-center parallax"
        style="background-image: url('/images/clouds.webp');">
        <div class="flex items-center max-w-4xl mx-auto px-6">
            <div class="w-48 h-64 bg-gray-300 overflow-hidden border-4 border-white mr-8">
                <img src="/images/me.webp" alt="Placeholder face" class="w-full h-full object-cover">
            </div>
            <div>
                <h1 class="text-6xl font-bold text-yellow-300">Aleksandar Ristić</h1>
                <p class="text-2xl mt-2 text-yellow-300">Aka.
                    <span class="font-bold">Ikugo </span>
                </p>
                <a href="#about"
                    class="mt-8 px-6 py-3 bg-gray-800 text-white rounded hover:bg-pink-300 inline-block">Learn
                    More</a>
            </div>
        </div>
    </header>
</template>

<style scoped>
.parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
