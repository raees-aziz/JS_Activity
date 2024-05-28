console.log("connected");
let classes = document.querySelectorAll(".custom");
let passLengthInput = document.getElementById("passLength");
let result = document.getElementById("result");
let button = document.querySelector("button");
let clipboard = document.querySelector("#clipboard");
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "1234567890";
let symbol = '!@#$%^&*(){}[]",.<>/?';
let pass = "";

// copy text of password generated

// Function to generate a random password
button.addEventListener("click", () => {
  let passLength = parseInt(passLengthInput.value, 10);
  if (isNaN(passLength) || passLength <= 0) {
    result.textContent = "Invalid password length.";
    return;
  }

  let generatedPass = "";
  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * pass.length);
    generatedPass += pass[randomIndex];
  }

  result.textContent = generatedPass;
});

for (let i = 0; i < classes.length; i++) {
  classes[i].addEventListener("click", (event) => {
    let targetClasses = event.target.classList;
    if (targetClasses.contains("bg-red-500")) {
      targetClasses.remove("bg-red-500");
      targetClasses.add("bg-yellow-500");
    } else if (targetClasses.contains("bg-yellow-500")) {
      targetClasses.remove("bg-yellow-500");
      targetClasses.add("bg-red-500");
    }

    // Reset pass for recalculation
    pass = "";

    // Update pass based on the current state of the classes
    if (classes[0].classList.contains("bg-yellow-500")) {
      pass += alphabet;
    }
    if (classes[1].classList.contains("bg-yellow-500")) {
      pass += number;
    }
    if (classes[2].classList.contains("bg-yellow-500")) {
      pass += symbol;
    }
  });
}

clipboard.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(result.innerText);
    console.log("sdsdsd", result.innerText);
  } catch {
    console.log(err);
  }
});
