$(document).ready(function() {
  var fontsize = 120;
  $("#mytext").fontSize = fontsize
  $("div").onclick(function() {
    fontsize = fontsize + 3;
    $("#mytext").fontSize = fontsize;
    $("mytext").append("a");
  });
});
