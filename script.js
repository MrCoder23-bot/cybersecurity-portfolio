const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Starter project cards intentionally point to the contact section.
// Replace their href values with the relevant GitHub repository or write-up URLs.
document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#contact") {
      event.preventDefault();
      const project = link.dataset.project || "this project";
      const contact = document.querySelector("#contact");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
        const note = document.querySelector(".contact-edit-note");
        if (note) note.textContent = `Add your repository or report link for "${project}" when it is ready.`;
      }
    }
  });
});
