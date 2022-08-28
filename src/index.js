// // Header script

(() => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');

  const mobileMenu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  menuOpenBtn.addEventListener('click', openModal);

  function openModal() {
    mobileMenu.classList.toggle('is-open');
  }
})();

// Swiper module
const swiper = new Swiper('.swiper', {
  // Accessibility
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },

  parallax: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // Autoplay
  autoplay: {
    delay: 5000,
  },
  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// Id scroll
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}