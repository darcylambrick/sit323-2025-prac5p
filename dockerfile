FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available
COPY package*.json ./

RUN npm install

# Bundle app source
COPY server.js .

EXPOSE 3000
CMD [ "node", "server.js"]