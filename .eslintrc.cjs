/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true,
  },
  plugins: ['prettier'],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // 'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/ban-types': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'error',
    'space-before-function-paren': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
