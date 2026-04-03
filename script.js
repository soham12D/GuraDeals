// Gestion du thème
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
};

// Fonction pour envoyer un message WhatsApp personnalisé
function openWhatsApp(magasin) {
    const numero = "25377XXXXXX"; // REMPLACE PAR TON NUMÉRO ICI
    const message = `Bonjour GuraDeals ! Je souhaite voir le catalogue actuel de : ${magasin}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
