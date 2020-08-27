$(document).ready(main);

$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".wrapper").toggleClass("collapse");
    });
});


function main(){
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });
}