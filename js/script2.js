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