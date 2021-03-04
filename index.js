var axios = require('axios');
url = "http://quotes.stormconsultancy.co.uk/random.json";

function hndlbtnclick() {
  // fetch(url)
  //   .then((res) => res.json())
  //   .then(function (data) {
  //     var quotes = document.getElementById("p");
  //     var author = document.getElementById("h4");
  //     author.innerHTML = "Author - " + data.author;
  //     quotes.innerHTML = data.quote;
  //   });

  axios
    .get(url)
    .then(function (res) {
      // console.log(res);
      var author = document.getElementById("h4");
      var quotes = document.getElementById("p");
      author.innerHTML = "Author - " + res.data.author;
      quotes.innerHTML = res.data.quote;
    })
    .catch((err) => console.log(err));
}

document.getElementById("btn").addEventListener("click", hndlbtnclick);
