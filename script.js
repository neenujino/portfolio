let form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("msg");

  // Check if all fields are filled
  if (name === "" || email === "" || message === "") {
    msg.innerHTML = "Please fill all fields";
    msg.style.color = "red";
    return;
  }

  // Validate email format
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    msg.innerHTML = "Please enter a valid email address";
    msg.style.color = "red";
    return;
  }

  // Show success message
  msg.innerHTML = "Opening your email application...";
  msg.style.color = "green";

  // Replace with your email address
  let yourEmail = "neenujino2011@gmail.com";

  // Create mailto link
  let subject = "Portfolio Contact from " + name;
  let body =
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message;

  // Open email client
  window.location.href =
    "mailto:" + yourEmail +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  // Reset the form
  form.reset();
  msg.innerText="";
});