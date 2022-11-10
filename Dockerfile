FROM node:16.18.0-alpine3.16

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm ci && npm cache clean --force
RUN npm install --global serve

COPY . .
RUN npm run build 

CMD [ "serve", "-s", "build" ]
