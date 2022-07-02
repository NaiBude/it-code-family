module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-colon-notation': null,
    'at-rule-no-unknown': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['line-width'],
      },
    ],
    'selector-class-pattern': null,
    'alpha-value-notation': null,
    'color-function-notation': null,
    'property-no-vendor-prefix': null,
  },
};
