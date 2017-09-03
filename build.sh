#!/bin/bash
git checkout gh-pages
git merge master -X theirs
npm install
npm run build
mkdir temp
mv -v ./* ./__temp__
rm -rf __temp__/
git add .
git commit -m 'build'
git push
git checkout master
