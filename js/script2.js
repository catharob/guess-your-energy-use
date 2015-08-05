$(function() {
    // Create the chart
    $('#container').highcharts({

    	chart: {
            type: 'bar'
        },

        title: {
            text: 'Highcharts data from Google Spreadsheets'
        },

        data: {
            googleSpreadsheetKey: '1bmZW4CyH390o5Fi4yydYZOPBZLnjc0tfx3EreKWKU1M'
        }

    });
});