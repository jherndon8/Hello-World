$(document).ready(function() {
  var fontsize = 12;
  $("#mytext").fontSize = fontsize
  $("#mytext").onclick(function() {
    fontsize = fontsize + 3;
    $(this).fontSize = fontsize;
  });
});
