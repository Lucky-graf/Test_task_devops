bash env_var.sh
cd client
npm install
npm build
cd ../server/
npm install
cd ..
docker-compose up -d --build
