//business logic


// contact constructor
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}


// user interface
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName); // creating new contact using the constructor and passing in the Input values

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

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
