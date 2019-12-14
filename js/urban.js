
$(document).ready(function(){
    $('.btn').on('click',function(){
        $('.navbar').toggleClass('is-visible');

        if( $('.navbar').hasClass('is-visible')){
            $('.navbar').animate({
                left:0
            },500),
            $('.btn').animate({
                left:'155px'
            },1000)
        }
        else{
            $('.navbar').animate({
                left:'-154px'
            },500),
            $('.btn').animate({
                left:0
            },1000)
        }
      
           
    })
})

