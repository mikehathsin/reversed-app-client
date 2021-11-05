# Reversed App - Client

## How to run it?

- Install dependencies with

  `yarn`

  or

  `npm install`

- then run the project with

  `yarn start`

## How do I run the tests?

- With the dependencies installed run

  `yarn test`

  or

  `npm test`

## Is there support for docker?

- Of course. Build the image with

  `docker build . -t mikehathsin/reversed-app-client`

- and then

  `docker run -p 3000:3000 -d mikehathsin/reversed-app-client`
