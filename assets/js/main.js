$(document).ready(function(){
    $('.header').height($(window).height());
})

$(function() {
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });
});

$(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
})


function myFunction() {
    var popup = document.getElementById("myPopup");
        popup.classList.toggle('show');
} 

function myFunction2() {
    var popup = document.getElementById("myPopup2");
        popup.classList.toggle('show');
} 

function myFunction3() {
    var popup = document.getElementById("myPopup3");
        popup.classList.toggle('show');
} 

function myFunction4() {
    var popup = document.getElementById("myPopup4");
        popup.classList.toggle('show');
} 

function myFunction5() {
    var popup = document.getElementById("myPopup5");
        popup.classList.toggle('show');
} 

function myFunction6() {
    var popup = document.getElementById("myPopup6");
        popup.classList.toggle('show');
} 