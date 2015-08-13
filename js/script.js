

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
};

function showOther(){
	var othInput = document.getElementById("other").value
	$('.othPerc').animate({width: othInput + '%'});
};

$(document).ready(function(){
	$("#send").click(function(){
		$("#otherGuesses").removeClass("hidden");

	    $.ajax({
	        dataType: "json",
	        url: "https://spreadsheets.google.com/feeds/list/1bmZW4CyH390o5Fi4yydYZOPBZLnjc0tfx3EreKWKU1M/od6/public/basic?alt=json",
	        success:function(data){
	            var list = data;
	            var entry = data.feed.entry;
	            console.log(entry);

	            $.each(entry, function(index,item){
	                $('#otherGuesses').append("<h2>"+ item.title.$t +"</h2><p>" + item.content.$t + "</p>");
	                var zip = item.title.$t;
	                console.log(zip);
	                var vals = item.content.$t;
	                var vals2 = vals.replace(/\s?\w+:\s/g,  "").split(",");
	                console.log(vals2);
	                $('#otherGuesses').append("<div class='heatPerc' style='width:" + vals2[0] +"px'></div><div class='coolPerc' style='width:" + vals2[1] + "px'></div><br><br>");
	            });
	        }
	    })
	})
}) 


