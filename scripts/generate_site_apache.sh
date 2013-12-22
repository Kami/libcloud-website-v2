#!/usr/bin/env bash

cd source
jekyll build

cd ..
rsync -vur --delete source/_site/* generated/
rm -rf source/_site
rm -rf _site
