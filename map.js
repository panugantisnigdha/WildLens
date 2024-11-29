function initMap() {
  const map = L.map("map-container").setView([20.5937, 78.9629], 5); // Centered on India
  
  // Add the base map layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Example marker
  L.marker([20.5937, 78.9629]).addTo(map).bindPopup("This is India.");
}

// Initialize the map when the page loads
document.addEventListener("DOMContentLoaded", initMap);
