"use strict";

const form = document.querySelector("form"); // The form element

const submitButton = document.querySelector(".submit"); // The button element
const image = document.getElementById("pokemonimg");
const inputName = document.getElementById("name"); // The input element

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the page from refreshing on form submission
  const pokemonName = inputName.value;
  getPokemon(pokemonName);
});

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch Data");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.weight))
//   .catch((error) => console.error(error));

async function getPokemon(name) {
  try {
    // Example usage
    // Gets the value from the input field
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error("could not find resource");
    }
    const data = await response.json();

    image.src = data.sprites.front_default;
    image.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
