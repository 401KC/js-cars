$(function() {
	// everything in here will wait until the page loads

	var x = 40;
	var y = 5;
	var b = x + y;

	var first_name = "shaun";
	var last_name = "russell";

	var full_name = first_name + last_name;

	// console.log(b, full_name);

	$("h1").css('fontSize', b).text(full_name);

	$.ajax('cars.json', {
		complete : function(response) {
			console.log(response);
		}
	});

});