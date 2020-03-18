// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
var {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");

// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
);
app.set("view engine", "handlebars");

// Requiring our routes
require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize
  .sync({ force: true })
  .then(() => {
    // STRING ============================
    db.Question.create({
      exercise: 1,
      question: "Find the length of  the \"str\" variable.",
      code: "var str = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"",
      label: "var strLength = ",
      answer: "str.length;",
      category: "String_Methods"
    });
    db.Question.create({
      exercise: 2,
      question: "Find the index of \"locate\" within the \"str\" variable.",
      code: "var str= \"Please locate where \"locate\" occurs!\"",
      label: "var position = ",
      answer: "str.indexOf(\"locate\");",
      category: "String_Methods"
    });
    db.Question.create({
      exercise: 3,
      question: "Slice \"Banana\" from the \"str\" variable",
      code: "var str= \"Apple, Banana, Kiwi\";",
      label: "var results = ",
      answer: "str.slice(7,13);",
      category: "String_Methods"
    });
    // NUMBER ============================
    db.Question.create({
      exercise: 1,
      question: "Convert the \"num\" variable into a string.",
      code: "var num = 123;",
      label: "var numString = ",
      answer: "num.toString();",
      category: "Number_Methods"
    });
    db.Question.create({
      exercise: 2,
      question: "Give the \"num\" variable a fixed amount of 2 decimal places.",
      code: "var num = 9.656;",
      label: "var fixedNum = ",
      answer: "num.toFixed(2);",
      category: "Number_Methods"
    });
    db.Question.create({
      exercise: 3,
      question: "Parse the \"txt\" variable and convert it to a number.",
      code: "var txt = \"10\";",
      label: "var num = ",
      answer: "parseInt(txt);",
      category: "Number_Methods"
    });
    // ARRAY ============================
    db.Question.create({
      exercise: 1,
      question:
        "use the correct array method to remove the last item of the fruits array",
      code: "var fruits = [\"Banana\",\"Orange\",\"Apple\"];",
      label: null,
      answer: "fruits.pop();",
      category: "Array_Methods"
    });
    db.Question.create({
      exercise: 2,
      question: "Convert the \"fruits\" variable to a string",
      code: "var fruits =[\"Banana\",\"Orange\",\"Apple\", \"Mango\"];",
      label: "var fruitString =",
      answer: "fruits.toString();",
      category: "Array_Methods"
    });
    db.Question.create({
      exercise: 3,
      question:
        "use the correct Array method to sort the fruits array alphabetically",
      code: "var fruits =[\"Banana\",\"Orange\",\"Apple\", \"Kiwi\"];",
      label: null,
      answer: "fruits.sort();",
      category: "Array_Methods"
    });
  })
  .then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
