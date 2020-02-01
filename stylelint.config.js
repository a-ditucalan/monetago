module.exports = {
  ignoreFiles: [
    'src/stylesheets/vendors/**/*.scss',
    'src/stylesheets/utils/_functions.scss',
    'src/stylesheets/utils/_mixins.scss',
    'src/stylesheets/main.scss'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment', 'blockless-after-blockless'],
        ignoreAtRules: ['if', 'else']
      }
    ],
    'at-rule-name-space-after': 'always',
    'block-closing-brace-newline-after': 'always',
    'block-no-empty': true,
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always-single-line',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'font-family-no-duplicate-names': true,
    'font-weight-notation': 'numeric',
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': 'always',
    'function-name-case': 'lower',
    indentation: 2,
    'length-zero-no-unit': true,
    'max-empty-lines': [
      2,
      {
        ignore: ['comments']
      }
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
    'number-leading-zero': 'never',
    'property-case': 'lower',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-space-before': 'never',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'order/order': [
      'dollar-variables',
      {
        type: 'at-rule',
        name: 'extend'
      },
      'declarations',
      {
        type: 'rule',
        selector: /^&/,
        hasBlock: true
      },
      {
        type: 'rule',
        selector: /^&:\w/
      },
      {
        type: 'rule',
        selector: /^&:\w+$/
      },
      {
        type: 'rule',
        selector: /^&::[\w-]+$/
      },
      {
        type: 'at-rule'
      },
      {
        type: 'at-rule',
        hasBlock: true
      },
      'custom-properties'
    ],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      [
        {
          groupName: 'content',
          emptyLineBefore: 'always',
          properties: ['content']
        },
        {
          groupName: 'positioning',
          emptyLineBefore: 'always',
          properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index']
        },
        {
          groupName: 'display',
          emptyLineBefore: 'always',
          properties: [
            'display',
            'flex',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'flex-flow',
            'flex-direction',
            'flex-wrap',
            'justify-content',
            'align-content',
            'align-items',
            'order',
            'vertical-align',
            'float',
            'clear',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'overflow',
            'overflow-x',
            'overflow-y',
            'column-count',
            'column-width'
          ]
        },
        {
          groupName: 'typography',
          emptyLineBefore: 'always',
          properties: [
            'font-family',
            'font-size',
            'font-style',
            'font-weight',
            'letter-spacing',
            'line-height',
            'color',
            'text-align',
            'text-decoration',
            'text-indent',
            'text-overflow',
            'text-rendering',
            'text-shadow',
            'text-transform',
            'word-spacing',
            'word-break',
            'white-space',
            'hyphens',
            'list-style-type',
            'list-style-position',
            'list-style-image'
          ]
        },
        {
          groupName: 'visuals',
          emptyLineBefore: 'always',
          properties: [
            'background-attachment',
            'background-color',
            'background-image',
            'background-position',
            'background-repeat',
            'background-size',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-color',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style',
            'border-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-top-left-radius',
            'border-image',
            'border-collapse',
            'border-spacing',
            'outline',
            'outline-offset',
            'box-shadow',
            'background-clip'
          ]
        },
        {
          groupName: 'misc',
          emptyLineBefore: 'always',
          properties: [
            'opacity',
            'visibility',
            'cursor',
            'pointer-events',
            'user-select',
            'direction',
            'backface-visibility',
            'filter',
            'transition',
            'transition-property',
            'transition-duration',
            'transition-timing-function',
            'transition-delay',
            'transform',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-fill-mode',
            'animation-play-state'
          ]
        }
      ],
      {
        unspecified: 'bottom',
        emptyLineBeforeUnspecified: 'always'
      }
    ]
  }
};
