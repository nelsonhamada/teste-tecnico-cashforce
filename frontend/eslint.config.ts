import pluginJs from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin';
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {
   // ignores: ["**/*.spec.js"],
    files: ["**/*.{js,mjs,cjs,ts,vue}"]
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...pluginVue.configs["flat/essential"],
  
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  {
    plugins: {
      '@stylistic': stylistic
    },
    //ignores: ["*.spec.js"],
    rules: {
      '@stylistic/semi': ["error", "always"],
      "prefer-const": "error",
      "no-var": "error",
      "@typescript-eslint/no-explicit-any": "warn",
       //"one-var": "error",
     // "no-nested-ternary" : "error",
       /*"@typescript-eslint/naming-conventions": ["error",
          { selector: "function", format: ["camelCase"] },
       ],*/
      "new-cap": "error",
      "@typescript-eslint/no-dynamic-delete": "warn",
      "@typescript-eslint/no-require-imports": "warn",
    }
}
];


/* old 
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript/recommended', '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'javascript.validate.enable': 0
  }
};*/