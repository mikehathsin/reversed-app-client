FROM node:12

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

RUN yarn global add serve

COPY ./ ./

EXPOSE 3000

RUN yarn build

CMD ["serve", "./build"]
