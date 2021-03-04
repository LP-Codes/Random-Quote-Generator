url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";


function hndlbtnclick() {
  console.log("btnclkd");
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
      console.log(res);
      var author = document.getElementById("h4");
      var quotes = document.getElementById("p");
      author.innerHTML = "Author - " + res.data.author;
      quotes.innerHTML = res.data.message;
    })
    .catch((err) => console.log(err));
}

document.getElementById("btn").addEventListener("click", hndlbtnclick);
