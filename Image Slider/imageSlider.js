const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

showSlide(index);

document.getElementById("prevBtn").addEventListener("click", () => {
    index--;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
});

setInterval(() => {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
}, 3000);