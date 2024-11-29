async function renderChart() {
    const response = await axios.get("http://localhost:5000/api/species");
    const speciesNames = response.data.map(s => s.name);
    const populations = response.data.map(s => s.population);
  
    new Chart(document.getElementById("population-chart"), {
      type: 'bar',
      data: {
        labels: speciesNames,
        datasets: [{
          label: 'Population',
          data: populations,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
  }
  
  document.addEventListener("DOMContentLoaded", renderChart);
  
