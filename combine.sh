#!/bin/bash

output="all_files.txt"
> "$output"  

find . -type f | sort | while read -r file; do
  echo "--- $file ---" >> "$output"
  cat "$file" >> "$output"
  echo -e "\n" >> "$output"
done
