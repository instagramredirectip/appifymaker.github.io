// script.js
function selectTemplate(template) {
    // Redirect to the template selection page or show a modal with the form
   // alert(`You selected the ${template} template!`);

    if (template == "url-android") {
        window.location.href = "https://forms.gle/FXa6B8eJc3yDxnLB6";

    }
    else {
        alert(` The ${template} is not available 🥲`);

    }
    // Here you can implement the logic to show the form dynamically
}
