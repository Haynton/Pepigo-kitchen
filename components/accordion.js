const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const parent = header.parentElement;
    const content = parent.querySelector(".accordion-content");
    const isActive = header.classList.contains("active");

    // Fermer tous les autres
    headers.forEach((h) => {
      h.classList.remove("active");
      const c = h.parentElement.querySelector(".accordion-content");
      c.style.maxHeight = 0;
    });

    if (!isActive) {
      header.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = 0;
    }
  });
});
