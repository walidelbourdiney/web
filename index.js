"use strict";

// const form = document.querySelector("form"); // The form element

// const submitButton = document.querySelector(".submit"); // The button element
// const image = document.getElementById("pokemonimg");
// const inputName = document.getElementById("name"); // The input element

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevents the page from refreshing on form submission
//   const pokemonName = inputName.value.toLowerCase();
//   getPokemon(pokemonName);
// });

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch Data");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.weight))
//   .catch((error) => console.error(error));

// async function getPokemon(name) {
//   try {
//     // Example usage
//     // Gets the value from the input field
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     if (!response.ok) {
//       throw new Error("could not find resource");
//     }
//     const data = await response.json();

//     image.src = data.sprites.front_default;
//     image.style.display = "block";
//   } catch (error) {
//     console.error(error);
//   }
// }

// let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// let password = "";

// for (let i = 0; i < 8; i++) {
//   let randomIndex = Math.floor(Math.random() * chars.length);
//   password += chars[randomIndex];
// }

// console.log(password);

// Guessing Game
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + 1);
// console.log(answer);
// let attempts = 0;
// let running = true;

// while (running) {
//   let guess = window.prompt("Guess a number between 1 and 100.");
//   guess = Number(guess);
//   if (isNaN(guess)) {
//     alert("Please insert a valid number!");
//   } else if (guess < minNum || guess > maxNum) {
//     alert("Please insert a valid number!");
//   } else {
//     if (guess > answer) {
//       attempts++;
//       alert("The number you have inserted is too high!");
//     } else if (guess < answer) {
//       attempts++;
//       alert("The number you have inserted is too low!");
//     } else {
//       alert(`Congratulations! you have done it after ${attempts} attempts.`);
//       running = false;
//     }
//   }
// }

// function Person(name, age, job, hobbies) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.hobbies = hobbies;
//   this.introduction = function () {
//     console.log(
//       `My name is ${this.name}, I'm a ${
//         this.job
//       }, and my hobbies are ${this.hobbies.join(", ")}.`
//     );
//   };
// }

// const Ali = new Person("Ali", 32, "engineer", ["sports", "reding", "drawing"]);

// console.log(Ali.introduction());

// class Person {
//   constructor(name, age, job, hobbies) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.hobbies = hobbies;
//   }
//   introduction = function () {
//     console.log(
//       `My name is ${this.name}, I'm a ${
//         this.job
//       }, and my hobbies are ${this.hobbies.join(", ")}.`
//     );
//   };
// }

// const Ali = new Person("Ali", 32, "engineer", ["sports", "reding", "drawing"]);

// console.log(Ali.introduction());

// function setCounter() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//       console.log(count);
//     },
//     decrement: function () {
//       count--;
//       console.log(count);
//     },
//   };
// }

// const press = setCounter();

// const add = document.querySelector("#submit");
// const subtract = document.querySelector("#de-submit");

// add.addEventListener("click", press.increment);
// subtract.addEventListener("click", press.decrement);

// function setTaxes(tax) {
//   return function (amount) {
//     return amount + tax * amount;
//   };
// }

// const getTax = setTaxes(0.2);

// console.log(getTax(500));

// const dateComponents = new Date(2024, 11, 22, 15, 30, 0); // Year, Month (0-based), Day, Hour, Minute, Second
// console.log(dateComponents);
// const date = new Date();
// console.log(date.getTimezoneOffset());

// console.log(new Date().toLocaleDateString("en-US"));

// console.log(new Date().toLocaleTimeString("en-US"));

// little game with eventListner

const box = document.getElementById("box");
const amount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  console.log(event.key);

  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= amount;
        break;
      case "ArrowRight":
        x += amount;
        break;
      case "ArrowDown":
        y += amount;
        break;
      case "ArrowLeft":
        x -= amount;
        break;
    }
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
    box.style.backgroundColor = "yellow";
    box.innerText = "😲";
  }
});

document.addEventListener("keyup", (event) => {
  box.style.backgroundColor = "aquamarine";
  box.innerText = "😊";
});
