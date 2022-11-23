// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageTOffset || 
  this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// TYPED
var typed = new Typed(".typed", {
  strings: [
    "Bonjour, je me nome Benjamin, 29 ans, passionnés de « tech, dessin, apprentissage de langue, et découvrir d’autre culture ».",
    "- Personne motivée et disciplinée - Trouve de la joie à aider les autres - Connaissances professionnelles en HTML5, CSS3, anglais et français - Esprit d équipe.",
    "J aime beaucoup étudier différentes langues. Actuellement, je suis en train d apprendre à parler le japonais. J aime également lire et dessiner.",
  ],
  typeSpeed: 30,
  backSpeed: 0,
  loop: true,
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum))
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});
//AOS
AOS.init();