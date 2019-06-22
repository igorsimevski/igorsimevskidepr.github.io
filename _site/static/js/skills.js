$(document).ready(function() {

  var ctx = document.getElementById("cs");
  var data = {
    labels: "GitHub, Java, Spring, Android, NodeJS, HTML5, Javascript, Machine Learing, Python, Docker, AWS Lambda, Golang, Redis, MySQL, PostgreSQL, C/C++, Bash, Linux, Playing the Piano".split(","),
    datasets: [{
      label: "Ability",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#3385FF",
      pointBackgroundColor: "#3385FF",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#3385FF",
      pointHoverBorderColor: "#3385FF",
      data: [86,     82,   70,     68,      84,     65,    80,         30,              30,     50,     60,         50,     50,    60,    44,         40,    72,   70,    50]
    }]
  };
  new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      scale: {
        responsive: true,
        ticks: {min: 0, max: 100},
        lineArc: false,
        pointLabels: {fontSize: 14},
      },
      legend: {
        display: false
      },
    }
  });

});
