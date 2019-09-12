$(document).ready(function(){

    let owl = $(".owl-carousel"),
        prev = $('#left'),
        next = $('#right');

    $(".slide-one").owlCarousel({
        items:1,
        margin:30,
        smartSpeed:450,
        loop: true,
    });

    $(".slide-two").owlCarousel({ //добавлен этот скрипт
        items:10,
        smartSpeed:450,
        loop: true,
        margin: 60,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:10
            }
        }

    });


    function counter(event) {
        var element   = event.target;         // DOM element, in this example .owl-carousel
        var items     = event.item.count;     // Number of items
        var item      = event.item.index - 1;     // Position of the current item
        $('#counter').html("0"+item+" / "+"0"+items)
    }

    prev.on("click", ()=>{
        owl.trigger("prev.owl.carousel");
    });
    next.on("click", ()=>{
        owl.trigger("next.owl.carousel");
    });


    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
    $(function() {
        $("ul.tabs__caption-company").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content-company")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
});

