(document).ready(function() {
  var fontsize = 12;
  $("#mytext").fontSize = fontsize
  $("div").onclick(function() {
    fontsize = fontsize + 3;
    $("#mytext").fontSize = fontsize;
  });
});
