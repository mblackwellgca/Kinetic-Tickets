// const post = require('../views/layouts');
const exphbs = require('express-handlebars');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Config
const config = {
    type: 'doughnut',
    data: data,
  };

// Setup
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'Dataset 1',
    //   data: [300, 50, 100],
      data: DataTypes.STRING, //DataTypes.STRING used from models < post.js
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  