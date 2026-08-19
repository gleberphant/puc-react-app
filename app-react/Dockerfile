#esse conteiner é para buildar e rodar a aplicação react

FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .        

EXPOSE 3000

CMD ["npm", "start"]