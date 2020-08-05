// ============================================
// Bar
// ============================================
new Chart(document.getElementById("myChart"), {
    type: 'bar',

    data: {

        labels: ["June 1", "June 2", "June 3", "June 4", "June 5", "June 6", "June 7"],
        datasets: [
            {

                label: "Sales",
                backgroundColor: "#3f50f6",
                barThickness: 30,//độ rộng của cột data
                data: [1.1, 1, 1.1, 2, 1.1, 1.8, 1.1]
            }, {


                label: "Earnings",
                backgroundColor: "#f8f9fa",
                barThickness: 30,//độ rộng của cột data
                data: [1.3, 2, 1.1, 1.3, 1, 1.7, 1.1]
            }
        ]
    },
    options: {
        scales: {

            yAxes: [{

                ticks: {
                    beginAtZero: true,
                    callback: function (value, index, values) {
                        return value + 'k';
                    },
                    stepSize: 1,//Giá trị trục Y
                }
            }],

            xAxes: [{

                gridLines: {
                    display: false,//ẩn các đường lưới của trục x
                },
            }],

        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
    }
});


// ============================================
// Doughnut
// ============================================
new Chart(document.getElementById("totalSaleDoughnutChart"), {
    type: 'doughnut',
    data: {
        labels: ['Direct Sales', 'Referral Sales', 'Affiliate Sales', 'Direct Sales'],
        datasets: [{
            label: '# of Tomatoes',
            data: [38, 23, 15, 23],
            backgroundColor: [
                'rgb(63, 80, 246)',
                'rgb(2, 204, 205)',
                'rgb(255, 60, 166)'
            ],
            borderColor: [
                'rgba(0,0,0,.2)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }

    }
});

// ============================================
// LINE
// ============================================

var chart = document.getElementById('earningLineChart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 0, 255, 0.1)');
gradient.addColorStop(0.5, 'rgba(0, 0, 255, 0.05)');
gradient.addColorStop(1, 'rgba(0, 0, 0, 0.025 )');

var chartLine = new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Stu'],
        datasets: [{
            label: 'Custom Label Name',
            backgroundColor: gradient,
            pointBackgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#3f50f6',
            data: [14, 13, 18, 20, 10, 17]
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio: true,
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'rgba(200, 200, 200, 0.05)',
                    lineWidth: 1
                }
            }],
            yAxes: [{
                gridLines: {
                    color: 'rgba(200, 200, 200, 0.08)',
                    lineWidth: 1
                },
                ticks: {
                    beginAtZero: true,
                    callback: function (value, index, values) {
                        return value + 'k';
                    },
                    stepSize: 10,//Giá trị trục Y
                }
            }]
        },
        elements: {
            line: {
                tension: 0.4
            }
        },
        legend: {
            display: false
        },
        point: {
            backgroundColor: 'green'
        },
        tooltips: {
            backgroundColor: 'rgba(0,0,0,0.3)',
            titleFontColor: 'green',
            caretSize: 5,
            cornerRadius: 2,
            xPadding: 10,
        }
    }
});