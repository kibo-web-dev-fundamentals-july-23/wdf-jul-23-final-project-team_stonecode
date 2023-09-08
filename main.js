document.addEventListener("DOMContentLoaded", function () {
    const displayInput = document.querySelector(".display .input");
    const displayOutput = document.querySelector(".display .output");
    const keys = document.querySelectorAll(".key");
    let currentInput = "";
    let currentOutput = "";
    keys.forEach((key) => {
      key.addEventListener("click", () => {
        const keyValue = key.dataset.key;
        if (keyValue === "=") {
          try {
            currentOutput = eval(currentInput);
            displayOutput.textContent = currentOutput;
          } catch (error) {
            currentOutput = "Error";
            displayOutput.textContent = currentOutput;
          }
        } else if (keyValue === "clear") {
          currentInput = "";
          currentOutput = "";
          displayInput.textContent = "";
          displayOutput.textContent = "";
        } else if (keyValue === "backspace") {
          currentInput = currentInput.slice(0, -1);
          displayInput.textContent = currentInput;
        } else {
          currentInput += keyValue;
          displayInput.textContent = currentInput;
        }
      });
    });
  });
  