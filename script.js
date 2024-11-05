document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.office-image');

function showImage(index) {
    images.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Volta para a última imagem
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Volta para a primeira imagem
    }
    showImage(currentImageIndex);
}

// Exibe a primeira imagem inicialmente
showImage(currentImageIndex);
