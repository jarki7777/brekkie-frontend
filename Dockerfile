FROM node:14.17.0-alpine3.10

WORKDIR /brekkie-frontend

ENV PATH /brekkie-frontend/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

COPY . ./brekkie-frontend

CMD ["npm", "start"]