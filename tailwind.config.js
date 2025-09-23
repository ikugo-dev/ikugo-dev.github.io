/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,css}",
        "./**/*.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                "display": ["League Spartan", "ui-monospace"],
            },
            animation: {
                marquee: "marquee 10s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};
