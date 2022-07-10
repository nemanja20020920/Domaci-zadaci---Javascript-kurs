//BUBBLE CHART
let bubbleData1 = [
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    }

];
let bubbleData2 = [

    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
];
let bubbleData3 = [

    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
    {
        x: (Math.random() * 100).toFixed(1),
        y: (Math.random() * 100).toFixed(1),
        r: (Math.random() * 11 + 5).toFixed(1),
    },
];

const bubbleChart = document.querySelector('#bubbleChart');
console.log(bubbleChart)
new Chart(bubbleChart, {
    type: 'bubble',
    data: {
        labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
        datasets: [
            {
                label: 'Prvi',
                data: bubbleData1,
                borderColor: '#d62828',
                backgroundColor: '#f28482',
                hoverBackgroundColor: 'transparent',
            },
            {
                label: 'Drugi',
                data: bubbleData2,
                borderColor: '#03045e',
                backgroundColor: '#48cae4',
                hoverBackgroundColor: 'transparent',
            },
            {
                label: 'Treci',
                data: bubbleData3,
                borderColor: '#ffd60a',
                backgroundColor: '#f4e285',
                hoverBackgroundColor: 'transparent',
            }
        ]
    }
});

//POLAR AREA CENTERED POIN LABELS
let data = [26.3, 27, 18.5, 46, 33.4];

const polarArea = document.querySelector('#polarArea');

new Chart(polarArea, {
    type: 'polarArea',
    data: {
        labels: ['Plava', 'Zuta', 'Zelena', 'Crvena', 'Narandzasta'],
        datasets: [
            {
                label: 'Prvi',
                data: data,
                backgroundColor: [
                    '#48cae4',
                    '#fcbf49',
                    '#588157',
                    '#e63946',
                    '#f77f00'
                ],
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 15
              }
            }
          }
        }
    }
});



//RADAR SKIP POINTS CHART
let radarData1 = [15, 34, 26.3, 16.9, null, 38.1, null, null, 41];
let radarData2 = [8, null, null, 30.1, 31, 20, 16.3, 25.1, null];
let radarData3 = [30, null, null, 24.7, 15.6, 37.6, null, 26.9, 41];

const radarChart = document.querySelector('#radarChart');

new Chart(radarChart, {
    type: 'radar',
    data: {
        labels: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar'],
        datasets: [
            {
                label: 'Prvi',
                data: radarData1,
                borderColor: '#d62828',
                backgroundColor: '#f28482',
            },
            {
                label: 'Drugi',
                data: radarData2,
                borderColor: '#03045e',
                backgroundColor: '#48cae4',
            },
            {
                label: 'Treci',
                data: radarData3,
                borderColor: '#ffd60a',
                backgroundColor: '#f4e285',
            }
        ]
    }
});


//STACKED BAR/LINE CHART

let stackedBarData = [];
let stackedLineData = [];
for(let i = 0; i < 7; i++) {
    stackedBarData[i] = (Math.random() * 50).toFixed(1);
    stackedLineData[i] = (Math.random() * 50).toFixed(1);
}

const stackedChart = document.querySelector('#barLineChart');

new Chart(stackedChart, {
    type: 'line',
    data: {
        labels: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Prvi',
                data: stackedBarData,
                borderColor: '#d00000',
                backgroundColor: 'rgb(214, 40, 40, .5)',
                stack: 'combined',
                type: 'bar'
            },
            {
                label: 'Drugi',
                data: stackedLineData,
                borderColor: 'rgb(2, 62, 138)',
                backgroundColor: 'rgb(0, 119, 182)',
                stack: 'combined'
            }
        ]
    }
});