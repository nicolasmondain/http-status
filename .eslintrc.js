module.exports = {

  root   : true,
  parser : '@typescript-eslint/parser',
  plugins: [

    '@typescript-eslint',

	],
  extends: [

    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
		'@nicolasmondain/eslint-config'

  ],
	parserOptions: {

		ecmaVersion: 2021,
		ecmaFeatures: {
			jsx: true
		},
		sourceType: "module"

	},

	env: {

		es2021: true,
		browser: true,
		node: true,
		mocha: true

	},

	globals: {

		document: "readonly",
		navigator: "readonly",
		window: "readonly"

	},

	rules: {}

};
