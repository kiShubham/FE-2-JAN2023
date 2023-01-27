// setTimeout(() => {
//   console.log("20");
// }, 5000);
// console.log("30");

// -----------activity 1-----------------------
/*
function show(name) {
  console.log("hello " + name + "!");
}
// setTimeout(show("shubham"), 5000); //this is coming instantly because ths is wrong
// as console.log(show("shubham")) will give undiefined
console.log(show("m")); // m , undefined.

setTimeout(() => {
  show("singh");
}, 5000);
//this is right code properly taking time
*/

//-------------Activity ------------------
/*
console.log("Greetings Start"); // 1

function showGreeting(name) {
  console.log("Hello " + name + "!"); // 2
}

console.log("Greeting Rohan"); // 3
setTimeout(() => showGreeting("Rohan"), 5000); //2

setTimeout(showGreeting("gohan"), 5000); //4

console.log("Greetings End"); // 5

*/
// order of print => 1 , 3 , 4 , 5 , 2
/*

Greetings Start 
Greeting Rohan 
Hello gohan! 
Greetings End 
Hello Rohan! 

*/
//------- --- - - - PROMISES and FETCH api - -- - - ------------------

/*
const data = fetch("https://api.kanye.rest/")
  .then(function(res) {
    return res.json();
  })
  .catch(function (err) {
    throw new Error(err);
  });

data.then((res) => console.log(res));
*/

/*
const url = "https://api.kanye.rest/";
const dataPromise = fetch(url);
// console.log(dataPromise); //object

dataPromise
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data, "play with data");
  });

*/
/*
fetch("https://api.kanye.rest/")
  .then((response) => response.json())
  .then((data) => console.log(data));
// */
/*
fetch("https://api.kanye.orest/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error)); //TypeError: Failed to fetch
// */

// ----------Activity -----------------------
/*
function fetchQuote(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data)); //return likhne ki jarurat nhi h
  // .catch((error) => console.log(error));
}
fetchQuote("https://api.kanye.rest/");
*/
/*
function fetchQuote() {
  const url = "https://api.kanyes.rest/";
  const dataPromise = fetch(url);
  return dataPromise.then((response) => response.json());
  // return dataPromise.then((data) => console.log(data));
  //returning a promise.
}
// console.log(fetchQuote());
*/
/*
function addQuoteToDOM(quoteData) {
  const { quote } = quoteData;
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `<div> <strong>${quote}</strong> </div>`;
  document.body.append(paragraph);
}

addQuoteToDOM({ quote: "heey there" });
*/
