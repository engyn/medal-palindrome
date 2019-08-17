module.exports = {
  'package.json': ['yarn format:package-json', 'git add'],
  LICENSE: ['prettier --write', 'git add'],
  '**/*.{gql,graphql,html,json,less,md,mdx,vue,yaml,yml}': [
    'prettier --write',
    'git add',
  ],
  '**/*.{js,jsx,ts,tsx}': [
    'import-sort --write',
    'prettier --write',
    "eslint --ext '.js,.jsx,.ts,.tsx' --fix",
    'stylelint --fix',
    'git add',
  ],
};
