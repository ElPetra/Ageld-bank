module.exports = {
    root: true,
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: { browser: true, es2021: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '**.css'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier', 'eslint-plugin-import', '@typescript-eslint'],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        quotes: ['error', 'single'],
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto'
            }
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports'
            }
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type'
                ],
                'newlines-between': 'always-and-inside-groups'
            }
        ],
        'import/prefer-default-export': 'off',
        'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
        curly: 'error',
        'no-unused-expressions': 'error'
    }
};
