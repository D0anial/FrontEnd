document.addEventListener("DOMContentLoaded", function () {
    const filterSelect = document.getElementById("filter");
    const cards = document.querySelectorAll(".card");
  
    // Load and apply saved filter from localStorage if available
    const savedFilter = localStorage.getItem("selectedFilter");
    if (savedFilter) {
      filterSelect.value = savedFilter;
      applyFilter(savedFilter);
    }
  
    // Event listener for the filter dropdown
    filterSelect.addEventListener("change", (event) => {
      const selectedCategory = event.target.value;
      localStorage.setItem("selectedFilter", selectedCategory); // Save selection to localStorage
      applyFilter(selectedCategory);
    });
  
    function applyFilter(category) {
      cards.forEach((card) => {
        const cardTitle = card.querySelector(".card-title").innerText;
        if (category === "all" || cardTitle === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  });
  