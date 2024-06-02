#!/usr/bin/env bash

function minify {
  npx html-minifier \
    --config-file .htmlminifierrc.json \
    --output $1 \
    $1
}

for filename in `ls ./dist/iit-szg/browser`
do
  file="./dist/iit-szg/$filename"
  if [[ -d $file ]]; then
    minify "$file/index.html"
  fi
done
