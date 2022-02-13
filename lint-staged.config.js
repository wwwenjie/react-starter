module.exports = {
  '**/*.{ts,tsx,md,css,html,json}': 'prettier --check',
  '**/*.css': 'stylelint',
  'src/**/*.{ts,tsx}': 'eslint',
  '**/*.{ts,tsx}': () => 'tsc -p tsconfig.json',
}
