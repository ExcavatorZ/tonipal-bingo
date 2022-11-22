FROM node:16.18.0-alpine3.16

WORKDIR /usr/src/app

RUN npm install express cors pg

COPY . .
CMD [ "node", "server.js" ]
