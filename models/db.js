const Sequelize = require('sequelize');

const sequelize = new Sequelize('testedb', 'root', '2550',{
    host: 'localhost',
    dialect: 'mysql'
});
module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}
