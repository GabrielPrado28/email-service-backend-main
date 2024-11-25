import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Email from '../models/email';
import User from '../models/user';


const models = [Email, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
