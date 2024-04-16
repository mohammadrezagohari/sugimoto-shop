/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        // or you can use a glob pattern (multiple component styles)
        './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'

    ],
    // theme: {
    //     extend: {},
    // },
    theme: {

        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },

        fontFamily: {
            sans: ['Yekan-Bakh', 'sans-serif'],
            // serif: ['Merriweather', 'serif'],
        },
        extend: {},

    },
    darkMode: "class",
    plugins: [],
}