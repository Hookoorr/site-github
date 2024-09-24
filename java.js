function afficherCategorie(categorie) {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    document.querySelector(`#${categorie}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    let links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let categorie = this.getAttribute('href').substring(1);
            afficherCategorie(categorie);
        });
    });

    // Afficher la première catégorie au chargement
    afficherCategorie('categorie1');
});
