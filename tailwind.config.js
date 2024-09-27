/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                caveat: ['var(--font-caveat)'],
                abz: ['var(--font-abz)'],
                roboto: ['var(--font-roboto)'],
                francois: ['var(--font-francois)']
            },
            maxWidth: {
                '8xl': '1440px'
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 60s linear infinite',
            },
            keyframes: theme => ({
                'infinite-scroll': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            })
        },
    },
    plugins: [],
};
