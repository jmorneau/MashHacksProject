window.fbAsyncInit = function() 
        FB.init({
          appId      : '{your-app-id}',
          status     : true,
          xfbml      : true
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/all.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
      
$(function() {
	$('a').click(function(event) {
		event.preventDefault();

		$('body, html').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 200);
	});
	// $('body').scrollTo('#second-screen');
});