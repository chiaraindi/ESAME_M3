let index = 0;
function moveCarousel(direction) {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".card");
    const cardWidth = cards[0].offsetWidth + 10;
    index = Math.max(0, Math.min(index + direction, cards.length - 6));
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}