// Ton numéro de téléphone (Format international sans le +)
const MON_NUMERO_WHATSAPP = "25377331062"; // 👈 Remplace par ton numéro !

document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function() {
        const card = this.closest(".card-info");
        const nomProduit = card.querySelector("h3").innerText;
        const shop = card.querySelector(".shop-name").innerText;
        const prix = card.querySelector(".new-price").innerText;

        const texte = `Bonjour Djibro- ! Je suis intéressé par l'offre :\n\n📦 *${nomProduit}*\n🏪 Boutique : ${shop}\n💰 Prix : ${prix}\n\nEst-ce toujours disponible ?`;
        
        const urlWhatsApp = `https://wa.me/${MON_NUMERO_WHATSAPP}?text=${encodeURIComponent(texte)}`;
        
        window.open(urlWhatsApp, "_blank");
    });
});
