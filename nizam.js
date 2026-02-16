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
// Geri Sayım Sistemi
function startCountdown() {
    // Tahmini TEKNOFEST Başlangıç Tarihi: 30 Ağustos 2026
    const targetDate = new Date("Aug 30, 2026 09:00:00").getTime();

    const updateTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // HTML elementlerini kontrol et ve güncelle
        const dEl = document.getElementById("days");
        const hEl = document.getElementById("hours");
        const mEl = document.getElementById("minutes");
        const sEl = document.getElementById("seconds");

        if (dEl) dEl.innerText = days.toString().padStart(2, '0');
        if (hEl) hEl.innerText = hours.toString().padStart(2, '0');
        if (mEl) mEl.innerText = minutes.toString().padStart(2, '0');
        if (sEl) sEl.innerText = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(updateTimer);
            const container = document.getElementById("countdown");
            if (container) container.innerHTML = "<p class='text-[#2A9D8F] font-bold tracking-widest uppercase'>Yarışma Zamanı Geldi!</p>";
        }
    }, 1000);
}

// Sayacı başlat
startCountdown();
