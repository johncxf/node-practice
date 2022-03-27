/**
 * @file: eslint config
 * @author: john
 * @date: 2022-03-27 
 */
module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-console': 'error',
        'no-var': 'warn',
        'eqeqeq': 'warn',
        'max-len': ['warn', { code: 120, tabWidth: 4, ignoreUrls: true, ignoreRegExpLiterals: true }],
    }
}
