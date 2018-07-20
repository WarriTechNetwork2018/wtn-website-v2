// Toggles the navbar
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });



  // Scroll reveal
  window.sr = ScrollReveal({reset: true});
  sr.reveal('.card', {
    origin: 'top',
    duration: 2000
  },200)

  sr.reveal('.hero-text', {
    origin: 'left',
    duration: 2000
  },400)

  sr.reveal('.what-we-do', { 
    origin: 'right',
    duration: 2000
  });


  // slick
 