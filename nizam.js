// AOS Başlatma (Güvenli kontrol ile)
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 1000, once: true });
}

// Renk Geçiş Algoritması
const bgSecondary = document.getElementById('bg-secondary');

window.addEventListener('scroll', () => {
    if (!bgSecondary) return;

    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // 0 ile 1 arası oran
    let scrollFraction = scrollY / maxScroll;

    // Opaklığı hesapla (Yukarı çıkınca düzelmesi için)
    let opacityValue = (scrollFraction - 0.1) * 2; 

    // Sınırları belirle
    if (opacityValue < 0) opacityValue = 0;
    if (opacityValue > 1) opacityValue = 1;

    bgSecondary.style.opacity = opacityValue;
});