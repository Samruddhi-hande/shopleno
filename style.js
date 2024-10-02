const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
 loginForm.style.marginLeft = "-50%";
 loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
 loginForm.style.marginLeft = "0%";
 loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
 signupBtn.click();
 return false;
});
let generatedOTP;

// Function to validate the phone number
function validatePhoneNumber(phoneInput) {
    return phoneInput.length === 10 && /^[6-9]\d{9}$/.test(phoneInput);
}

// Function to simulate sending OTP (replace with actual backend OTP sending logic)
function sendOTP() {
    const phoneInput = document.getElementById('phone').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const otpSection = document.getElementById('otpSection');

    // Validate the phone number
    if (validatePhoneNumber(phoneInput)) {
        errorMessage.style.display = 'none';

        // Simulate OTP generation (replace with actual OTP sending)
        generatedOTP = Math.floor(100000 + Math.random() * 900000); // Random 6-digit OTP
        alert('OTP sent: ' + generatedOTP); // For demo purposes, show OTP in alert

        // Show the OTP section
        otpSection.style.display = 'block';
        document.getElementById('loginButton').disabled = false;
    } else {
        errorMessage.style.display = 'block';
    }
}

// Function to validate the OTP and allow login
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    const otpInput = document.getElementById('otp').value.trim();
    const otpErrorMessage = document.getElementById('otpErrorMessage');
    
    // Validate OTP
    if (otpInput === generatedOTP.toString()) {
        alert('Login successful!');
        otpErrorMessage.style.display = 'none';
        // Proceed with form submission or further actions
    } else {
        otpErrorMessage.style.display = 'block';
    }
}
// import type { FormEvent } from "react"
