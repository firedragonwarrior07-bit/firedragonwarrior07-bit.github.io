const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();


// Click a certificate to view a larger image.
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".certificate-card[data-image]").forEach(card => {
  card.addEventListener("click", () => {
    modalImage.src = card.dataset.image;
    modalTitle.textContent = card.dataset.title;
    imageModal.classList.add("open");
    imageModal.setAttribute("aria-hidden", "false");
  });
});

function closeCertificateModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}
modalClose.addEventListener("click", closeCertificateModal);
imageModal.addEventListener("click", event => {
  if (event.target === imageModal) closeCertificateModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeCertificateModal();
});
