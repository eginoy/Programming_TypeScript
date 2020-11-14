FROM node:15.1.0-buster

RUN apt update && \
    apt install yarn -y && \
    yarn add -y typescript@latest tslint @types/node tsc