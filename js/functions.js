function loadData(chart_id) {
    var promise = fetch_data('');
    var stock_price;
    var stock_date;

    var ctx = document.getElementById(chart_id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets:
                [{
                    label: 'Price',
                    data: []
                }]
        },
        options: {
        }
    });

    promise.then(response => {
        stock_price = response.data.map(res => res.close);
        stock_date = response.data.map(res =>new Date(res.date).getDate());
        stock_date.reverse();
        stock_price.reverse();
        console.log('sucess!!',stock_price,stock_date);

        myChart.data.datasets[0].data = stock_price;
        myChart.data.labels = stock_date;
        myChart.update();
    });
};

function fetch_data(stock_code){ 
    return $.ajax({
        url: URL,
        data: {
            access_key: 'ff7a9dc5e3fff12d757d88cd0d795986',
            sort: 'DESC',
            limit: 100
        },
        dataType: 'json',
    });
}
const URL = "http://api.marketstack.com/v1/eod?symbols=BPAC11.BVMF"