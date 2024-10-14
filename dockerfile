FROM node:20.17-alpine

WORKDIR /

COPY . .

RUN npm install --force

EXPOSE 8010