// script.js
function selectTemplate(template) {
    // Redirect to the template selection page or show a modal with the form
   // alert(`You selected the ${template} template!`);

    if (template == "url-android") {
        window.open("token.html", "_blank");

    }
    else {
        alert(` The ${template} is not available 🥲`);

    }
    // Here you can implement the logic to show the form dynamically
}