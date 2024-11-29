document.getElementById("observation-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const speciesName = document.getElementById("species-name").value;
    const population = document.getElementById("population").value;
  
    try {
      const response = await axios.post("http://localhost:5000/api/observations", {
        species: speciesName,
        population: population
      });
      document.getElementById("observation-result").textContent = "Observation submitted successfully!";
    } catch (error) {
      document.getElementById("observation-result").textContent = "Error submitting observation.";
    }
  });
  
