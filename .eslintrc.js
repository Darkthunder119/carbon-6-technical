module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    settings: {
        'react': {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: { es6: true, node: true, browser: true },
    plugins: ['react', 'prettier', '@typescript-eslint', 'import'],
    rules: {
        'complexity': ['warn', 10],
        'max-depth': ['warn', 5],
        'max-params': ['warn', 5],
        'max-len': [
            'warn',
            {
                code: 120,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreStrings: true,
            },
        ],
        /* Stylistic Rules */
        'array-bracket-spacing': 'warn',
        'block-spacing': 'warn',
        'camelcase': ['warn', { properties: 'never' }],
        'no-negated-condition': 'warn',
        'func-call-spacing': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': ['warn', 'never'],
        'space-unary-ops': 'warn',
        'spaced-comment': ['warn', 'always'],
        'padding-line-between-statements': [
            'warn',
            {
                blankLine: 'always',
                prev: '*',
                next: ['class', 'if', 'try', 'throw', 'return'],
            },
            {
                blankLine: 'always',
                prev: ['class', 'if', 'try', 'throw', 'return'],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['var'],
                next: ['var'],
            },
            {
                blankLine: 'any',
                prev: ['let'],
                next: ['let'],
            },
            {
                blankLine: 'any',
                prev: ['const'],
                next: ['const'],
            },
        ],
        'import/order': [
            'warn',
            {
                'groups': ['builtin', 'external', 'internal'],
                'pathGroups': [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                'pathGroupsExcludedImportTypes': ['react'],
                'newlines-between': 'always',
                'alphabetize': {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'comma-dangle': ['warn', 'always-multiline'],
        'object-curly-spacing': ['warn', 'always'],
        'import/first': 'warn',
        'import/named': 'off',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-undefined': 'warn',
        'dot-notation': 'warn',
        'no-caller': 'warn',
        'no-console': 'warn',
        'arrow-body-style': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        'default-case': 'warn',
        'default-case-last': 'warn',
        'no-eval': 'warn',
        'no-labels': 'warn',
        'no-octal-escape': 'warn',
        'no-param-reassign': 'warn',
        'no-promise-executor-return': 'warn',
        'no-self-compare': 'warn',
        'no-shadow': 'off',
        'no-template-curly-in-string': 'warn',
        'no-unmodified-loop-condition': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-useless-backreference': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-rename': 'warn',
        'no-var': 'warn',
        'object-shorthand': 'warn',
        'one-var': ['warn', 'never'],
        'prefer-arrow-callback': 'warn',
        'prefer-const': [
            'warn',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-destructuring': ['warn', { object: true, array: false }],
        'prefer-exponentiation-operator': 'warn',
        'prefer-numeric-literals': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-promise-reject-errors': 'warn',
        'prefer-regex-literals': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'curly': 'warn',
        'eqeqeq': ['warn', 'always', { null: 'ignore' }],
        'strict': 'warn',
        'yoda': 'warn',
    },
};
