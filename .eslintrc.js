module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'svelte3'
    ],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    settings: {
        'svelte3/ignore-styles': () => true
    },
    rules: {
        'no-unused-vars': ['warn'],

        'no-template-curly-in-string': ['error'],

        'no-multi-spaces': ['error'],
        'require-await': ['error'],

        'yoda': ['error'],

        'no-shadow': ['error'],
        'no-undefined': 'off',

        'array-bracket-spacing': ['error', 'never'],
        'array-bracket-newline': ['error', 'consistent'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs'],
        'camelcase': ['warn'],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'indent': ['error', 4],
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['warn', { 'code': 120, 'tabWidth': 4 }],
        'multiline-comment-style': ['warn', 'starred-block'],
        'no-array-constructor': 'error',
        'no-mixed-operators': ['error'],
        'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 0, 'maxEOF': 1 }],
        'no-new-object': 'error',
        'no-tabs': ['error'],
        'no-trailing-spaces': ['error'],
        'no-unneeded-ternary': ['error'],
        'no-whitespace-before-property': 'error',
        'object-curly-newline': ['error', { 'consistent': true }],
        'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false }],
        'one-var': ['off', { 'initialized': 'never', 'uninitialized': 'always' }],
        'padded-blocks': ['error', 'never'],
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['warn', 'single', { 'avoidEscape': true }],
        'semi': ['warn', 'always', { 'omitLastInOneLineBlock': true }],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'semi-style': ['error', 'last'],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always' }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always'],
        'switch-colon-spacing': ['error', { 'after': false, 'before': true }],
        'template-tag-spacing': ['error', 'never'],

        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        'no-confusing-arrow': ['error'],
        'no-duplicate-imports': ['error'],
        'no-useless-computed-key': ['error'],
        'no-useless-constructor': 'error',
        'no-useless-rename': ['error'],
        'no-var': 'error',
        'prefer-arrow-callback': ['error', { 'allowUnboundThis': false }],
        'prefer-const': ['error'],
        'prefer-destructuring': ['warn'],
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-template': ['error'],
        'require-yield': 'error',
        'rest-spread-spacing': ['error'],
        'symbol-description': 'error',
        'template-curly-spacing': ['error', 'never']
    }
};
