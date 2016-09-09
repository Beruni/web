#!/bin/bash

eval "$(docker-machine env default)"
heroku container:login
docker tag ${CUSTOM_ENVIRONMENT}web:v0.0.1 registry.heroku.com/${CUSTOM_ENVIRONMENT}beruni/web:build_${CI_BUILD_ID}
docker push registry.heroku.com/${CUSTOM_ENVIRONMENT}beruni/web:build_${CI_BUILD_ID}