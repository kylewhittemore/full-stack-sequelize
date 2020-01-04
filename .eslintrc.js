// =====================================================
//    The Eslint configuration below can be adjusted to 
//  suit your needs.  Please visit the ESLint website at
//  https://eslint.org/docs/user-guide/configuring for 
//  information on how to do so.  The configuration is 
//  set to use the Airbnb style recommendations.
// =====================================================

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": "off"
  },
};
