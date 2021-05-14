# First Template To Make Rest Api Using Express.js

```bash
# create migration
$ npx sequelize-cli model:generate --name user --attributes name:string,active:boolean

# running migration
$ npx sequelize-cli db:migrate

# delete migrations
$ npx sequelize-cli db:migrate:undo

# create seeder
$ npx sequelize-cli seed:generate --name demo-user

# runing seeder
$ npx sequelize-cli db:seed:all

# delete seeders
$ npx sequelize-cli db:seed:undo:all

```
phpmyadmin
http://localhost:9001/

api
http://localhost:9000/