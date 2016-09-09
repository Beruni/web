#!/bin/bash -e

npm install
npm run build
cp staging.json dist/assets/staging.json
