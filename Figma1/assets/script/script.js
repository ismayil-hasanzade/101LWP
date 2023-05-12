const contact_button = document.querySelector(".contact_button");
const container = document.querySelector(".container");
const digitalbutton = document.querySelectorAll("digitalbutton");
const digitaldiv = document.querySelector(".digitaldiv");
contact_button.addEventListener("click", () => {
  container.classList.toggle("change");
});
// digitalbutton.addEventListener("click", () => {
//   digitaldiv.classList.toggle("change");
// });

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!container.contains(target)) {
    container.classList.remove("change");
  }
  if (!digitaldiv.contains(target)) {
    digitaldiv.classList.remove("change");
  }
});

// for (let i = 0; i < digitaldiv.children.length; i++) {
//   digitaldiv.children[i].children[0].children[1].addEventListener(
//     "click",
//     () => {
//       digitaldiv.classList.toggle("change");

//     }
//   );
// }
digitalbutton.forEach((button) => {
  console.log(button);
});
