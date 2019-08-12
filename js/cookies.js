// ------------------------------------------------------------------------------ //
  // Cookie Bar 
  // ------------------------------------------------------------------------------ //

  $(function(){// document.ready shorthand
    $('.cookie-btn-acpt').click(function() {
        $('#cookie-bar').fadeOut('3000',function(){//use 3000 in place of 300m
            $('#cookie-bar').hide();
        });
        $('.noscroll').removeClass( 'noscroll' );  
        return false;
    });
  });

  $(document).ready(function() {
    // Hide the div
    $("#cookie-bar").hide();
    // Show the div in 5s
    $("#cookie-bar").delay(5000).fadeIn(300);
    $('body').addClass( 'noscroll' );
  });

  //Show - Hide div preferences link
  $(document).ready(function(){
    $('#btn-show-hide-pref').click(function() {
      $('#container-pref').fadeIn(300);
    });
  });
  //Show - Hide div preferences close icon
  $(document).ready(function(){
    $('#btn-show-hide-pref2').click(function() {
      $('#container-pref').fadeOut(300);
    });
  });
  //Show - Hide div preferences button fixed
  $(document).ready(function(){
    $('#btn-show-hide-pref3').click(function() {
      $('#cookie-bar').fadeIn(300);
    });
  });