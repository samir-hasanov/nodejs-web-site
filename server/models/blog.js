const { DataTypes } = require("sequelize");

const sequelize = require("../data/db");

const Blog = sequelize.define("blog", {
  blogid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  header: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  footheader: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mainpage: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  allow: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  categoryid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

async function sync() {
  await Blog.sync({ force: true });
  console.log("Blog table add...");
}

sync();
module.exports = Blog;
