module.exports = {
  extends: 'airbnb',
  plugins: ['import', 'react'],
  rules: {
    'import/no-unresolved': [2, { ignore: ['^\\.\\/.*\\.js$'] }],
  },
};