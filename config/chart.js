// const post = require('../views/layouts');
// const exphbs = require('express-handlebars');
const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const router = require("express").Router();
const { Comment, Post } = require("../../models");
// src="https://cdn.jsdelivr.net/npm/chart.js";
src="https://cdn.jsdelivr.net/npm/chart.js";

// Setup
const Comment = [
  'Unanswered',
  'Answered',
];

const data = {
  labels: Comment,
  datasets: [{
    label: 'Dataset Comments',
    data: [DataTypes.STRING], //DataTypes.STRING used from models < post.js
    // data: DataTypes.StringDataTypeConstructor[],
    backgroundColor: [
      'rgb(48, 71, 94)',
      'rgb(240, 84, 84)',
    ],
    hoverOffset: 8
  }]
};

// Config
const config = {
  type: 'doughnut',
  data: data,
  options: {}
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);