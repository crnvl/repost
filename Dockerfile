FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm install --production --silent

ENTRYPOINT ["npm", "run", "dev"]