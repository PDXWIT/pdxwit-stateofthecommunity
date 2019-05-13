

// Shorthand for $( document ).ready()
$(function() {
  $(".js-permalink").on("click",function(e) {
    e.preventDefault();
    $("#permalink").fadeToggle();
    $("#permalink input").select();
  });

  $(".js-dropdown").on("click", function(e) {
    $(".dropdown-menu").toggleClass('show');
  });

  $('body').on('click', function (e) {
      if (!$('.js-dropdown').is(e.target)
          && $('.js-dropdown').has(e.target).length === 0
          && $('.show').has(e.target).length === 0
      ) {
          $('.dropdown-menu').removeClass('show');
      }
  });


});
