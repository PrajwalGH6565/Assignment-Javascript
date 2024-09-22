function validatePassword(password) {
    let isValid = true;
    let errors = [];

    if (password.length < 8) {
        isValid = false;
        errors.push("At least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
        isValid = false;
        errors.push("At least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
        isValid = false;
        errors.push("At least one lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
        isValid = false;
        errors.push("At least one number");
    }
    if (!/[!@#$%^&*]/.test(password)) {
        isValid = false;
        errors.push("At least one special character");
    }

    if (isValid) {
        return "Password is strong";
    } else {
        return "Password is weak: " + errors.join(", ");
    }
}
