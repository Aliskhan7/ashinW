$(document).ready(function(){

    let owl = $(".owl-carousel"),
        prev = $('#left'),
        next = $('#right');

    $(".slide-one").owlCarousel({
        items:1,
        margin:30,
        smartSpeed:450,
        loop: true,
        onInitialized  : counter, //When the plugin has initialized.
        onTranslated : counter
    });

    $(".slide-two").owlCarousel({ //добавлен этот скрипт
        items:9,
        smartSpeed:450,
        loop: true,
        margin: 60,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:5
            },
            1000:{
                items:9
            }
        }

    });


    function counter(event) {
        var element   = event.target;         // DOM element, in this example .owl-carousel
        var items     = event.item.count;     // Number of items
        var item      = event.item.index - 1;     // Position of the current item
        $('#counter').html('<span style="color:#fff;">0'+item+"</span> / "+"0"+items)
    }

    prev.on("click", ()=>{
        owl.trigger("prev.owl.carousel");
    });
    next.on("click", ()=>{
        owl.trigger("next.owl.carousel");
    });


    // $(function() {
    //     $("ul.tabs__caption").on("click", "li:not(.active)", function() {
    //         $(this)
    //             .addClass("active")
    //             .siblings()
    //             .removeClass("active")
    //             .closest("div.tabs")
    //             .find("div.tabs__content")
    //             .removeClass("active")
    //             .eq($(this).index())
    //             .addClass("active");
    //     });
    // });
    // $(function() {
    //     $("ul.tabs__caption-company").on("click", "li:not(.active)", function() {
    //         $(this)
    //             .addClass("active")
    //             .siblings()
    //             .removeClass("active")
    //             .closest("div.tabs")
    //             .find("div.tabs__content-company")
    //             .removeClass("active")
    //             .eq($(this).index())
    //             .addClass("active");
    //     });
    // });
    (function($) {
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
    })(jQuery);




    // function initMap() {
    //     var coordinates = {lat: 47.106601, lng: 51.888808},
    //
    //         map = new google.maps.Map(document.getElementById('map'), {
    //             center: coordinates
    //         });
    //     var coordinates = {lat: 47.106601, lng: 51.888808},
    //
    //         map = new google.maps.Map(document.getElementById('map'), {
    //             center: coordinates
    //         }),
    //
    //         marker = new google.maps.Marker({
    //             position: coordinates,
    //             map: map
    //         });
    //     var coordinates = {lat: 47.106601, lng: 51.888808},
    //
    //         map = new google.maps.Map(document.getElementById('map'), {
    //             center: coordinates
    //         }),
    //
    //         marker = new google.maps.Marker({
    //             position: coordinates,
    //             map: map,
    //             animation: google.maps.Animation.BOUNCE
    //         });
    //     google.maps.event.addListener(infowindow,'closeclick',function(){
    //         marker.setAnimation(google.maps.Animation.BOUNCE);
    //     });
    //
    //     marker.addListener('click', function () {
    //         marker.setAnimation(null);
    //     });
    //     image = '../img/marker.png',
    //         marker = new google.maps.Marker({
    //             position: coordinates,
    //             map: map,
    //             icon: image
    //         });
    // }

});

(function(){
    var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('ontouchstart' in window),
        pointerSupported = ('pointerdown' in window);

    skipClickDelay = function(e){
        e.preventDefault();
        e.target.click();
    }

    setAriaAttr = function(el, ariaType, newProperty){
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function(el1, el2, expanded){
        switch(expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
//function
    switchAccordion = function(e) {
        console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if(thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
    };
    for (var i=0,len=accordionToggles.length; i<len; i++) {
        if(touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if(pointerSupported){
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
})();


