const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const parent = header.closest(".accordion-item");
    const content = parent.querySelector(".accordion-content");
    const isActive = header.classList.contains("active");

    // Fermer tous les autres
    headers.forEach((h) => {
      h.classList.remove("active");
      const c = h.closest(".accordion-item").querySelector(".accordion-content");
      c.style.maxHeight = 0;
      h.setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      header.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      header.setAttribute("aria-expanded", "true");
    } else {
      content.style.maxHeight = 0;
    }
  });
});
