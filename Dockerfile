FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm install --production --silent
RUN npm install -g ts-node

ENTRYPOINT ["npm", "run", "dev"]