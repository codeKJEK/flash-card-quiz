$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});

// const htmlBtn = $(".html-box");
const jsBtn = $(".js-box");
// const cssBtn = $("css-box");

jsBtn.on("click", function() {
  console.log("clicked");

  jsBtn.toggleClass("box-clicked");
});
