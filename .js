// Toggle navigation menu

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Scroll-to-top button

const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});