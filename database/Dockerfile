FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY ./database /src/app/database
COPY ./package.json /src/app

RUN npm install

EXPOSE 3002

CMD ["npm", "run", "seed-db"]