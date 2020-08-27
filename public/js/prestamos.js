$(document).ready(main);

function main(){
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });
    
}

$(document).ready(function(){
	$('select').formSelect();
	$('.modal').modal();
	
    $(".hamburger").click(function(){
        $(".wrapper").toggleClass("collapse");
    });
   
});