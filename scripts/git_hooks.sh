#!/bin/bash

base=$(cd `dirname $0`; pwd)
root=$(cd `dirname $base`; pwd)
echo $root

export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1

cd $root
rm .husky/commit-msg
rm .husky/pre-commit
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit ""'
npx husky add .husky/pre-commit 'npx lint-staged'