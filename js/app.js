angular.module("myApp", [])
	.controller("myController", function() {
		this.submitForm = function() {
			alert("Username is " + this.username + "\nPassword is " + this.password);
		};
	});