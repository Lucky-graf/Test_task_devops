#!/bin/bash

bash env_var.sh
cd client
npm install
yarn install
npm run build
cd ../server/
npm install
cd ..
docker-compose up -d --build
