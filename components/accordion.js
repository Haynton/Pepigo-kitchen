// Accordéons
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains("show");
    document.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("show"));
    document.querySelectorAll(".accordion-header").forEach(h => h.classList.remove("active"));
    if(!isOpen){
      content.classList.add("show");
      header.classList.add("active");
    }
  });
});