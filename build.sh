#!/bin/bash
npm run build
git checkout gh-pages
rm *.*
rm -rf static/
mv build/* ./
rm -rf build
git add .
git commit -m 'build'
git push -f
git checkout master
