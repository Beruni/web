#!/bin/bash -e

npm install
npm run build
cp ${NODE_ENV}.json dist/assets/${NODE_ENV}.json
