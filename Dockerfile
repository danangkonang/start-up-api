FROM node:14
# FROM node:latest

# RUN apt-get update && apt-get -y upgrade

# WORKDIR /usr/src/app
WORKDIR /app
 
COPY package*.json ./

RUN npm install -g npm
# RUN npx sequelize db:migrate
RUN npm install
 
COPY . .
 
EXPOSE 9000

# RUN chmod +x ./entrypoint.sh

# ENTRYPOINT ["/entrypoint.sh"]
# CMD ./entrypoint.sh
# CMD /bin/bash ./entrypoint.sh 127.0.0.1:3306

CMD [ "node", "app.js" ]
