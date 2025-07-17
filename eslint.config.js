import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    overrides: {
      'ts/consistent-type-imports': 'off',
      'ts/no-explicit-any': 'error',
    },
  },
  react: true,
  lessOpinionated: true,
})
