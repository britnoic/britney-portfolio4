// Feature 1: show a friendly welcome message.
const helloButton = document.getElementById("helloButton");
const helloMessage = document.getElementById("helloMessage");
helloButton.addEventListener("click", function () {
  helloMessage.textContent = "Hi there! Thanks for stopping by and having a look around. ♡";
});

// Feature 2: switch between light and dark themes.
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const darkModeIsOn = document.body.classList.contains("dark-mode");
  themeToggle.textContent = darkModeIsOn ? "☀️ Light mode" : "🌙 Dark mode";
});

// Feature 3: filter projects by category.
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const filterMessage = document.getElementById("filterMessage");
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.filter;
    let visibleProjects = 0;
    filterButtons.forEach(function (item) {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    projectCards.forEach(function (card) {
      const shouldShow = selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.hidden = !shouldShow;
      if (shouldShow) visibleProjects++;
    });
    filterMessage.textContent = "Showing " + visibleProjects + (visibleProjects === 1 ? " project." : " projects.");
  });
});

// Feature 4: open or close the mobile navigation menu.
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle.addEventListener("click", function () {
  const menuIsOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", menuIsOpen);
  menuToggle.setAttribute("aria-label", menuIsOpen ? "Close navigation menu" : "Open navigation menu");
  menuToggle.textContent = menuIsOpen ? "✕" : "☰";
});
siteNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Feature 5: copy the email address to the clipboard.
const copyEmailButton = document.getElementById("copyEmailButton");
const contactMessage = document.getElementById("contactMessage");
const emailAddress = "98373@siswa.unimas.my";
copyEmailButton.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(emailAddress);
    contactMessage.textContent = "Copied! My email address is ready to paste.";
  } catch (error) {
    contactMessage.textContent = "If copying is unavailable, my email is " + emailAddress;
  }
});

// Feature 6: keep the footer year up to date automatically.
document.getElementById("currentYear").textContent = new Date().getFullYear();
