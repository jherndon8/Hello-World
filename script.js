(document).ready(function() {
  var fontsize = 120;
  $("#mytext").fontSize = fontsize
  $("div").onclick(function() {
    fontsize = fontsize + 3;
    $("#mytext").fontSize = fontsize;
    $("mytext").append("a");
  });
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(json => console.log(json))
});
