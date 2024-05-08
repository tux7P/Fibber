module.exports = {
    extends: [
      'plugin:chai-friendly/recommended',
      'plugin:eslint-comments/recommended',
      'prettier',
      'plugin:playwright/playwright-test',
    ],
    ignorePatterns: ['*.d.ts', '*.js', '.eslintrc.js'],
    parserOptions: {
      project: './tsconfig.json',
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts'],
        },
      },
    },
    rules: {
      'chai-friendly/no-unused-expressions': 'error',
      'unused-imports/no-unused-vars': 'error',
      'max-len': ['error', {'code': 120, 'ignoreComments': true, 'ignorePattern': '^import .*', 'ignoreStrings': true, 'ignoreTemplateLiterals': true}],
      'quotes': ['error', 'single', {'avoidEscape': true}],
      'playwright/no-skipped-test': 'off',
      'playwright/expect-expect': 'off', // Reason: validated within functions
      'filenames/match-regex': 'off',
      'import/order': 'off',
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          "accessibility": 'no-public'
        }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": [
            "objectLiteralProperty",
          ],
          "format": null,
        },
        {
          "selector": [
            "typeProperty",
            "classMethod",
            "objectLiteralMethod",
            "typeMethod",
            "accessor",
            "variable",
          ],
          "format": ["camelCase", "UPPER_CASE"],
        },
        {
          "selector": [
            "enumMember",
          ],
          "format": ["PascalCase"],
        },
        {
          "selector": "variable",
          "types": ["boolean"],
          "format": ["PascalCase", "UPPER_CASE"],
          "prefix": ["is", "should", "has", "can", "did", "will", "would", "was", "were", "does", "are", "from", "IS_", "SHOULD_", "HAS_", "CAN_", "DID_", "WILL_", "WOULD_", "WAS_", "WERE_", "DOES_", "ARE_", "FROM_"],
        },
        {
          "selector": "memberLike",
          "modifiers": ["private"],
          "format": ["camelCase"],
          "leadingUnderscore": "allow"
        },
      ]
    },
  };
  