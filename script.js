const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Vérifie si l'utilisateur avait déjà choisi le mode nuit avant
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeBtn.querySelector('i');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark'); // Sauvegarde le choix
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light'); // Sauvegarde le choix
    }
});

function sendWhatsApp(product) {
    const phone = "25377XXXXXX"; // Mets ton numéro ici
    const message = `Bonjour GuraDeals, je suis intéressé par : ${product}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}
