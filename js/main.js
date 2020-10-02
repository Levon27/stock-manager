//04VLLDA6N8E9EQPO alpha vantage
//ff7a9dc5e3fff12d757d88cd0d795986 marketstack

// load_data('BPAC11');
var i;
const portfolio_stocks = [
    {
        initial_amount: 1000,
        buy_price: 78,
        code: 'BPAC11.BVMF',
        
    },
    {
        initial_amount: 2000,
        buy_price: 52,
        code: 'MGLU3.BVMF'
    }
]


portfolio_stocks.forEach(stock => {
    create_card(stock.initial_amount, stock.buy_price, stock.code);
});
