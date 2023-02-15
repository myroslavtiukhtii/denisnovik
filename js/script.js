window.addEventListener('DOMContentLoaded', () => {
    
    const HEADER = document.querySelector('.header');
    const MENUBTN = document.querySelector('.header__button');
    MENUBTN.addEventListener('click', menuOpen);

    function menuOpen(e) {
        HEADER.classList.toggle('header--active');
    }

    const MENULINK = document.querySelectorAll('.navigation-links__item');

    for (let i = 0; i < MENULINK.length; i++) {
        MENULINK[i].addEventListener('click', () => {
            HEADER.classList.remove('header--active');
        })
    }

    //upbtn

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            UPBTN.style.display = "flex";
          } else {
            UPBTN.style.display = "none";
          }
        
    };

    const UPBTN = document.querySelector('.intro_upbtn');
    UPBTN.addEventListener('click', toUp);

    function toUp() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    //animation when scroll

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);




});