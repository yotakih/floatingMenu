var blkslt = '#scrlblck';
var initTop = null;

$(document).ready(function(){
	initTop = $(blkslt).offset().top;
});

$(window).scroll(function(){
	if (blkslt == null) return;
	var topval = $(window).scrollTop() + initTop;
	$(blkslt).animate({top:topval}
										,{duration:500,queue:false});
});
