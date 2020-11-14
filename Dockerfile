FROM node:15.1.0-buster

RUN apt update && \
    yarn add typescript tslint @types/node tsc
