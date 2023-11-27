const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

const weatherForm = document.querySelector("form");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = e.target.elements.message.value;
  socket.emit("sendMessage", message);
});
