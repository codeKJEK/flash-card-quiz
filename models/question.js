module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    exercise: DataTypes.INTEGER,
    question: DataTypes.STRING,
    code: DataTypes.STRING,
    label: DataTypes.STRING,
    answer: DataTypes.STRING,
    category: DataTypes.STRING,
    next: DataTypes.STRING
  });
  return Question;
};
