// Instagram Card swiper

var swiper = new Swiper(".newInstaSwipper", {
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  grabCursor: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    868: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1250: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});


// Swiper for testimonial user card 
let swiperUserCards = new Swiper('.mySwipper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dyamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



});



// Display card product image section
function showDetails(clickedElement) {
  var imgSrc = clickedElement.querySelector('img').src;
  var imgText = clickedElement.querySelector('p').innerText;

  var detailsContainer = document.getElementById('productImg');
  detailsContainer.style.width = '50rem';
  detailsContainer.style.height = '50rem';
  detailsContainer.style.objectFit = "cover";
  detailsContainer.innerHTML = `
    <img  
         src="${imgSrc}" alt="${imgText}">
    <p>${imgText}</p>
  `;
}




// Contact script
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxSbq5Ld65IKef4L3eSrLBFdfoX4gPyP5TEQ6FEkkaHbsRAyRUaErkSaolddZkpHyPKRg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully.";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});







