#!/bin/sh
set -e

pnpm run build

# SPA fallback so deep links (/me/work, /me/about) work on hard refresh
cp dist/index.html dist/404.html

# disable Jekyll processing on Pages
touch dist/.nojekyll

# push dist subtree to gh-pages branch
pnpm dlx gh-pages -d dist -b gh-pages --dotfiles

echo "Deployed to https://clayandgen.github.io/me/"
