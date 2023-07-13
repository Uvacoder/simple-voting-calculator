function checkEligibility() {
    const ageInput = document.getElementById("age");
    const age = parseInt(ageInput.value);
  
    const result = document.getElementById("result");
  
    if (ageInput.value == ""){
        result.textContent = "Please Input Age First"
    }
    else if (age >= 18) {
      result.textContent = "You are eligible to vote.";
      result.style.color = "#43A047";
    } else {
      result.textContent = "You are not eligible to vote yet.";
      result.style.color = "#E53935";
    }
  }
  