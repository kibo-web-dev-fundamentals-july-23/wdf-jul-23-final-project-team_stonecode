document.addEventListener("DOMContentLoaded", function () {
  const displayInput = document.querySelector(".display .input");
  const displayOutput = document.querySelector(".display .output");
  const keys = document.querySelectorAll(".key");
  let currentInput = "";
  let currentOutput = "";

  function calculateExpression(expression) {
      // Replace percentage symbol with its decimal representation
      expression = expression.replace(/%/g, "/100");

      // Replace parentheses for multiplication
      expression = expression.replace(/\(/g, "*(");

      try {
          currentOutput = eval(expression);
          displayOutput.textContent = currentOutput;
      } catch (error) {
          currentOutput = "Error";
          displayOutput.textContent = currentOutput;
      }
  }

  keys.forEach((key) => {
      key.addEventListener("click", () => {
          const keyValue = key.dataset.key;
          if (keyValue === "=") {
              calculateExpression(currentInput);
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
