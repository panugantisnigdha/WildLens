// Fetch species data and populate the dashboard table
async function fetchSpeciesData() {
    try {
      const response = await axios.get("http://localhost:5000/api/species");
      const speciesTable = document.getElementById("species-table");
      response.data.forEach(species => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${species.name}</td>
          <td>${species.population}</td>
          <td>${species.status}</td>
        `;
        speciesTable.appendChild(row);
      });
    } catch (error) {
      console.error("Error fetching species data:", error);
    }
  }
  
  // Initialize the migration map
  function initMap() {
    const map = L.map("map-container").setView([20.5937, 78.9629], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
  
    // Fetch and add location markers
    axios.get("http://localhost:5000/api/locations").then(response => {
      response.data.forEach(location => {
        L.marker([location.lat, location.lng])
          .addTo(map)
          .bindPopup(`<strong>${location.species}</strong><br>${location.notes}`);
      });
    }).catch(error => console.error("Error fetching location data:", error));
  }
  
  // Fetch and display alerts
  async function fetchAlerts() {
    try {
      const response = await axios.get("http://localhost:5000/api/alerts");
      const alertsList = document.getElementById("alerts-list");
      response.data.forEach(alert => {
        const listItem = document.createElement("li");
        listItem.textContent = `${alert.type}: ${alert.message}`;
        alertsList.appendChild(listItem);
      });
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  }
  
  // Initialize the app
  document.addEventListener("DOMContentLoaded", () => {
    fetchSpeciesData();
    initMap();
    fetchAlerts();
  });
  
