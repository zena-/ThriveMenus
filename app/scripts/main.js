$(function(){

	'use strict';
	var window_height = $(window).height(),
       content_height = window_height - 200;

     $('#banner').height(content_height);

 //    $(window).resize(function() {
	//     if ($(window).width() < 1110) {
	//         $('section').height(content_height);
	//     }
	// });


	/////////// slider ////////

    $('.carousel').carousel({
		interval: 5000
	});

///////phone imge fade ////////
    
	$('#phoneimg').hover(function(){
	    $('#phone').stop().fadeTo(400,1);
	}, function() {
	    $('#phone').stop().fadeTo(400,0.60);
	});

////////// signin popup ////////

    $('#myModal').modal('show', function(){

    	// Calling Register Form
	    $('.user_register').click(function () {
	        $('.social_login').hide();
	        $('.user_register').show();
	        $('#myModalLabel').text('Register');
	        return false;
	    });
		 
		// // Going back to Social Forms
	 //    $('.back_btn').click(function () {
	 //        $('.user_login').hide();
	 //        $('.user_register').hide();
	 //        $('.social_login').show();
	 //        $('#myModalLabel').text('Login');
	 //        return false;
	 //    });

    });

//////////// popover ///////////

	$('.pop').popover(function(){
		$('img').trigger('click');
	});
		    
//////// nav ////

	$('a.menu-icon').click(function() {
	    $('#menu-links').slideToggle();
	});

  // fix hidden links on window resize

  // $(window).resize(function() {
  //   if ($(window).width() > 700) {
  //     $('#menu-links').removeAttr('style');
  //   }
  // });

});