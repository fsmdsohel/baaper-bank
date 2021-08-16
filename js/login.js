document.addEventListener("submit", function (event) {
  event.preventDefault();

  const userEmail = document.getElementById("email-address");
  const userPass = document.getElementById("password");

  if (
    userEmail.value == "fsmdsohelrana@gmail.com" &&
    userPass.value == "user@pass"
  ) {
    window.location.href = "bank.html";
  }
});
