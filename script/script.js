
testimonialDetails = [
    {
        name:'Lisa',
        img: 'img/testimonial-lisa.jpeg',
        review:'"Dolore quis ad laborum reprehenderit.Dolore quis ad laborum reprehenderit.Dolore quis ad laborum reprehenderit.Dolore quis ad laborum reprehenderit."'
    },
    {
        name:'Drew',
        img: 'img/testimonial-drew.jpg',
        review:'"Magna cillum excepteur do exercitation aliquip in nisi consectetur ut tempor pariatur est. Dolore quis ad laborum reprehenderit.Dolore quis ad laborum reprehenderit."'
    },
    {
        name:'zamyla',
        img: 'img/testimonial-zamyla.jpeg',
        review:'"Mollit ut laborum velit consectetur enim consectetur in ut.Dolore quis ad laborum reprehenderit. Dolore quis ad laborum reprehenderit.Dolore quis ad laborum reprehenderit."'
    }
];

$(document).ready(function(){

    $('#testimonial .testimonial-container .image-box img').attr('src',testimonialDetails[0].img);
    $('#testimonial .testimonial-selector .testimonial-1').toggleClass('active');
    $('#testimonial .testimonial-container .review-box .review-content').text(testimonialDetails[0].review);

});

//Code for hover effect on the testimonial selector
$('#testimonial .testimonial-selector .testimonial-1').hover(function(){
        $(this).css('background-color','#ec3642');
}, function(){
    if(!($(this).hasClass('active'))){
        $(this).css('background-color','#242424');
    }
});
$('#testimonial .testimonial-selector .testimonial-2').hover(function(){
    $(this).css('background-color','#ec3642');
}, function(){
    if(!($(this).hasClass('active'))){
        $(this).css('background-color','#242424');
    }
});
$('#testimonial .testimonial-selector .testimonial-3').hover(function(){
    $(this).css('background-color','#ec3642');
}, function(){
    if(!($(this).hasClass('active'))){
        $(this).css('background-color','#242424');
    }
});

//Code to change the testimonial contents when a testimonial selector is clicked.
$('#testimonial .testimonial-selector .testimonial-1').on('click',function(){
    if(($(this).hasClass('active'))){
        //Do nothing
    }
    else{
        $('#testimonial .testimonial-selector .active').css('background-color','#242424').toggleClass('active');
        $(this).toggleClass('active');
        $('#testimonial .testimonial-container .image-box img').attr('src',testimonialDetails[0].img);
        $('#testimonial .testimonial-container .review-box .review-content').text(testimonialDetails[0].review);
    }
});
$('#testimonial .testimonial-selector .testimonial-2').on('click',function(){
    if(($(this).hasClass('active'))){
        //Do nothing
    }
    else{
        $('#testimonial .testimonial-selector .active').css('background-color','#242424').toggleClass('active');
        $(this).toggleClass('active');
        $('#testimonial .testimonial-container .image-box img').attr('src',testimonialDetails[1].img);
        $('#testimonial .testimonial-container .review-box .review-content').text(testimonialDetails[1].review);
    }
});
$('#testimonial .testimonial-selector .testimonial-3').on('click',function(){
    if(($(this).hasClass('active'))){
        //Do nothing
    }
    else{
        $('#testimonial .testimonial-selector .active').css('background-color','#242424').toggleClass('active');
        $(this).toggleClass('active');
        $('#testimonial .testimonial-container .image-box img').attr('src',testimonialDetails[2].img);
        $('#testimonial .testimonial-container .review-box .review-content').text(testimonialDetails[2].review);
    }
});