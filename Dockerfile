FROM node:10

ADD ./ frontend/

WORKDIR /frontend

RUN npm install

ENTRYPOINT npm start