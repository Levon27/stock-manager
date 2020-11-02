//04VLLDA6N8E9EQPO alpha vantage
//ff7a9dc5e3fff12d757d88cd0d795986 marketstack

// load_data('BPAC11');

var i = 0;;
db.collection('users').where('name', '==', 'jonas').get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
        var portfolio_stocks = doc.data().stocks;
        portfolio_stocks.forEach(stock => {
            i++;
            create_card(stock.initial_amount, stock.buy_price, stock.code);
        });
    });
});
