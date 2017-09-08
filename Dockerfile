FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

#VOLUME /usr/src/app
EXPOSE 3000

RUN ls -ltr /usr/src/app
CMD [ "node", "." ]