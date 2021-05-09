# Stage 1

FROM node:12-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# Stage 2

FROM nginx:1.19.10-alpine

ADD default.conf /etc/nginx/sites-enabled/default.conf
COPY --from=build-step /app/build /usr/share/nginx/html