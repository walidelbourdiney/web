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

class Person {
  constructor(name, age, job, hobbies) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.hobbies = hobbies;
  }
  introduction = function () {
    console.log(
      `My name is ${this.name}, I'm a ${
        this.job
      }, and my hobbies are ${this.hobbies.join(", ")}.`
    );
  };
}

const Ali = new Person("Ali", 32, "engineer", ["sports", "reding", "drawing"]);

console.log(Ali.introduction());
