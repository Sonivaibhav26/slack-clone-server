import Sequelize from 'sequelize';

const sequelize = new Sequelize('slack', 'vaibhav', 'vaibhav', {
    dialect: 'postgres',
    define: {
        underscored: true
    }
});
const models = {
    User: sequelize.import('./user'),
    Team: sequelize.import('./team'),
    // Member: sequelize.import('./member'),
    Channel: sequelize.import('./channel'),
    Message: sequelize.import('./message')
};

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;