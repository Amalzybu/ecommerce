'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    let pass = await bcrypt.hash('password', salt);
    const password =  process.env.SEED_SUPERUSER_PASSWORD || 'defaultpassword';return queryInterface.bulkInsert('users', [{
      name:'amal',
      email: 'kolleriamal@gmail.com',
      password: pass,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
      
    }]);
  },down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('superuser', { email: 'admin@agenkan.com' }, {});
  }
};
