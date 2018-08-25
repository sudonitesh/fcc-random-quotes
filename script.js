var forismaticAPI = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
// var inter;
   
$(document).ready(function() {
    // do
    // {
    	var au = null;

	    $('#changeQuote').on("click", function() {
	        $.getJSON(forismaticAPI, function(data) {
	        	$('body').css('background-color', '#333');
	        	$('body').css('color','#333');	            
	            $('.quoteText').empty();           
	            $('.quoteText').append('<blockquote>' + data.quoteText + '</blockquote>' + '<p id="author"> —  ' + data.quoteAuthor + '</p>');
	        });
	    });

	    $('.automate').on("click", function() {
	    	$("#changeQuote").hide("400");
	    	$(".automate").html("Do it manually").css("color","white");
	    	if(au) {clearInterval(au);}
	    	au = setInterval(function() {
	    		$("#changeQuote").click();

	    	},400);
	    	//inter;
	    	





	    	$(".automate").on("click",function() {
				if(confirm("You will have to refresh the page to automate again!!!"))
	    		{
	    			
	    		$("#changeQuote").fadeIn("3000");
	    		$(".automate").html("Automate").css("color","#FFDF00");

	    		clearInterval(au);
	    	    }
			});




	    });

});



