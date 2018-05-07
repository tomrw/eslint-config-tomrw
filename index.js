module.exports = {
	'rules': {
		'indent': [
			2,
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'quotes': [
			2,
			'single'
		],
		'linebreak-style': [
			2,
			'unix'
		],
		'semi': [
			2,
			'always'
		],
		'eol-last': 2,
		'newline-after-var': [
			2,
			'always'
		],
		'vars-on-top': 2,
		'no-unused-vars': 2,
		'no-console': 1,
		'no-alert': 2,
		'no-multi-spaces': 2,
		'no-multiple-empty-lines': [
			2,
			{
				'max': 1
			}
		],
		'space-infix-ops': 2,
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'comma-dangle': 'error',
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/jsx-curly-spacing': 'always',
		'react/prop-types': 2,
		'react/jsx-closing-tag-location': 2,
		'react/jsx-closing-bracket-location': [ 'error', 'after-props' ],
		'react/jsx-curly-spacing': [
			'error',
			'always',
			{
				allowMultiline: false
			}
		],
		'react/jsx-equals-spacing': [ 'error', 'never' ],
		'react/jsx-no-undef': 2,
		'react/jsx-tag-spacing': [ 'error',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'never',
			}
		],
		'jsx-quotes': [
			'error',
			'prefer-double'
		],
		'template-curly-spacing': [ 'error', 'always' ],
		'prefer-const': 2,
		'space-before-function-paren': [
			'error', {
				'anonymous': 'always',
				'named':
				'never'
			}
		],
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'array-bracket-spacing': [ 'error', 'always' ],

		'import/no-unresolved': [
			2, {}
		],
		'import/named': 2,
		'import/namespace': 2,
		'import/default': 2,
		'import/export': 2
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true,
			'experimentalObjectRestSpread': true
		}
	},
	'extends': [
		'eslint:recommended'
	],
	'plugins': [
		'react',
		'import'
	],
	'env': {
		'browser': true,
		'node': true,
		'es6': true,
		'jest': true
	},
	'settings': {
		'react': {
			'pragma': 'React',
			'version': '15.0'
		}
	}
}
