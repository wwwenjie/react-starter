// eslint-disable-next-line functional/immutable-data
module.exports = {
  '**/*.{ts,tsx,md,css,html,json}': 'prettier --check',
  '**/*.css': 'stylelint',
  'src/**/*.{ts,tsx}': 'eslint',
  '{**/*.md,src/**/**}': 'cspell',
  '**/*.{ts,tsx}': () => 'tsc -p tsconfig.json',
}
