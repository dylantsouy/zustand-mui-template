module.exports = {
    // Global variable
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
    },
    // Importing eslint-config
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    overrides: [],
    // JavaScript parser version
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    // Importing rules, it need to be set according to the following rules
    plugins: ['react', 'react-hooks'],
    // Set rules
    rules: {
        'react/jsx-uses-react': 'error',
        'no-unused-vars': 'warn',
        'react-hooks/exhaustive-deps': 'warn', // check effect deps
    },
    // React version need to specified in eslint-plugin-react settings
    settings: {
        react: {
            version: 'detect',
        },
    },
};
