$(function(){  
var $activeSlide = $('#slides .slide:first-child');

     // show first slide 
$activeSlide.addClass("showing");


$("#decline").on("click", function(){
    goToSlide('decline');

});


$("#approve").on("click", function(){
    goToSlide('approve');
    console.log(action);

});


function goToSlide(action){
$activeSlide.removeClass("showing");

 
         // send data to controller
        if(action == "approve"){


        } else {

   }



    $activeSlide.addClass("showing");




    //slides[currentSlide].className = 'slide';
    //currentSlide = (n+slides.length)%slides.length;
    //slides[currentSlide].className = 'slide showing';
 }
});