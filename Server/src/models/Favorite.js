const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.STRING,
        // allowNull: false,
         primaryKey: true,
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false,
         unique: true

      },
      status:{
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull:false
      },
      species: {
         type: DataTypes.ENUM(
            'Human', 
            'Humanoid', 
            'Alien', 
            'Animal', 
            'Robot', 
            'Disease', 
            'Parasite',
            'Crononberg',
            'Mythological Creature',
            'Poopybutthole',
            'unknown'),
         defaultValue: 'unknown',
         allowNull:false
      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false,
         defaultValue:'unknown'
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         //allowNull: false,
         unique:true
      },
   }, { timestamps: false });
};