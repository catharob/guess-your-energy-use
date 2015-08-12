<<<<<<< HEAD
// Load the Visualization API and the chart package.
google.load('visualization', '1.0', {'packages':['corechart', 'bar']});

 // Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

function drawChart() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1a8xQBJwrAEcS3Bq7eF8k6zgf1bU3V6o2u3aDKTCW_aA/edit?usp=sharing&headers=1');
    query.setQuery('select A, C, D, E');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  var data = response.getDataTable();
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  var options = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
      };
  chart.draw(data, null);
 
}
=======
$(document).ready(function(){

    $.ajax({
        dataType: "json",
        url: "https://spreadsheets.google.com/feeds/list/1bmZW4CyH390o5Fi4yydYZOPBZLnjc0tfx3EreKWKU1M/od6/public/basic?alt=json",
        success:function(data){
            var list = data;
            // console.log(list);
            var entry = data.feed.entry;
            console.log(entry);
            // var zip = data.feed.entry.title;
            // console.log(zip);


            $.each(entry, function(index,item){
                $('#container').append("<h2>"+ item.title.$t +"</h2><p>" + item.content.$t + "</p>");
                var zip = item.title.$t;
                console.log(zip);
                var vals = item.content.$t;
                var vals2 = vals.replace(/\s?\w+:\s/g,  "").split(",");
                console.log(vals2);
                $('#container').append("<div class='heatPerc' style='width:" + vals2[0] +"px'></div><div class='coolPerc' style='width:" + vals2[1] + "px'></div><br><br>");
            });



        }





    })
})
>>>>>>> sheerforce
