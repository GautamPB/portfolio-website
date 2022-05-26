module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            transitionProperty: {
                width: 'width',
                height: 'height',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
