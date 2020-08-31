const html_template =
    `<div class="card">
        <h3 class="card-title"> Cabecalho do card! </h3>
        <canvas id="%id%"> </canvas>      
    </div>`;

//04VLLDA6N8E9EQPO

var stocks = document.getElementById("stocks");

for (var i = 0; i < 4; i++) {
    var stock_card = document.createElement('div');
    stock_card.className = 'col-lg-4';
    var id_canvas = 'card'+i;
    var html = html_template.replace('%id%',id_canvas);
    stock_card.innerHTML = html;
    stocks.appendChild(stock_card);
    loadData(id_canvas);
}