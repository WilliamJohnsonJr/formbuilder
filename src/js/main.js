import $ from 'jquery';

var formData = $.ajax({
	url: 'http://json-data.herokuapp.com/forms',
	dataType: 'json',
	error: console.log("We have a problem.")
});

formData.then(function(data){
	$(".container").append(`<datalist id="languages"></datalist>`);
	data.forEach(function(object){
		$(".form").append(`<i class="fa ${object.icon}" aria-hidden="true"></i><input id="${object.id}" type="${object.type}" placeholder="${object.label}">`)
	});
	console.log($(".form").html());
	// var datalistLangs = $("#languages").html()
	// formData.responseJSON[4].options.forEach(function(object){

	// }));
});