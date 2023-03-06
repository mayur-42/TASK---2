// Get the form and input elements
const form = document.getElementById("surveyForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

// Add event listener to the form for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  // Validate the name input
  const nameValue = nameInput.value.trim();
  if (nameValue === "") {
    alert("Name field cannot be empty");
    nameInput.focus();
    return false;
  }
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(nameValue)) {
    alert("Name field should contain characters only");
    nameInput.focus();
    return false;
  }
  
  // Validate the email input
  const emailValue = emailInput.value.trim();
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(emailValue)) {
    alert("Email field should contain a valid email address");
    emailInput.focus();
    return false;
  }
  
  // Validate the age input
  const ageValue = parseInt(ageInput.value);
  if (ageValue < 18 || ageValue > 100)
