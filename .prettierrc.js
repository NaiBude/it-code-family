module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  endOfLine: 'lf',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
  arrowParen: 'avoid',
  bracketSpacing: true,
  eslintIntegration: false,
  htmlWhitespaceSensitivity: 'ignore',
  jsxBracketSameLine: false,
};
