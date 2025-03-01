/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
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
