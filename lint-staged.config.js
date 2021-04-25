// eslint-disable-next-line functional/immutable-data
module.exports = {
  '**/*.{ts,tsx,md,html,json}': 'prettier --check',
  'src/**/*.{ts,tsx}': 'eslint',
  '{README.md,.github/*.md,src/**/**}': 'cspell',
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
}
