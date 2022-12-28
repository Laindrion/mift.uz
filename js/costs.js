const pie1 = document.getElementById('myChart');
var data1 = {
    labels: ['Конкурс: 19.1% (197,000,000)', 'Каталог: 18.1% (186, 293, 382)', 'Аукцион: 62.8% (646, 899, 680)'],
    datasets: [{
        data: [19.1, 18.1, 62.8],
        backgroundColor: ["#6771DC", "#67B7DC", "#6794DC"],
        hoverBackgroundColor: ["#717CF3", "#6DC2EA", "#71A3F3"],
        borderWidth: 1
    }]
};
new Chart(pie1, {
    type: 'pie',
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false
        }
    },
    data: data1
});

const pie2 = document.getElementById('myChart2');
var data2 = {
    labels: ['Аукцион: 79.6 % (89,799,200)', 'Каталог: 12.4% (13, 990, 694)', 'Конкурс: 9% (9, 000, 000)'],
    datasets: [{
        data: [79.6, 12.4, 9],
        backgroundColor: ["#6771DC", "#67B7DC", "#6794DC"],
        hoverBackgroundColor: ["#717CF3", "#6DC2EA", "#71A3F3"],
        borderWidth: 1
    }]
};

new Chart(pie2, {
    type: 'pie',
    plugins: {
        legend: {
            display: false,
            // position: left
        },
        tooltip: {
            enabled: false
        }
    },
    data: data2
});