//using a constructor to build a framework for contact information called Contact.
//using a prototype which is a method called fullName to run a function to concat first and last name.


//business logic

//contact constructor
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//creating a prototype
Contact.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
}


// user interface
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName); // creating new contact using the constructor and passing in the Input values

		//.fullname() is a method that points to a prototype that runs a function for the contact
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

		$(".contact").last().click(function() {
		  $("#show-contact").show();
		  $("#show-contact h2").text(newContact.firstName);
		  $(".first-name").text(newContact.firstName);
		  $(".last-name").text(newContact.lastName);
		});

		$("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
