function filterSpecies() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const rows = document.querySelectorAll("#species-table tr");
  
    rows.forEach(row => {
      const speciesName = row.cells[0]?.textContent.toLowerCase();
      row.style.display = speciesName && speciesName.includes(query) ? "" : "none";
    });
  }
  
