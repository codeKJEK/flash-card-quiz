// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
var Handlebars = require("handlebars");
var {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");

// Requiring passport as we\"ve configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user\"s login status
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
      category: "string_methods",
      next: "/members/string_methods/2",
      maxlength: 11,
      width: "width:66px"
    });
    db.Question.create({
      exercise: 2,
      question: "Find the index of \"locate\" within the \"str\" variable.",
      code: "var str= \"Please locate where \"locate\" occurs!\"",
      label: "var position = ",
      answer: "str.indexOf(\"locate\");",
      category: "string_methods",
      next: "/members/string_methods/3",
      maxlength: 22,
      width: "width:125px"
    });
    db.Question.create({
      exercise: 3,
      question: "Slice \"Banana\" from the \"str\" variable",
      code: "var str= \"Apple, Banana, Kiwi\";",
      label: "var results = ",
      answer: "str.slice(7,13);",
      category: "string_methods",
      next: "/members/string_methods/4",
      maxlength: 16,
      width: "width:87px"
    });
    db.Question.create({
      exercise: 4,
      question: "Replace \"Hello\" with \"Goodbye\" in the \"str\" variable.",
      code: "var str =\"Hello World\";",
      label: "var newStr = ",
      answer: "str.replace(\"Hello\",\"Goodbye\");",
      category: "string_methods",
      next: "/members/string_methods/5",
      maxlength: 31,
      width: "width:180px"
    });
    db.Question.create({
      exercise: 5,
      question: "Convert the \"str\" variable into all uppercase letters.",
      code: "var str= \"hello world\"",
      label: "var uppercaseStr = ",
      answer: "str.toUpperCase();",
      category: "string_methods",
      next: "/members/string_methods/6",
      maxlength: 18,
      width: "width:111px"
    });
    db.Question.create({
      exercise: 6,
      question: "Convert the \"str\" variable into all lowercase letters.",
      code: "var str = \"HELLO WORLD\";",
      label: "var lowercaseStr = ",
      answer: "str.toLowerCase();",
      category: "string_methods",
      next: "/members/string_methods/7",
      maxlength: 18,
      width: "width:111px"
    });
    db.Question.create({
      exercise: 7,
      question: "Find the character at index 0 in the \"str\" variable",
      code: "var str =\"Hello World\";",
      label: "var indexZero = ",
      answer: "str.charAt(0);",
      category: "string_methods",
      next: "/members/string_methods/8",
      maxlength: 14,
      width: "width:85px"
    });
    db.Question.create({
      exercise: 8,
      question: "Convert the \"str\" variable into an array using the \",\".",
      code: "var str = \"a,b,c,d,e,f,g,h\";",
      label: "var strArray = ",
      answer: "str.split(\",\");",
      category: "string_methods",
      next: "/members/number_methods/1",
      maxlength: 15,
      width: "width:75px"
    });
    // NUMBER ============================
    db.Question.create({
      exercise: 1,
      question: "Convert the \"num\" variable into a string.",
      code: "var num = 123;",
      label: "var numString = ",
      answer: "num.toString();",
      category: "number_methods",
      next: "/members/number_methods/2",
      maxlength: 15,
      width: "width:97px"
    });
    db.Question.create({
      exercise: 2,
      question: "Give the \"num\" variable a fixed amount of 2 decimal places.",
      code: "var num = 9.656;",
      label: "var fixedNum = ",
      answer: "num.toFixed(2);",
      category: "number_methods",
      next: "/members/number_methods/3",
      maxlength: 15,
      width: "width:100px"
    });
    db.Question.create({
      exercise: 3,
      question: "Parse the \"txt\" variable and convert it to a number.",
      code: "var txt = \"10\";",
      label: "var num = ",
      answer: "parseInt(txt);",
      category: "number_methods",
      next: "/members/array_methods/1",
      maxlength: 14,
      width: "width:80px"
    });
    // ARRAY ============================
    db.Question.create({
      exercise: 1,
      question:
        "use the correct array method to remove the last item of the fruits array",
      code: "var fruits = [\"Banana\",\"Orange\",\"Apple\"];",
      label: null,
      answer: "fruits.pop();",
      category: "array_methods",
      next: "/members/array_methods/2",
      maxlength: 13,
      width: "width:75px"
    });
    db.Question.create({
      exercise: 2,
      question: "Convert the \"fruits\" variable to a string",
      code: "var fruits =[\"Banana\",\"Orange\",\"Apple\", \"Mango\"];",
      label: "var fruitString = ",
      answer: "fruits.toString();",
      category: "array_methods",
      next: "/members/array_methods/3",
      maxlength: 18,
      width: "width:100px"
    });
    db.Question.create({
      exercise: 3,
      question:
        "use the correct Array method to sort the fruits array alphabetically",
      code: "var fruits =[\"Banana\",\"Orange\",\"Apple\", \"Kiwi\"];",
      label: null,
      answer: "fruits.sort();",
      category: "array_methods",
      next: "/members/array_methods/4",
      maxlength: 14,
      width: "width:72px"
    });
    db.Question.create({
      exercise: 4,
      question: "Concatenate \"array1\" and \"array2\"",
      code:
        "var array1 = [\"Cecilie\", \"Lone\"];<br>var array2 = [\"Emil\", \"Tobias\", \"Linus\"];",
      label: "bothArrays = ",
      answer: "array1.concat(array2);",
      category: "array_methods",
      next: "/members/array_methods/5",
      maxlength: 22,
      width: "width:134px"
    });
    db.Question.create({
      exercise: 5,
      question: "Get the value \"Volvo\" from the cars array",
      code: "var cars = [\"Saab\", \"Volvo\", \"BMW\"];",
      label: "var x = ",
      answer: "cars[1];",
      category: "array_methods",
      next: "/members/array_methods/6",
      maxlength: 16,
      width: "width:50px"
    });
    db.Question.create({
      exercise: 6,
      question: "Change the first item of cars to \"Ford\"",
      code: "var cars = [\"Volvo\", \"Jeep\", \"Mercedes\"];",
      label: "-------- = \"Ford\";",
      answer: "cars[0]",
      category: "array_methods",
      next: "/members/array_methods/7",
      maxlength: 7,
      width: "width:48px"
    });
    db.Question.create({
      exercise: 7,
      question:
        "Alert the number of items in an array, using the correct Array method",
      code: "var cars = [\"Volvo\",\"Jeep\",\"Mercedes\"];",
      label: "alert(------------------);",
      answer: "cars.length",
      category: "array_methods",
      next: "/members",
      maxlength: 11,
      width: "width:75px"
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
