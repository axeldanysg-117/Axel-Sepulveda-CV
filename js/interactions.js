const toggleDetailsButton = document.querySelector("#toggle-details");
const moreDetails = document.querySelector("#more-details");

if (toggleDetailsButton && moreDetails) {
  toggleDetailsButton.addEventListener("click", () => {
    const isExpanded = toggleDetailsButton.getAttribute("aria-expanded") === "true";
    toggleDetailsButton.setAttribute("aria-expanded", String(!isExpanded));
    toggleDetailsButton.textContent = isExpanded ? "Más sobre mí" : "Menos sobre mí";
    moreDetails.hidden = isExpanded;
  });
}

const galleryItems = [
  {
    src: "/publico/img/muestras/article-html.svg",
    alt: "HTML: dos corchetes angulares sobre fondo verde",
    label: "HTML"
  },
  {
    src: "/publico/img/muestras/article-css.svg",
    alt: "CSS: tres capas sobre fondo azul",
    label: "CSS"
  },
  {
    src: "/publico/img/muestras/article-js.svg",
    alt: "JavaScript: símbolo JS sobre fondo amarillo",
    label: "JavaScript"
  }
];

const galleryImage = document.querySelector("#gallery-image");
const imageCounter = document.querySelector("#image-counter");
const previousButton = document.querySelector("#prev-image");
const nextButton = document.querySelector("#next-image");
let galleryIndex = 0;

function renderGalleryItem() {
  if (!galleryImage || !imageCounter) return;

  const item = galleryItems[galleryIndex];
  galleryImage.src = item.src;
  galleryImage.alt = item.alt;
  imageCounter.textContent = `${galleryIndex + 1} de ${galleryItems.length} · ${item.label}`;
}

previousButton?.addEventListener("click", () => {
  galleryIndex = (galleryIndex - 1 + galleryItems.length) % galleryItems.length;
  renderGalleryItem();
});

nextButton?.addEventListener("click", () => {
  galleryIndex = (galleryIndex + 1) % galleryItems.length;
  renderGalleryItem();
});

renderGalleryItem();
