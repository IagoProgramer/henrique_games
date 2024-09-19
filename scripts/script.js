// scripts.js

// Função para abrir o jogo ao clicar no card
function playGame(gameUrl) {
    window.open(gameUrl, "_blank");
}

// Função de busca (opcional)
document.getElementById("search-bar").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const games = document.querySelectorAll(".game-card");

    games.forEach(function(game) {
        const title = game.querySelector("p").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});
