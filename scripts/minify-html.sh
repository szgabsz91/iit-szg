#!/usr/bin/env bash

npx html-minifier \
  --config-file .htmlminifierrc.json \
  --output $1 \
  $1
