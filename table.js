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
  
  // Trigger data fetching when the page loads
  document.addEventListener("DOMContentLoaded", fetchSpeciesData);
  
