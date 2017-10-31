var trainersList = [
    {
        name:"Paul Franky",
        description:"Fitness Trainer",
        shortDetail: "Magna elit in cupidatat duis nulla do nisi anim enim do ea Lorem duis occaecat.",
        img:"img/paulFranky.jpeg"
    },
    {
        name:"Samantha Hall",
        description:"Fitness Trainer",
        shortDetail: "Magna elit in cupidatat duis nulla do nisi anim enim do ea Lorem duis occaecat.",
        img:"img/samathaHall.jpeg"
    },
    {
        name:"Ana Bell",
        description:"Yoga Trainer",
        shortDetail: "Magna elit in cupidatat duis nulla do nisi anim enim do ea Lorem duis occaecat.",
        img:"img/anaBell.jpeg"
    },
    {
        name:"David Malan",
        description:"Cardio Trainer",
        shortDetail: "Magna elit in cupidatat duis nulla do nisi anim enim do ea Lorem duis occaecat.",
        img:"img/davidMalan.jpeg"
    },
    {
        name:"Natalie Daniels",
        description:"Aerobics and Yoga Trainer",
        shortDetail: "Magna elit in cupidatat duis nulla do nisi anim enim do ea Lorem duis occaecat.",
        img:"img/natalieDaniels.jpeg"
    },
    {
        name:"Praveen Benedict",
        description:"Fitness Trainer",
        shortDetail: "One of the most hardworking and hilarious trainers in this gym, Praveen has been pivotal in the gym's growth.",
        img:"img/praveenBenedict.jpeg"
    }
];

$(document).ready(function(){

        $.each(trainersList, function(index, value) {
            $('#trainers').append('<div class="trainer trainer-'+index+' text-center"></div>');
            $('#trainers .trainer-'+index).append('<img src="'+value.img + '">');
            $('#trainers .trainer-'+index).append('<div class="trainer-details"></div>');
            $('#trainers .trainer-'+index + ' .trainer-details').append('<h3>'+value.name+'</h3>');
            $('#trainers .trainer-'+index + ' .trainer-details').append('<h4>'+value.description+'</h4>');
            $('#trainers .trainer-'+index + ' .trainer-details').append('<p>'+value.shortDetail+'</p>');

            $('#trainers .trainer-details').hover(function(){
                console.log(this);
                $(this).parent().css('background-color','#365196');
            }, function(){
                $(this).parent().css('background-color','#161616');
            });
        });

});