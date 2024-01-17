const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  //   const valueData = formData.get(entries);
  const valueData = Object.fromEntries(formData.entries());
  document.body.appendChild("p");
});

let whatsTyped = document.createElement("p");
