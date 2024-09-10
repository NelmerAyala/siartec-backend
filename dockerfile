FROM node:22-alpine

WORKDIR /

COPY . .

RUN npm install --force

EXPOSE 8010