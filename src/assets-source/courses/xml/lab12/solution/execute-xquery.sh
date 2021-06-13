#!/usr/bin/env bash

java \
  -jar \
  mxquery.jar \
  --xquery11Mode \
  --updateMode \
  --updateFiles \
  --backupUpdates \
  --queryFile $1
