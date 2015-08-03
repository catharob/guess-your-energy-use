function chart() {
    // Create the chart
    $('#container').highcharts({

    	chart: {
            type: 'bar'
        },

        title: {
            text: 'Highcharts data from Google Spreadsheets'
        },

        data: {
            googleSpreadsheetKey: '1e--sb5b2Jk1Pd_IOMUF8Veasa01HskKs4NYj0amLIiA'
        }

    });
}