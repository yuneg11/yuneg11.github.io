const sveltePreprocess = require('svelte-preprocess');
const path = require('path');

module.exports = {
    preprocess: sveltePreprocess({
        replace: [
            [/(?<!\/)components(?=\/)/g, path.resolve(__dirname, 'src', 'components')],
            [/(?<!\/)pages(?=\/)/g, path.resolve(__dirname, 'src', 'pages')],
            [/(?<!\/)data(?=\/)/g, path.resolve(__dirname, 'data')],
            [/(?<!\/)static(?=\/)/g, path.resolve(__dirname, 'static')],
            [/(?<!\/)styles(?=\/)/g, path.resolve(__dirname, 'src', 'styles')],
            [/(?<!\/)node_modules(?=\/)/g, path.resolve(__dirname, 'node_modules')],
            [/(?<!\/)templates(?=\/)/g, path.resolve(__dirname, 'templates')],
        ],
    }),
};
