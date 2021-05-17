#!/bin/sh
if [ "$NODE_ENV" == "production" ] ; then
  # npx sequelize db:migrate
  npm run start
else
  npx sequelize db:migrate
  npm run start
fi
# echo ["$NODE_ENV"]