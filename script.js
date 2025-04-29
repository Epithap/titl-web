
AOS.init();

function openModal(element) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = element.querySelector('img').src;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const content = header.nextElementSibling;
    
    if (header.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "10px";
    } else {
      content.style.maxHeight = "0";
      content.style.padding = "0 10px";
    }
  });
});