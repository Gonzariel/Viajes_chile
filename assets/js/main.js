$(function() {
    var contacto = $('#contactoButton');
    var mensaje = $('.alert-info');
    var presentacion = $('.iconPresentacion');

    //alert fade contacto//    
    contacto.click(function(){
        
        mensaje.fadeIn('slow');
        mensaje.fadeOut(2000);
        
    });
    
    //Navbar background con el scroll
    var navBar = $('nav');
    $(window).scroll (function () {

        console.log( $(this).scrollTop() );
        if ($(this).scrollTop() > 200 ) { 
            $('#toTop').fadeIn(); 
            navBar.removeClass('bg-light');
            navBar.addClass('bg-info');
        } else {
        navBar.removeClass('bg-light');
        navBar.removeClass('bg-info');
             $('#toTop').fadeOut();
    }
    });
    
    //slideTiggle presentacion//
    presentacion.click(function(){
        $('.pPresentacion').slideToggle('slow');
    });
    
    //smooth scroll//
    $("a").on('click', function(event) {

        if (this.hash !== "") {
  
          event.preventDefault();
 
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 300, function(){
    
            window.location.hash = hash;
          });
        } // End if
    });

    //toltip//
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
});