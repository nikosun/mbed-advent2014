

$( ".nav__mobile" ).click(function() {
    $( ".nav__menu" ).toggleClass( "showmenu" );
    $( ".nav__mobile" ).toggleClass( "showmenu" );
});


$( ".nav__menu a" ).click(function() {
    closeMenu();
});


function closeMenu() {
    $( ".nav__menu" ).removeClass( "showmenu" );
    $( ".nav__mobile" ).removeClass( "showmenu" );
}


function updateBox(e) {
    if (e.type == "start") {
        $("nav").addClass("pinned");
    } else {
        $("nav").removeClass("pinned");
    }
}


$(document).ready(function ($) {

    /* PIN NAV */

    controller = new ScrollMagic();

    var colornav = new TimelineMax()
        .add([
        TweenMax.to(".nav--bg", 0.2, {
                backgroundColor: "white",force3D:true
            }),
        TweenMax.to(".nav__menu a ", 0.2, {
                color: "#666",force3D:true
            }),
        TweenMax.to(".nav__logo", 0.2, {
                autoAlpha: 1,force3D:true
            }),
        TweenMax.to("nav", 0.2, {
                className: "+=pinned"
            }),
        TweenMax.to(".nav__mobile", 0.2, {
                color: "#666",force3D:true
            })
    ]);


        var scene = new ScrollScene({
            triggerHook: "onLeave",
            offset: 520,
            tweenChanges: true/*,
            loglevel: 3*/
        })
        .setPin("nav")
        .setTween(colornav)
        .on("start end", updateBox)
        .on("end", function (e) {
            if (e.target.parent().info("scrollDirection") == "REVERSE") { closeMenu(); }
		})
        .on("reverse", closeMenu)
        .addTo(controller);

//    scene.addIndicators();

    /* SCROLL TO NAV */

    // init controller
//    var controllerScrollNav = new ScrollMagic();

    // parallax header
    new ScrollScene({
            triggerElement: "header#home",
            duration: $(window).height() + 300,
            offset: + 500
        })
        .addTo(controller)
        .triggerHook("onCenter")
        .setTween(new TimelineMax().add([
        TweenMax.to(".home", 1, {backgroundPosition: "-5% -150%", ease: Linear.easeNone})
        ]));


    // build tween
    var scrolltonav = TweenMax.to(".home__claim", 0.5, {
        autoAlpha: 0,
        y: 150,
        scale: 0.7,
        force3D:true
    });

    // build scene
    var scene2 = new ScrollScene({
            duration: 350,
            triggerHook: "onLeave"
        })
        .setTween(scrolltonav)
        .addTo(controller);




//    scene2.addIndicators();

    // change behaviour of anchor links to scroll instead of jump
    $(document).on("click", "a[href^=#]", function (e) {
        var
            id = $(this).attr("href"),
            $elem = $(id);
        if ($elem.length > 0) {
            e.preventDefault();
            TweenMax.to(window, 0.5, {
                scrollTo: {
                    y: $elem.offset().top,
                    force3D:true
                },
                ease: Power3.easeInOut
            });
            if (window.history && window.history.pushState) {
                // if supported by the browser we can even update the URL.
                history.pushState("", document.title, id);
            }
        }
    });

    /* WE LOVE TEXT CHANGE */


    $(function () {

        var t = ["Hardware", "mbed", "Prototype", "mbed", "OpenSource", "mbed"],
            $h1 = $(".welove__rotation"),
            $sp = $h1.find(".welove__rotation--highlight"),
            i = 0,
            widths = [];

        $.each(t, function (i, v) {
            var el = $('<span />', {
                text: v
            }).appendTo($h1);
            widths.push(el.width());
            el.remove();
        });

       $sp.css({
            opacity: 0
        });

        (function loop() {
            i = ++i % t.length;
            $sp.text(t[i]).animate({width: widths[i]}, 500, function () {
//                TweenLite.to($sp.text(t[i]), 0.5, {width:widths[i], onComplete:function () {
                TweenLite.to($sp.text(t[i]), 0.5, {autoAlpha:1});
                TweenLite.to($sp.text(t[i]), 0.5, {autoAlpha:0, delay:2, onComplete:loop});
//            }});
            });
        })();
    });


    /* "b-mbed" */

    // init controller
//    var controllerBrands = new ScrollMagic();

    // build tween
    var animate2 = new TimelineMax()
        .add([
            TweenMax.to(".b-mbed__icon.agency", 0.5, {
            autoAlpha: 1,
            y: 20,force3D:true
            }),
            TweenMax.to(".b-mbed__title.agency .b-mbed__title--line", 0.5, {
            width: "100%",ease:Power3.easeInOut,force3D:true
            }),
            TweenMax.to(".b-mbed__logo.elogia", 0.5, {
            autoAlpha: 1, y:-30,ease:Power3.easeInOut
            }),
            TweenMax.to(".b-mbed__logo.moddity", 0.5, {
            autoAlpha: 1, y:-30,delay:0.25,ease:Power3.easeInOut
            }),
            TweenMax.to(".b-mbed__logo.ibrands", 0.5, {
            autoAlpha: 1, y:-30,delay:0.5,ease:Power3.easeInOut
            })
    ]);

    // build scene
    var scene3 = new ScrollScene({
            triggerElement: ".b-mbed__icon.agency",
            triggerHook: "onCenter",
            reverse: false
        })
        .setTween(animate2)
        .addTo(controller);

//    scene3.addIndicators();


    // build tween
    var animate3 = new TimelineMax()
        .add([
            TweenMax.to(".b-mbed__icon.technology", 0.5, {
            autoAlpha: 1,
            y: 20,force3D:true
            }),
            TweenMax.to(".b-mbed__title.technology .b-mbed__title--line", 0.5, {
            width: "100%",ease:Power3.easeInOut,force3D:true
            }),
            TweenMax.to(".b-mbed__logo.mittum", 0.5, {
            autoAlpha: 1, y:-30,ease:Power3.easeInOut
            }),
            TweenMax.to(".b-mbed__logo.moose", 0.5, {
            autoAlpha: 1, y:-30,delay:0.25,ease:Power3.easeInOut
            }),
            TweenMax.to(".b-mbed__logo.emma", 0.5, {
            autoAlpha: 1, y:-30,delay:0.5,ease:Power3.easeInOut
            })
    ]);

    // build scene
    var scene4 = new ScrollScene({
            triggerElement: ".b-mbed__icon.technology",
            triggerHook: "onCenter",
            reverse: false
        })
        .setTween(animate3)
        .addTo(controller);

//    scene4.addIndicators();

    // build tween
    var animate4 = new TimelineMax()
        .add([
            TweenMax.to(".b-mbed__icon.media", 0.5, {
            autoAlpha: 1,
            y: 20,force3D:true
            }),
            TweenMax.to(".b-mbed__title.media .b-mbed__title--line", 0.5, {
            width: "100%",ease:Power3.easeInOut,force3D:true
            }),
            TweenMax.to(".b-mbed__logo.m4e", 0.5, {
            autoAlpha: 1, y:-30,delay:0.5,ease:Power3.easeInOut
            })
    ]);

    // build scene
    var scene5 = new ScrollScene({
            triggerElement: ".b-mbed__icon.media",
            triggerHook: "onCenter",
            reverse: false
        })
        .setTween(animate4)
        .addTo(controller);

//    scene5.addIndicators();

    // build tween
    var animate5 = new TimelineMax()
        .add([
            TweenMax.to(".b-mbed__icon.venture", 0.5, {
            autoAlpha: 1,
            y: 20,force3D:true
            }),
            TweenMax.to(".b-mbed__title.venture .b-mbed__title--line", 0.5, {
            width: "100%",ease:Power3.easeInOut,force3D:true
            }),
            TweenMax.to(".b-mbed__logo.ulabox", 0.5, {
            autoAlpha: 1, y:-30,ease:Power3.easeInOut
            }),
            TweenMax.to(".b-mbed__logo.blueknow", 0.5, {
            autoAlpha: 1, y:-30,delay:0.25,ease:Power3.easeInOut
            }),
            TweenMax.to(".b-mbed__logo.offemily", 0.5, {
            autoAlpha: 1, y:-30,delay:0.5,ease:Power3.easeInOut
            })
    ]);

    // build scene
    var scene6 = new ScrollScene({
            triggerElement: ".b-mbed__icon.venture",
            triggerHook: "onCenter",
            reverse: false
        })
        .setTween(animate5)
        .addTo(controller);

//    scene6.addIndicators();


    // build tween
    var animate6 = new TimelineMax()
        .add([
            TweenMax.to(".location__city.barcelona", 0.5, {
            autoAlpha: 1,
            y: -10
            }),
            TweenMax.to(".location__city.madrid", 0.5, {
            autoAlpha: 1,
            delay:0.25,
            y: -10
            }),
            TweenMax.to(".location__city.vigo", 0.5, {
            autoAlpha: 1,
            delay:0.5,
            y: -10
            }),
            TweenMax.to(".location__city.mexico", 0.5, {
            autoAlpha: 1,
            delay:0.75,
            y: -10
            }),
            TweenMax.to(".location__city.londres", 0.5, {
            autoAlpha: 1,
            delay:1,
            y: -10
            })
    ]);

    // build scene
    var scene7 = new ScrollScene({
            triggerElement: ".title-section.findus",
            triggerHook: "onCenter",
            reverse: false
        })
        .setTween(animate6)
        .addTo(controller);

    //scene7.addIndicators();





    // parallax
    new ScrollScene({
            triggerElement: "section#parallax2",
            duration: $(window).height() + 300,
            offset: -400
        })
        .addTo(controller)
        .triggerHook("onCenter")
        .setTween(new TimelineMax().add([
            TweenMax.fromTo("#parallax2 #big", 1, {scale: 1, alpha: 0.4, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
            TweenMax.to("#parallax2 #parallaxbg", 1, {backgroundPosition: "0 -200%", ease: Linear.easeNone})
        ]));



});