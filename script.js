// Gestion du Mode Nuit
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
};

// Système de filtrage
function filterCat(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.cat-btn');
    
    // Update buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter cards
    cards.forEach(card => {
        if(category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Commande WhatsApp
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.onclick = () => {
        const item = btn.parentElement.querySelector('h3').innerText;
        const msg = `Bonjour GuraDeals ! Je souhaite commander : ${item}. Est-ce disponible ?`;
        window.open(`https://wa.me/25377000000?text=${encodeURIComponent(msg)}`);
    };
});
