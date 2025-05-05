
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const fileCards = document.querySelectorAll(".file-card");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        fileCards.forEach(card => {
            const keywords = card.getAttribute("data-keywords").toLowerCase();
            if (keywords.includes(searchTerm)) {
                card.style.display = "block"; // Show matching cards
            } else {
                card.style.display = "none"; // Hide non-matching cards
            }
        });

        // If the search bar is empty, show all cards
        if (searchTerm === "") {
            fileCards.forEach(card => {
                card.style.display = "block";
            });
        }
    });
});