"use strict";
// Select all buttons that show the modal (since there are multiple buttons with the same class)
const showModalButtons = document.querySelectorAll(".show-modal");

// Select the modal, close button, and overlay elements
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

showModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});
closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
