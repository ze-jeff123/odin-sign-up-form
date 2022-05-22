const submitButton = document.querySelector(".submit-button");
const form = document.querySelector("form");
submitButton.addEventListener ("click" , (e) => {
    if (form.reportValidity()) {
        form.submit();
    }
});

const passwordFields = document.querySelectorAll('[type="password"]');

function checkPasswordsSame() {
    return passwordFields[0].value === passwordFields[1].value;
}
passwordFields.forEach((passwordField) => {
    passwordField.addEventListener("input", (e) => {
        if (checkPasswordsSame() === false) {
            passwordFields.forEach((passwordField) => {
                passwordField.setCustomValidity("Passwords do not match");
            });
        } else {
            passwordFields.forEach((passwordField) => {
                passwordField.setCustomValidity("");
            });
        }
    });
});

