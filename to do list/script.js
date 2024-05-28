console.clear();
// assigning variable
let date = document.getElementById("date");
let list = document.getElementById("do");
let addList = document.getElementById("task");
let currentDate = new Date();
console.log(currentDate);

// Function for to do list
function myFunction() {
  console.log(currentDate);
  console.log(date.value);
  if (list.value === "") {
    alert("Add your to-do list");
  } else {
    if (date.value < currentDate.toISOString().split("T")[0]) {
      alert("Enter a correct date");
    } else {
      let newELe = document.createElement("li");
      newELe.innerHTML = `${list.value} <b>${date.value}</b><i id='delete' class="bi bi-trash3-fill"></i><i id='done' class="bi bi-check-lg"></i>`;
      // Appending
      addList.appendChild(newELe);
      newELe.querySelector("#delete").addEventListener("click", (event) => {
        event.target.parentElement.remove();
      });
      newELe.querySelector("#done").addEventListener("click", (event) => {
        event.target.parentElement.style.backgroundColor = "green";
      });
    }
  }
}
// for firebase database code

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   push,
//   set,
// } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// const firebaseConfig = {
//   // apiKey: "AIzaSyDOXlpTV66QDClgyq7zHjsZJF0xjfw94qI",
//   // authDomain: "first-web-ffc98.firebaseapp.com",
//   databaseURL: "https://first-web-ffc98-default-rtdb.firebaseio.com",
//   // projectId: "first-web-ffc98",
//   // storageBucket: "first-web-ffc98.appspot.com",
//   // messagingSenderId: "138504337115",
//   // appId: "1:138504337115:web:d01c574eed682228ecbefe",
//   // measurementId: "G-H70TQHM30G",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Create a reference to the Realtime Database
// const database = getDatabase(app);
// // const movies = ;
// set(ref(database, "movies"), {
//   work: newELe,
// });
