#!/bin/bash -e

npm install
npm run build
cp deploy/${NODE_ENV}.json dist/assets/${NODE_ENV}.json
