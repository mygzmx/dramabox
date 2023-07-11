module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:nuxt/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
  ],
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // ts每个函数都要显式声明返回值
    'import/prefer-default-export': 'off',
    'import/no-mutable-exports': 'off',
    'no-loop-func': 1,
    'no-nested-ternary': 0,
    'no-script-url': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'func-names': 0,
    'init-declarations': 0,
    'key-spacing': [0, { 'beforeColon': false, 'afterColon': true }],
    'id-match': 0,
    'arrow-parens': ['error', 'as-needed'],

    // ---------------------------
    'vue/no-unused-vars': 'warn',
    'no-multiple-empty-lines': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    camelcase: 'off',
    'space-before-blocks': 'off',
    'quote-props': "off",
    'vue/multi-word-component-names': "off",
    'object-property-newline': 'off',
    'object-curly-newline': 'off',
    'prefer-const': 'warn',
    eqeqeq: ['warn', 'always'],
    quotes: ['off', 'single', { allowTemplateLiterals: true }],
    'semi': [0, 'always'],
    'no-use-before-define': 'off',
    'no-void': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    'space-before-function-paren': 0,
    indent: [
      'error', 2, { SwitchCase: 1 }
    ],
    'array-bracket-spacing': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'eol-last': 'off',
    '@typescript-eslint/indent': [
      'error', 2
    ],
    "@typescript-eslint/no-explicit-any": ["off"],
    // typescript报错：Don‘t use `{}` as a type. `{}` actually means “any non-nullish value“.
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false
        }
      }
    ]

  }
}
