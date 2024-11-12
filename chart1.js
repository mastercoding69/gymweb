
var ctx = document.getElementById('piechart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Pengunjung', 'member', ' member 1 bulan', 'member 2 bulan', 'member 3 bulan'],
        datasets: [{
            label: '# of Votes',
            data: [20, 50, 25, 10, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(0, 128, 0, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(128, 0, 128, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(128, 0, 128, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
