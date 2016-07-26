import $ from 'jquery';

var formData = $.ajax({
	url: 'http://json-data.herokuapp.com/forms',
	dataType: 'json',
	error: console.log("We have a problem.")
});

var textInput = function (object) {
$("#mainForm").append(`
	<i class="fa ${object.icon}" aria-hidden="true"></i>
	<input id="${object.id}" type="${object.type}" placeholder="${object.label}">`);
};

var textAreaTag = function (object) {
	$("#mainForm").append(`
		<i class="fa ${object.icon}" aria-hidden="true"></i>
		<textarea id="commentsBox" placeholder="Your comment"></textarea>`);
};

var optionTag = function(object) {
	return `<option value="${object.value}">${object.label}</option>`;
};

var selectTag = function (object){
	$("#mainForm").append(`<select id="${object.id}">
		<option value="">Select Language...</option>${object.options.map(optionTag).join('')}</select>`)
};

formData.then(function(data){
	data.forEach(function(object){
		if (object.type ==="select"){
			selectTag(object);
		} else 
		if (object.type === "textarea") {
			textAreaTag(object);
		} else {
			textInput(object);
		}
	});
});