const { Sequelize } = require("sequelize");
//${process.env.POSTGRES_DATABASE}
// console.log("userName:", process.env.POSTGRES_USERNAME);

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`,
  {
    logging: true,
  }
);

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
