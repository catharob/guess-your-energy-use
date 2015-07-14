function sendToSheet(){
	var heat = $('#heating').val();
	var cool = $('#cooling').val();
	var oth = $('#other').val();

		$.ajax({
			url:"https://docs.google.com/forms/d/1gJrn9HYwsRc8qivrYDeXtGwOmIsdVFAtu8tXda3Gjq4/formResponse",
			data: {
				"entry.1567015658": heat,
				"entry.1939086220": cool,
				"entry.1407585385": oth
			},
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function (){
					window.location.replace("thankyou.html");
				},
				200: function (){
					window.location.replace("thankyou.html");
				}
			}
		});
}