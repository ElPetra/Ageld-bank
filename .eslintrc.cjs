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
        'plugin:prettier/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '**.css'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        quotes: ['error', 'single'],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
        ],
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
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none'],
                allowSeparatedGroups: false
            }
        ],
        'import/prefer-default-export': 'off',
        'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
        curly: 'error',
        'no-unused-expressions': 'error'
    }
};
