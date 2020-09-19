function load_data() {
    var promise = fetch_data('');
    var stock_price;
    var stock_date;

    var ctx = document.getElementById("stock_price_graph").getContext('2d');
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
        stock_date = response.data.map(res => new Date(res.date).getDate());
        stock_date.reverse();
        stock_price.reverse();

        myChart.data.datasets[0].data = stock_price;
        myChart.data.labels = stock_date;
        myChart.update();
    });
};

function fetch_data(stock_code) {
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

function create_card() {
    var stock_card = document.createElement('div');
    stock_card.className = 'card';
    var id_card = 'card' + i;
    var html = html_template.replace('%id%', id_card);
    stock_card.innerHTML = html;
    stocks.appendChild(stock_card);
}
const URL = "http://api.marketstack.com/v1/eod?symbols=BPAC11.BVMF";

const html_template =     
`
<h5 class="card-title"> BPAC11 </h2>
<p style="color: forestgreen;"> +100%</p>
<p style="color: red;"> R$ 980,00</p>

`