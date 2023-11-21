// script.js
var group1Password = "blessing1";
var group2Password = "threat2";
var group3Password = "balance3";

function togglePasswordVisibility() {
		var passwordInput = document.getElementById("password");
		var icon = document.getElementById("show-hide-icon");

		if (passwordInput.type === "password") {
				passwordInput.type = "text";
				icon.classList.remove("fa-eye-slash");
				icon.classList.add("fa-eye");
		} else {
				passwordInput.type = "password";
				icon.classList.remove("fa-eye");
				icon.classList.add("fa-eye-slash");
		}
}

function checkPassword() {
		var enteredPassword = document.getElementById("password").value;

		if (enteredPassword === group1Password) {
				showContent("group1-content");
		} else if (enteredPassword === group2Password) {
				showContent("group2-content");
		} else if (enteredPassword === group3Password) {
				showContent("group3-content");
		} else {
				alert("Incorrect password. Please try again.");
		}
}

function showContent(contentId) {
		document.getElementById("login-container").style.display = "none";
		document.getElementById("content").style.display = "block";

		document.getElementById("group1-content").style.display = "none";
		document.getElementById("group2-content").style.display = "none";
		document.getElementById("group3-content").style.display = "none";

		document.getElementById(contentId).style.display = "block";
}
