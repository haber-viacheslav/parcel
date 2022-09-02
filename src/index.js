// // Header script
// 'use strict';
(() => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuOpenBtnH = document.querySelector('[data-menu-open-h]');
  const menuOpenBtnA = document.querySelector('[data-menu-open-a]');
  const menuOpenBtnS = document.querySelector('[data-menu-open-s]');
  const menuOpenBtnM = document.querySelector('[data-menu-open-m]');
  const menuOpenBtnC = document.querySelector('[data-menu-open-c]');


  const mobileMenu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  menuOpenBtn.addEventListener('click', openModal);
  menuOpenBtnH.addEventListener('click', openModal);
  menuOpenBtnA.addEventListener('click', openModal);
  menuOpenBtnS.addEventListener('click', openModal);
  menuOpenBtnM.addEventListener('click', openModal);
  menuOpenBtnC.addEventListener('click', openModal);


  function openModal() {
    mobileMenu.classList.toggle('is-open');
  }
})();

// Modal

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnHead: document.querySelector('[data-modal-open-head]'),
    openModalBtnOffer: document.querySelector('[data-modal-open-offer]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnHead.addEventListener('click', toggleModal);
  refs.openModalBtnOffer.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
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

  speed: 600,

  loop: true,

  loopedSlides: 4,

  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -1500],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

// Id scroll
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href')
      ? anchor.getAttribute('href')
      : 'body';
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

const swiperCustomers = new Swiper('.swiper-customers', {
  // Accessibility
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  effect: 'cube',

  cubeEffect: {
    slideShadows: false,
    shadow: false,
    ShadowOffset: 0,
    shadowScale: 0,
  },

  autoplay: {
    delay: 6000,
  },
  loop: true,

  loopedSlides: 4,

  speed: 600,
});

// // Form events
// ('use strict');

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);

//     if (error === 0) {
//     } else {
//       alert('All fields are required');
//     }
//   }

//   function formValidate(form) {
//     let error = 0;
//     let = formReq = document.querySelectorAll('._req');

//     for (let index = 0; index < formReq.length; index++) {
//       const input = formReq[index];
//       formRemoveError(input);

//       if (input.classList.contains('_email')) {
//         if (emailTest(input)) {
//           formAddError(input);
//           error++;
//         }
//       } else {
//         if (input.value === '') {
//           formAddError(input);
//           error++;
//         }
//       }
//     }

//     return error;
//   }

//   function formAddError(input) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
//   }
//   function formRemoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('_error');
//   }



//   // Функция проверки email
//   function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }
// });
