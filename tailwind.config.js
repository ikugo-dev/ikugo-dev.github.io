/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html",
];
export const theme = {
    extend: {
        fontFamily: {
            "display": ["League Spartan", "ui-monospace"],
        },
    },
};
export const plugins = [];
