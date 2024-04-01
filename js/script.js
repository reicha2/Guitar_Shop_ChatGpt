// This is a sample script file, you can add your custom JavaScript code here

// Example code to show a confirmation message when a button is clicked
$(document).ready(function () {
    $(".btn-confirm").click(function () {
      if (confirm("Are you sure you want to proceed?")) {
        // User clicked "OK", perform desired action
        alert("Action performed!");
      } else {
        // User clicked "Cancel", do nothing
        alert("Action canceled!");
      }
    });
  });
  
  // Example code to handle form submission using AJAX
  $(document).ready(function () {
    $("#contactForm").submit(function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Get form data
      var formData = $(this).serialize();
  
      // Example AJAX call to handle form submission
      $.ajax({
        type: "POST",
        url: "submit_contact_form.php", // Specify the URL to handle form data
        data: formData,
        success: function (response) {
          // Handle successful form submission
          alert("Form submitted successfully!");
          // You can redirect or perform other actions here
        },
        error: function (xhr, status, error) {
          // Handle form submission errors
          console.error(status + ": " + error);
          alert("Error submitting form. Please try again.");
        },
      });
    });
  });
  
  // Add more custom JavaScript code as needed for your website
  