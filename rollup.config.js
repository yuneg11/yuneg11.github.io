import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';

import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

import config from 'sapper/config/rollup.js';
import pkg from './package.json';


const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const onwarn = (warning, onwarn) => (
    (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
    (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
    onwarn(warning)
);

const replacePath = [
    [/(?<!\/)components(?=\/)/g, path.resolve(__dirname, 'src', 'components')],
    [/(?<!\/)pages(?=\/)/g, path.resolve(__dirname, 'src', 'pages')],
    [/(?<!\/)data(?=\/)/g, path.resolve(__dirname, 'data')],
    [/(?<!\/)static(?=\/)/g, path.resolve(__dirname, 'static')],
    [/(?<!\/)styles(?=\/)/g, path.resolve(__dirname, 'src', 'styles')],
    [/(?<!\/)node_modules(?=\/)/g, path.resolve(__dirname, 'node_modules')],
    [/(?<!\/)templates(?=\/)/g, path.resolve(__dirname, 'templates')],
];

export default {
    client: {
        input: config.client.input(),
        output: config.client.output(),
        plugins: [
            replace({
                preventAssignment: true,
                values: {
                    'process.browser': true,
                    'process.env.NODE_ENV': JSON.stringify(mode),
                },
            }),
            svelte({
                preprocess: sveltePreprocess({
                    sourceMap: !!dev,
                    replace: replacePath,
                    postcss: {
                        plugins: [
                            autoprefixer(),
                        ]
                    },
                }),
                compilerOptions: {
                    dev,
                    hydratable: true,
                },
                onwarn: (warning, handler) => {
                    const { code, frame } = warning;

                    if (code === 'css-unused-selector')
                        return;

                    handler(warning);
                },
            }),
            url({
                sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
                publicPath: '/client/',
            }),
            resolve({
                browser: true,
                dedupe: ['svelte'],
            }),
            commonjs(),
            !dev && terser({
                module: true,
            }),
            json(),
        ],

        preserveEntrySignatures: false,
        onwarn,
    },

    server: {
        input: config.server.input(),
        output: config.server.output(),
        plugins: [
            replace({
                preventAssignment: true,
                values: {
                    'process.browser': false,
                    'process.env.NODE_ENV': JSON.stringify(mode),
                },
            }),
            svelte({
                preprocess: sveltePreprocess({
                    sourceMap: !!dev,
                    replace: replacePath,
                    postcss: {
                        plugins: [
                            autoprefixer(),
                        ]
                    },
                }),
                compilerOptions: {
                    dev,
                    generate: 'ssr',
                    hydratable: true,
                },
                emitCss: false,
                onwarn: (warning, handler) => {
                    const { code, frame } = warning;

                    if (code === 'css-unused-selector')
                        return;

                    handler(warning);
                },
            }),
            url({
                sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
                publicPath: '/client/',
                emitFiles: false, // already emitted by client build
            }),
            resolve({
                dedupe: ['svelte'],
            }),
            commonjs(),
            json(),
        ],
        external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
        preserveEntrySignatures: 'strict',
        onwarn,
    },
};
