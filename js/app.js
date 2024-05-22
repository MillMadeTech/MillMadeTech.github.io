const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', function (){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})



/*
$(document).ready(function() {
  $("#navbar-placeholder").load("./pages/navbar.html", function(response, status, xhr) {
    if (status === "error") {
      console.error("Error loading nav.html: ", xhr.status, xhr.statusText);
    } else {
      console.log("nav.html loaded successfully");

      const menu = document.querySelector('#mobile-menu');
      const menuLinks = document.querySelector('.navbar-menu');

      menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
      });
    }
  });
});
*/
