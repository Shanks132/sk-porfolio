let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;
function changeImage(direction) {
  const images = [
    "./img/p1image1.png",
    "./img/p1image2.png",
    "./img/p1image3.png",
  ]; // Array of image paths
  currentIndex1 = (currentIndex1 + direction) % images.length;
  document.getElementById("project-image1").src = images[currentIndex1];
}

function changeImage2(direction) {
  const images2 = [
    "./img/p2image1.png",
    "./img/p2image2.png",
    "./img/p2image3.png",
  ];
  currentIndex2 = (currentIndex2 + direction + images2.length) % images2.length;
  document.getElementById("project-image2").src = images2[currentIndex2];
}
function changeImage3(direction) {
  const images = [
    "./img/p3image1.png",
    "./img/p3image2.png",
    "./img/p3image3.png",
  ];
  currentIndex3 = (currentIndex3 + direction + images.length) % images.length;
  document.getElementById("project-image3").src = images[currentIndex3];
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("error-message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    errorMessage.textContent = "All fields are required.";
    return false; // Prevent form submission
  } else if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return false; // Prevent form submission
  }

  errorMessage.textContent = ""; // Clear any previous error message
  return true; // Allow form submission
}
function sendEmail(event) {
  event.preventDefault();
  if (validateForm()) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Construct the mailto URL
    const subject = encodeURIComponent("Contact Form Submission from " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\nMessage: " + message
    );
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open the default email client
    window.location.href = mailtoLink;
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "All fields are required.";
  }
}


