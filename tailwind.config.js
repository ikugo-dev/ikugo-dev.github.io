/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,css}",
        "./**/*.html",
    ],
    theme: {
        extend: {
            scrollBehavior: ['smooth'],
            fontFamily: {
                'display': ['League Spartan', 'ui-monospace'],
            },
        },
    },
    plugins: [],
}
