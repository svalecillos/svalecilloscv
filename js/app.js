$(document).ready(function(){
    
    $('.scrollspy').scrollSpy({
      scrollOffset: 60 //Offset for centering element when scrolled to.
    });

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

//Selecion de opciones del nav
$(window).on('scroll', function () {

  let posicion = $(window).scrollTop();
  let position2 = posicion+60;
   
   if( position2 > $("#home").offset().top) { highlightLink('home'); }
   if( position2 > $("#about").offset().top) {  highlightLink('about'); }
   if( position2 > $("#skill").offset().top) {  
        highlightLink('skill'); 
        $('.skillbar').each(function(){
          $(this).find('.skillbar-bar').animate({
              width:$(this).attr('data-percent')
          },500);
        });
      }
   if( position2 > $("#works").offset().top) {  highlightLink('works'); }
   if( position2 > $("#contact").offset().top || 
       posicion + $(window).height() === $(document).height()) {  
          highlightLink('contact'); 
        }
});

function highlightLink(anchor) {
  $('nav .current').removeClass('current');
  $("nav").find('[href="#' + anchor + '"]').addClass('current');
}

particlesJS.load('particles-js', 'js/particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
})