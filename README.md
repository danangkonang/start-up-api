# First Template To Make Rest Api Using Express.js

```bash
# create migration
$ npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string,role:string,token:string,active:boolean

# running migration
$ npx sequelize-cli db:migrate

# create seeder
$ npx sequelize-cli seed:generate --name demo-user

# runing seeder
$ npx sequelize-cli db:seed:all

```
