document.addEventListener("DOMContentLoaded", function() {
    let stokDarah = {
        A: 45,
        B: 30,
        O: 10,
        AB: 25
    };

    let maxStok = 50;
    let chartHeight = 200;

    function setBarHeight(id, value, delay) {
        setTimeout(() => {
            document.getElementById(id).style.height = (value / maxStok) * chartHeight + "px";
        }, delay);
    }

    setBarHeight("barA", stokDarah.A, 500);
    setBarHeight("barB", stokDarah.B, 1000);
    setBarHeight("barO", stokDarah.O, 1500);
    setBarHeight("barAB", stokDarah.AB, 2000);
    
});

function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("show");
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("show");
}

function closeOutsidePopup(event) {
    let popupContent = document.querySelector(".popup-content");
    
    // Cek jika yang diklik bukan bagian dalam popup
    if (!popupContent.contains(event.target)) {
        closePopup();
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Ganti slide setiap 5 detik
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

document.getElementById("findLocation").addEventListener("click", function() {
    window.location.href = "lokasi.html";
});