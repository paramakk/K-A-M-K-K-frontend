FROM node:12

ADD ./ frontend/

WORKDIR /frontend

RUN npm install

ENTRYPOINT npm start