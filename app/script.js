$(document).ready(function() {
    $("form").on("submit", function(event) {
        let password = $("#password").val();
        let confirmPassword = $("#password-confirm").val();

        if (password !== confirmPassword) {
            event.preventDefault();  // Prevent form submission
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        alert("Formulaire envoyé !");
    });
});