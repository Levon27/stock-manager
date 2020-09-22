function load_data(stock_code) {
    var promise = fetch_data(stock_code);
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
        url: URL_HISTORY,
        data: {
            access_key: 'ff7a9dc5e3fff12d757d88cd0d795986',
            symbols: stock_code,
            sort: 'DESC',
            limit: 100
        },
        dataType: 'json',
    });
}

async function create_card(initial_amount, buy_price, stock_code) {
    var stock_card = document.createElement('div');
    var id_card = 'card' + i;
    stock_card.className = 'card';
    stock_card.id = id_card;

    let position = await calculate_amount(initial_amount,buy_price,stock_code);

    var html = html_template.replace('{{amount}}', position[0]);
    var html = html.replace('{{variation}}', position[1]);
    var html = html.replace('{{stock_name}}', stock_code);

    stock_card.innerHTML = html;
    stocks.appendChild(stock_card);
}

async function calculate_amount(initial_amount, buy_price, stock_code){
    let current_amount;
    let variation;
    await $.ajax({
        url: URL_LATEST,
        data: {
            access_key: 'ff7a9dc5e3fff12d757d88cd0d795986',
            symbols: stock_code,
            sort: 'DESC',
            limit: 100
        },
        dataType: 'json',
    }).then(res =>{ 
        variation = res.data[0].close / buy_price
        current_amount = initial_amount*variation
    });

    return [current_amount,variation];
}

const URL_HISTORY = "http://api.marketstack.com/v1/eod";

const URL_LATEST = "http://api.marketstack.com/v1/eod/latest";

const html_template =     
`
<h5 class="card-title"> {{stock_name}} </h2>
<p style="color: forestgreen;"> +{{variation}}%</p>
<p style="color: red;"> R$ {{amount}}</p>

`