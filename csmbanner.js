const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 4000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {

    slideshowImages[currentImageCounter].style.opacity = 0;

    //currentImageCounter = 1 % 3 // => 1
    //currentImageCounter = 2 % 3 // => 2
    //currentImageCounter = 3 % 3 // => 0
    //currentImageCounter = 1 % 3 // => 1
    //currentImageCounter = 2 % 3 // => 2
    //currentImageCounter = 3 % 3 // => 0
    //currentImageCounter = 1 % 3 // => 1
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    slideshowImages[currentImageCounter].style.opacity = 1;
}

