export default {
  '**/*.css': 'stylelint',
  '**/*': 'eslint',
  '**/*.{ts,tsx}': () => 'tsc -p tsconfig.json',
}
