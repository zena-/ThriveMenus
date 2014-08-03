$(function(){

///////phone imge fade ////////
    'use strict';
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

	$('.pop').popover({
	    trigger: 'focus'
	});    
		    
			
});