module.exports = {
    root: true,
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: { browser: true, es2021: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs', '**.css'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier', 'eslint-plugin-import'],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        quotes: ['error', 'single'],
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto'
            }
        ],
        'import/order': [
            'error',
            {
                'groups': [
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
