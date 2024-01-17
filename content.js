(function () {
  var button = document.createElement("button");
  button.textContent = "Test";
  button.addEventListener("click", function () {
    alert("message");
  });

  document.body.appendChild(button);
})();
