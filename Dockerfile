FROM node:18-alpine

WORKDIR app

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .
COPY src ./src

RUN yarn && yarn build

EXPOSE 3000 
ENV APP_ENV=development
ENV PORT=3000

CMD ["yarn", "start"]