# Stage 1

FROM tiangolo/node-frontend:10 as build-stage

RUN mkdir /app

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build

# Stage 2

FROM nginx:1.19.10-alpine

COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf