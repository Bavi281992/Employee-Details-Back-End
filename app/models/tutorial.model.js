module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    employeeNumber: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    department: {
      type: Sequelize.STRING
    },
    designation: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.STRING
    },
    contactNumber: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
    
  });

  return Tutorial;
};
