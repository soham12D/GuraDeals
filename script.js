// Mode Nuit
document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('theme-toggle').querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
};

// WhatsApp (Remplace par ton numéro !)
function sendWhatsApp(produit) {
    const num = "25377331062"; // METS TON NUMÉRO ICI 🇩🇯
    const message = encodeURIComponent(`Bonjour GuraDeals ! Je suis intéressé par : ${produit}. Est-il disponible ?`);
    window.open(`https://wa.me/${num}?text=${message}`);
}

// Filtrage simple
function filterData(cat) {
    const cards = document.querySelectorAll('.product-card');
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if(cat === 'all' || card.dataset.category === cat) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
