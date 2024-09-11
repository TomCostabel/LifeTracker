module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['off'],
    // Añade otras reglas según lo necesites
    'indent': ['error', 2], // Verifica la indentación
    'no-multiple-empty-lines': ['error', { max: 1 }], // Limita líneas vacías
    // 'max-len': ['error', { code: 160 }], // Limita el ancho de línea
    'no-trailing-spaces': 'error', // Espacios en blanco al final de la línea
    'comma-dangle': ['error', 'never'], // No permite comas al final de objetos o arrays
    'brace-style': ['error', '1tbs'] // Estilo de llaves
  }
};
