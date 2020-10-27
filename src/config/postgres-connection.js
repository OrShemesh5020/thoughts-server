const { Sequelize } = require("sequelize");
import dataBaseConfig from "./database-config";
// const { up } = require("sequelize");
//${process.env.POSTGRES_DATABASE}
// console.log("userName:", process.env.POSTGRES_USERNAME);

const sequelize = new Sequelize(dataBaseConfig);
// export { sequelize };

// };
// await.sql
// sequelize.query`select * from thougts_db.users`
// .then(() => {
//   console.log("success");
// })
// .catch((error) => {
//   console.log(error);
// });

// export default sequelize;

module.exports = { sequelize };
