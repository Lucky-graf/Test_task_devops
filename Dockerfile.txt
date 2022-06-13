FROM ubuntu/apache2:latest
COPY ./client/build/:/var/www/html
COPY ./apache2.conf:/etc/apache2/apache2.conf
