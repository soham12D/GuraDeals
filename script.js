// --- 1. GESTION DU MODE NUIT ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
};

// --- 2. FONCTION POUR ACHETER (WhatsApp) ---
function sendWhatsApp(produit) {
    const num = "25377000000"; // REMPLACE PAR TON NUMÉRO 🇩🇯
    const message = encodeURIComponent(`Bonjour GuraDeals ! Je suis intéressé par : ${produit}. Est-il disponible ?`);
    window.open(`https://wa.me/${num}?text=${message}`);
}

// --- 3. GESTION DES SECTIONS (Bas de page) ---
function showSection(name) {
    if (name === 'favoris') {
        alert("❤️ Vos favoris sont vides. Cliquez sur le cœur d'un produit pour l'ajouter !");
    } 
    else if (name === 'explorer') {
        // Remonte en haut et active la barre de recherche
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.getElementById('searchInput').focus();
    } 
    else if (name === 'profil') {
        alert("👤 Section Profil : Connectez-vous pour gérer vos annonces.");
    }
}

// --- 4. BOUTON CENTRAL (+) POUR PUBLIER ---
// On cible le bouton bleu avec le plus au milieu
const publishBtn = document.querySelector('.plus-btn');
if(publishBtn) {
    publishBtn.onclick = () => {
        const num = "25377000000"; // REMPLACE PAR TON NUMÉRO 🇩🇯
        const msg = encodeURIComponent("Bonjour GuraDeals, je souhaite publier une annonce sur l'application.");
        window.open(`https://wa.me/${num}?text=${msg}`);
    };
}

// --- 5. FILTRAGE DES CATÉGORIES ---
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
