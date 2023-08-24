var string = "";
var buttons = document.querySelectorAll(".buttons");
var input = document.querySelector(".input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (error) {
        // Get the error message from the error object.
        var errorMessage = error.message;

        // Display the error message in the input field.
        alert(errorMessage);
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});
