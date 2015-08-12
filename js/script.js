

function sendToSheet(){
	var zip = $('#zipcode').val();
	var heat = $('#heating').val();
	var cool = $('#cooling').val();
	var oth = $('#other').val();

		$.ajax({
			url:"https://docs.google.com/forms/d/1wDbXZA2YjM4t6e12-TOZzX_1Yiccr77OzB50OEltBhs/formResponse",
			data: {
				"entry.607629145": zip,
				"entry.906479888": heat,
				"entry.1849920242": cool,
				"entry.465745042": oth
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
};

function showHeat(){
	var heatInput = document.getElementById("heating").value
	$('.heatPerc').animate({width: heatInput + "%"});
};

function showCool(){
	var coolInput = document.getElementById("cooling").value
	$('.coolPerc').animate({width: coolInput + '%'});
}

function showOther(){
	var othInput = document.getElementById("other").value
	$('.othPerc').animate({width: othInput + '%'});
}

function validateForm(){

}


