const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize();

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  age: DataTypes.INTEGER
});

export default User;

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();