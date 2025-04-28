AOS.init({
  duration: 1300
});

const navLinks = document.querySelectorAll('.header a');

navLinks.forEach(link => {
link.addEventListener('click', function () {
  navLinks.forEach(l => l.classList.remove('active'));
  this.classList.add('active');
});
});

function openModal(element) {
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
modal.style.display = "block";
modalImg.src = element.querySelector("img").src;
}

function closeModal() {
document.getElementById("modal").style.display = "none";
}
