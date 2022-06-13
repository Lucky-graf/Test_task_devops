#!/bin/bash

bash env_var.sh
cd client
yarn install
npm install 
npm run build
cd ../server/
npm install
cd ..
docker-compose up -d --build
