FROM ubuntu:latest
RUN apt-get update 
RUN apt install nodejs npm -y 
RUN npm install -g typescript -y  
RUN mkdir /app
WORKDIR /app
COPY ./server/ .
RUN npm install 
RUN npm run build
