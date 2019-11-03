$(document).ready(function(){
    $('.nav').onePageNav(); // -> Inicia el page nav
    //Metodo scroll para poner el nav transparente dependiendo donde este el scroll
    $(window).scroll(function(){
        if($(window).scrollTop()>580){
          $('#nav').removeClass('N/A transparent');
          $('#nav').addClass('nav-fijo');
        }else{
          $('#nav').removeClass('nav-fijo');
          $('#nav').addClass('N/A transparent');
        }
      });
    $('.sidenav').sidenav();// -> Iniciamos el boton del menu para moviles
});

particlesJS.load('particles-js', 'js/particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
})