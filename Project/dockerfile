FROM node:12

WORKDIR /usr/src/app

#COPY package*.json ./
COPY package.json .

RUN npm install

COPY . .

EXPOSE 6379

CMD [ "npm", "start" ]