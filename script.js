$(document).ready(function() {
  /*var fontsize = 120;
  $("#mytext").fontSize = fontsize
  $("div").onclick(function() {
    fontsize = fontsize + 3;
    $("#mytext").fontSize = fontsize;
    $("mytext").append("a");
  });
  
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(json => console.log(json))
  */
  // Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://random.dog/doggos', true);


request.onload = function () {
  doggos = JSON.parse(this.response);
  console.log(doggos);
  for (var i = 0; i < 3; i++) {
    var doggo = 'https://random.dog/' + doggos[Math.floor(Math.random() * doggos.length)]
    if (doggo.includes("mp4") || doggo.includes("gif")) {
        i--;
        continue;
    }
    var img = document.createElement("img");
    img.src = doggo 
    img.style.height = '300px';
    document.body.append(img);
  }
}

// Send request
request.send();
});
