import $ from 'jquery';

var formData = $.ajax({
	url: 'http://json-data.herokuapp.com/forms',
	dataType: 'json',
	error: console.log("We have a problem.")
});

formData.then(function(data){
	data.forEach(function(object){
		if (object.type === "text" || object.type === "email" || object.type === "tel"){
			$("#mainForm").append(`<i class="fa ${object.icon}" aria-hidden="true"></i><input id="${object.id}" type="${object.type}" placeholder="${object.label}">`)
		} else if (object.type ==="select"){
			$("#mainForm").append(`<select id="${object.id}">${object.options.forEach(function(item){
				return `<option value="${item.value}">${item.label}</option>`;})}</select>`);
		} else if (object.type === "textarea") {
			$("#mainForm").append(`<i class="fa ${object.icon}" aria-hidden="true"></i> <textarea id="commentsBox" rows="5" cols="40" placeholder="Your comment"></textarea>`)
		}
	});
			
	// formData.responseJSON[4].options.forEach(function(object){
	// }));
});