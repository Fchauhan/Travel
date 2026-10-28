document.querySelector(".dropdown-toggle");
//for login page//
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email !== "" && password !== "") {
    document.getElementById("successMsg").classList.remove("d-none");

    // redirect after 2 seconds
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
});
