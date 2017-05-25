# create a file named Dockerfile
FROM node:latest
RUN mkdir /app
WORKDIR /app

ADD package.json ./
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm","run","debug"]