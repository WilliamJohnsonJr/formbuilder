import $ from 'jquery';

var formData = $.ajax({
	url: 'http://json-data.herokuapp.com/forms',
	dataType: 'json',
	error: console.log("We have a problem.")
});

formData.then(function(data){
	// var optionString="";
	// var optionMaker = function(item){
	// 			return `<option value="${item.value}">${item.label}</option>`;
	// };
	data.forEach(function(object){
		if (object.type === "text" || object.type === "email" || object.type === "tel")
		{
			$(".form").append(`<i class="fa ${object.icon}" aria-hidden="true"></i><input id="${object.id}" type="${object.type}" placeholder="${object.label}">`)
		} else if (object.type ==="select"){
			$(".form").append(`<select id="${object.id}">${object.options.forEach(function(item){
				return `<option value="${item.value}">${item.label}</option>`;})}</select>`);
		}
	});
			


// object.options[1]

// formData.responseJSON[4]options

// var languages = [];
// 	formData.responseJSON[4]options.forEach(function(object){
// 		languages.push(object.label);
// 	});

// 	languages.forEach(function(item){
// 		$("#languages").append("<option value=languages[count]>")

// 	document.getElementById("user-language") = `<input id="${formData.responseJSON[4].id}" type="${formData.responseJSON[4].type}" placeholder="${formData.responseJSON[4].label}" list="languages">`;
// 	// var datalistLangs = $("#languages").html()
// 	// formData.responseJSON[4].options.forEach(function(object){



// 	// }));
});