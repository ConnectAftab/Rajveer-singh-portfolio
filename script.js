
const modal = document.getElementById("image-modal");


const images = document.querySelectorAll('.card img');
const modalImg = document.getElementById("modal-img");


images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});


const closeBtn = document.getElementsByClassName("close")[0];


closeBtn.onclick = () => {
    modal.style.display = "none";
}


window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
