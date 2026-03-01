// main.js – Handles dynamic rendering of house cards and modal

document.addEventListener("DOMContentLoaded", () => {
  const housesGrid = document.getElementById("houses-grid");
  const modal = document.getElementById("propertyModal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");

  // Check if houses data exists
  if (!window.houses || window.houses.length === 0) {
    housesGrid.innerHTML =
      '<p style="text-align:center; color:red; padding:2rem;">No houses available. Check houses.js</p>';
    console.error(
      "houses array is missing or empty. Make sure houses.js is loaded correctly.",
    );
    return;
  }

  // Render cards
  function renderHouses() {
    housesGrid.innerHTML = window.houses
      .map(
        (house) => `
            <div class="house-card animate-on-scroll">
                <img src="${house.image}" alt="${house.title}" loading="lazy">
                <div class="card-content">
                    <h3>${house.title}</h3>
                    <div class="price">${house.price}</div>
                    <div class="location"><i class="fas fa-map-marker-alt"></i> ${house.location}</div>
                    <p class="description">${house.description}</p>
                    <button class="btn-details" data-id="${house.id}">View Details</button>
                </div>
            </div>
        `,
      )
      .join("");

    // After adding new cards, make sure they are observed for scroll animation
    if (window.observeAnimatedElements) {
      window.observeAnimatedElements();
    }
  }

  renderHouses();

  // Open modal with details (using event delegation)
  housesGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-details")) {
      const houseId = parseInt(e.target.getAttribute("data-id"));
      const house = window.houses.find((h) => h.id === houseId);
      if (house) {
        modalBody.innerHTML = `
                    <h2>${house.title}</h2>
                    <img src="${house.image}" alt="${house.title}" style="width:100%; max-height:300px; object-fit:cover; border-radius:10px; margin:1rem 0;">
                    <p><strong>Price:</strong> ${house.price}</p>
                    <p><strong>Location:</strong> ${house.location}</p>
                    <p><strong>Description:</strong> ${house.description}</p>
                    <p><strong>Owner:</strong> ${house.ownerName}</p>
                    <p><strong>Phone:</strong> ${house.ownerPhone}</p>
                    <p><strong>Email:</strong> ${house.ownerEmail}</p>
                    <p><strong>Availability:</strong> ${house.availability}</p>
                `;
        modal.style.display = "block";
      }
    }
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
