FROM node
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
EXPOSE 8080
RUN npm install
CMD [ "npm", "start" ] 