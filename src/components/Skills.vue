<template>
    <section id="skills"
        class="snap-start h-screen bg-rose-300 checkerboard checkerboard-section flex items-center justify-center">
        <div class="bg-rose-700 w-full max-w-6xl text-center p-2">
            <div class="bg-rose-700 w-full p-10 border-2 border-orange-200">
                <h2 class="text-5xl font-extrabold text-orange-200 content">Skills</h2>
                <div class="grid grid-cols-4">
                    <SkillList v-for="(skill, i) in allSkills" :key="i" :name="skill.name" :skills="skill.skills" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import SkillList from './SkillList.vue';
interface skill {
    name: string;
    skills: string[];
}
const allSkills: skill[] = [{
    name: "Languages",
    skills: [
        "C & C++",
        "TypeScript & JS",
        "GoLang",
        "Java",
        "Python",
    ],
}, {
    name: "Backend",
    skills: [
        "Express.js",
        "Spring Boot",
        "MongoDB",
        "SQLite",
        "Firebase",
    ],
}, {
    name: "Frontend",
    skills: [
        "Vue3",
        "React.js",
        "Tailwind",
        "Bootstrap",
    ],
}, {
    name: "Other",
    skills: [
        "Raylib & Raygui",
        "Bash script",
        "Makefile",
        "Markdown",
    ],
},];
</script>

<style scoped>
.checkerboard {
    background-image: linear-gradient(45deg, #f43f5e 25%, transparent 25%, transparent 75%, #f43f5e 75%, #f43f5e),
        linear-gradient(45deg, #f43f5e 25%, transparent 25%, transparent 75%, #f43f5e 75%, #f43f5e);
    background-size: 120px 120px;
    /* background-position: 30px 30px, 90px 90px; */
    background-position: 0px 0px, 60px 60px;
}
</style>
