var currentImageIndex;
var images = document.querySelectorAll('.thumbnails img , .thumbnails2 img, .thumbnails3 img');

function showImage(index) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("fullImage");
    currentImageIndex = index;
    modal.style.display = "block";
    modalImg.src = images[index].src.replace('thumbnail', 'fullsize'); // 替换缩略图路径为大图路径
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    var modalImg = document.getElementById("fullImage");
    modalImg.src = images[currentImageIndex].src.replace('thumbnail', 'fullsize');
}

