angular.module("myApp", [])
	.controller("myController1", function() {
		this.submitForm = function() {
			alert("Form 1:\nUsername is " + this.username1 + "\nPassword is " + this.password1);
		};
	})
	.controller("myController2", function() {
		this.submitForm = function() {
			alert("Form 2:\nUsername is " + this.username2 + "\nPassword is " + this.password2);
		};
	});