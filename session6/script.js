//-----------------ASYNC AWAIT ----------------
// use async await instead of .then()

// async function promiseHello() {
//   console.log("hello");
// }
// promiseHello().then((data) => console.log(data));

//------------- Activity 1 fetch data ------------------------
/*
function getUsers() {
  const url = "https://api.github.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getUsers();

*/
// more prefreable way|>
/*
async function getUsersAsync() {
  try {
    const url = "https://api.github.com/users";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getUsersAsync();
*/
//----------Activity 2--------- create list items dynamically and display

/*
function getUsers() {
  const url = "https://api.github.com/users";
  return fetch(url).then((response) => response.json());
}
// console.log(getUsers());//pending promise
// getUsers().then((data) => console.log(data));
// /*
function createListItem(text) {
  const element = document.createElement("li");
  element.innerText = text;

  document.body.append(element);
}
createListItem(`session 6`);

function addUserToDom() {
  const userPromise = getUsers();

  userPromise.then((dataArray) => {
    let modifiedArr = dataArray.map((item) => item.login);
    // console.log(modifiedArr);

    // calling the createListItem funciton 30 times.means for each arr element
    modifiedArr.forEach((element) => {
      createListItem(element);
    });
    // for (var i = 0; i < modifiedArr.length; i++) {//or like this calling for each element
    //   createListItem(modifiedArr[i]);
    // }
  });
}
addUserToDom();
// */

// Try to consvert above into Async Await

async function getUserAsync() {
  try {
    const url = "https://api.github.com/users";
    const response = await fetch(url);
    const data = response.json();
    return data; //pending promise
    // const data = await response.json(); // await works as .then block .
    // return data; //getting array of objects on cosole.log,but on return gives a promise;;
  } catch (error) {
    console.log(error);
  }
}

getUserAsync();

function createListItem(text) {
  const list = document.createElement("li");
  list.innerText = text;
  document.body.append(list);
}
createListItem("session-6");

function addUserToDom() {
  const promise = getUserAsync();
  promise.then((dataArray) => {
    let modifiedArr = dataArray.map((item) => item.login);
    // console.log(modifiedArr);
    modifiedArr.forEach((element) => {
      createListItem(element);
    });
  });
}
addUserToDom();
