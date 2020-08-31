function loadData(id) {
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets:
                [{
                    label: 'Price',
                    data: [0, 0.25,0.5,0.75]
                }]
        },
        options: {
        }
    })
}