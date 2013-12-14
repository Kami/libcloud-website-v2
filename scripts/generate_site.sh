#!/usr/bin/env bash

git checkout master
git pull origin master

cd source
jekyll build

git checkout gh-pages
cd ..
rsync -vur --delete source/_site/* .
rm -rf source/_site
rm -rf _site
git add .
git commit -m "Generate website"

git checkout master
