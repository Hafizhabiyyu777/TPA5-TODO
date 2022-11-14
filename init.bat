# inisiasi
npx sequelize-cli init
npm install --save sequelize
npm install sequelize mysql2

# buat database
npx sequelize-cli db:create

# membuat model (jika belum ada)
# npx sequelize model:create --name user --attributes username:string,password:string,email:string
# npx sequelize model:create --name todo --attributes title:string,desc:string,isCompleated:boolean,deadline:date

# migrasikan model ke database yang telah dibuat
npx db:migrate

# membuat file seeder
# npm sequelize seed:create --name demo-user
#  npx sequelize seed:create --name demo-todo