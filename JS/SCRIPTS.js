const body = document.body;
const imageContainer = document.getElementById('KORWIN-LOGO-SVG-WEBP');
// Funkcja do wykrywania urządzenia mobilnego
function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|ipad|iphone|ipod|blackberry|bb10|windows phone|mobile/i.test(userAgent);
}
// Funkcja ustawiająca grafikę
function setImage() {
    const isMobile = isMobileDevice();
    const imageUrl = isMobile
        ? "GRAFIKA/KORWIN-WEBP.webp" // Dla urządzeń mobilnych
        : "GRAFIKA/KORWIN-SVG.svg"; // Dla komputerów

    imageContainer.setAttribute("src", imageUrl);
}
// Funkcja resetująca efekt
function resetEffect() {
    body.classList.remove('hover-active');
    imageContainer.style.filter = 'brightness(0)';
}
// Funkcja aktywująca efekt
function activateEffect() {
    body.classList.add('hover-active');
    imageContainer.style.filter = 'brightness(0) saturate(100%) invert(74%) sepia(90%) saturate(893%) hue-rotate(351deg) brightness(99%) contrast(111%)'; // Usunięcie filtrów
}
// Reakcja na dotyk na urządzeniach mobilnych
imageContainer.addEventListener('touchstart', function () {
    if (body.classList.contains('hover-active')) {
        resetEffect();
    } else {
        activateEffect();
    }
});
// Reakcja na najechanie myszką
body.addEventListener('mouseover', function () {
    activateEffect();
});
// Reakcja na opuszczenie kursora
body.addEventListener('mouseout', function () {
    resetEffect();
});
// Ustaw grafikę na podstawie urządzenia
setImage();
