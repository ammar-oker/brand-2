google.charts.load('current', { 'packages': ['table'] });
google.charts.setOnLoadCallback(drawTable);

var dataArray = [
    ['1 + 1', '100', '10000'],
    ['1 + 2', '200', '8000'],
    ['1 + 3', '300', '12500'],
    ['1 + 4', '400', '7000'],
    ['1 + 5', '500', '8000'],
];

var formattedData = dataArray.map(element => [element[0], element[1], numberWithCommas(element[2]) + ' TRY' ]);

function drawTable(values = formattedData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'الغرف');
    data.addColumn('string', 'المساحة');
    data.addColumn('string', 'السعر');
    data.addRows(values);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, { showRowNumber: false, width: '100%', height: '100%' });

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}