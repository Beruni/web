#!/bin/bash -e

eval "$(docker-machine env default)"
cd deploy
docker build -f Dockerfile --tag ${CUSTOM_ENVIRONMENT}web:v0.0.1 ../