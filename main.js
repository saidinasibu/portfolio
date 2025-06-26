// Navigation mobile
const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Portfolio tab functionality
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab__btn');
  const tabContents = document.querySelectorAll('.portfolio__tab-content');

  // Fonction pour changer d'onglet
  function switchTab(tabId) {
    // Retirer la classe active de tous les boutons et contenus
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Ajouter la classe active au bouton et au contenu correspondant
    document.querySelector(`.tab__btn[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`${tabId}-tab`).classList.add('active');
  }

  // Écouteurs d'événements pour les boutons d'onglet
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Initialiser le premier onglet comme actif
  switchTab('web');

  // Scroll reveal animations
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // header container
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content .header__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });

  // about container
  ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".about__content .about__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });

  // service container
  ScrollReveal().reveal(".service__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  // portfolio container
  ScrollReveal().reveal(".portfolio__card", {
    duration: 1000,
    interval: 500,
  });
});