document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("signupForm");
  
    if (form) {
      form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission
  
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
  
        if (nameInput && emailInput) {
          var name = nameInput.value.trim();
          var email = emailInput.value.trim();
  
          // Perform validation - Example: check if fields are not empty
          if (name !== '' && email !== '') {
            // Here, you can perform further validation if needed
            
            // For simplicity, assuming the data is valid and proceed to redirect
            window.location.href = "thankyou.html";
          } else {
            // Handle validation errors (e.g., show an error message)
            // Example: alert("Please fill in all fields.");
            console.error("Please fill in all fields.");
          }
        } else {
          console.error("Form elements not found.");
        }
      });
    } else {
      console.error("Form not found.");
    }
  });
  