document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("multiStepForm");
  const formSteps = document.querySelectorAll(".form-step");
  const nextBtns = document.querySelectorAll(".next-btn");
  const backBtns = document.querySelectorAll(".back-btn");
  const sign_up = document.getElementById("sign-up")
  const profile = document.getElementById("profile")
  const greetingContainer = document.getElementById("greeting");
  let currentStep = 0;

  // Check if user is already logged in and display greeting if so
  if (isUserLoggedIn()) {
    displayGreeting();
    form.style.display = "none";
    sign_up.innerText = "Log out"
  } else {
    showStep(currentStep);
  }

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (validateStep(currentStep)) {
        saveFormData();  // Save data to localStorage
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  backBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentStep--;
      showStep(currentStep);
    });
  });

  function showStep(step) {
    formSteps.forEach((formStep, index) => {
      formStep.classList.toggle("active", index === step);
    });
  }

  function validateStep(step) {
    const inputs = formSteps[step].querySelectorAll("input");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        isValid = false;
        input.reportValidity();
      }
    });

    return isValid;
  }

  function saveFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    localStorage.setItem("formData", JSON.stringify({ name, email, age }));
  }

  function isUserLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
  }

  function displayGreeting() {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData && savedData.name) {
      greetingContainer.innerText = `Welcome back, ${savedData.name}!\nTime to start studying`;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateStep(currentStep)) {
      saveFormData();
      localStorage.setItem("isLoggedIn", "true"); // Set logged-in status
      displayGreeting();
      form.style.display = "none"; // Hide the form after login
      alert("Form submitted successfully!");
    }
  });

  sign_up.addEventListener("click", (event) => {
    if (isUserLoggedIn()) {
      localStorage.clear()
      form.style.display = "block";
    }
  });
});




function toggleFAQ(element) {
    const answer = element.nextElementSibling;

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}


