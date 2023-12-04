// Function for declining
document.querySelector('.btn.gray-btn').addEventListener('click', function() {
  alert("Registration declined. Sorry to see you go!");
  // You can also redirect to another page or perform other actions as needed
  window.close(); // Terminate the page
});

// Function for accepting
document.querySelector('.btn.red-btn').addEventListener('click', function() {
  alert("Thank you for accepting our terms!");
  // You can also display a thank you message or perform other actions
});
