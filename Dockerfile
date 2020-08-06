FROM node:10.13-alpine

WORKDIR /usr/src/app
COPY . .
RUN npm install 
EXPOSE 4200
CMD npm start