#!/usr/bin/env bash

find . -type f -name "*.dot" | xargs dot -Tsvg -O
