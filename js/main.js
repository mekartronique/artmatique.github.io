document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert("Recherche ArtMatique pour : " + searchInput.value);
        }
    });

    console.log("ArtMatique Pro est prêt !");
});
