const boxOne = $("#box1");
const boxTwo = $("#box2");
const boxThree = $("#box3");
const menuBtn = $(".logo");
const navToggle = $("#nav-toggle")

const Numlist = $(".Num-list");
const Strlist = $(".Str-list");
const Arrlist = $(".Arr-list");

$(document).ready(function() {
  $(".wrapper").hide();
});

// $(".logo").on("click", function() {
//   $(".bar").toggleClass("burgerOpen");
// });

menuBtn.on("click", function() {
  $(".wrapper").slideToggle(200, "swing");
});

$(".tray").on("click", function() {
  $(".wrapper").slideToggle(200, "swing");
  $(".fa-angle-double-down").toggle.attr("style", "transform: rotate(180deg)")
});

boxOne.on("click", function() {
  console.log("1 clicked!");
  Numlist.slideToggle(250, "swing");
  Strlist.slideUp(250, "swing");
  Arrlist.slideUp(250, "swing");
});

boxTwo.on("click", function() {
  console.log("2 clicked!");
  Strlist.slideToggle(250, "swing");
  Arrlist.slideUp(250, "swing");
  Numlist.slideUp(250, "swing");
});

boxThree.on("click", function() {
  console.log("3 clicked!");
  Arrlist.slideToggle(250, "swing");
  Numlist.slideUp(250, "swing");
  Strlist.slideUp(250, "swing");
});

// $("button").click(function(){
//     $("p").slideToggle(1000);
//   });
// });
