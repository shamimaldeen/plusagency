!function(e){"use strict";e(window).on("scroll",function(){e(window).scrollTop()<100?e(".finlance_header").removeClass("sticky"):e(".finlance_header").addClass("sticky")}),e(".search_icon,.close_link").on("click",function(i){i.preventDefault(),e(".search_wrapper").toggleClass("active")}),e(".primary_menu nav").meanmenu({meanMenuContainer:".mobile_menu",meanScreenWidth:"991"}),function(){var i=e(".hero_slide_v1");function o(i){i.each(function(){var i=e(this),o=i.data("delay"),s="animated "+i.data("animation");i.css({"animation-delay":o,"-webkit-animation-delay":o}),i.addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){i.removeClass(s)})})}i.on("init",function(i,s){o(e(".single_slider:first-child").find("[data-animation]"))}),i.on("beforeChange",function(i,s,n,l){o(e('.single_slider[data-slick-index="'+l+'"]').find("[data-animation]"))}),i.slick({autoplay:!0,autoplaySpeed:8e3,dots:!1,fade:!0,arrows:!0,slidesToShow:1,slidesToScroll:1,rtl:1==rtl})}(),e(".service-slick,.team_slick,.blog_slick").slick({dots:!1,arrows:!0,infinite:!0,speed:300,autoplay:!1,slidesToShow:3,slidesToScroll:1,rtl:1==rtl,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:780,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".pricing_slick").slick({dots:!1,arrows:!0,infinite:!0,speed:300,autoplay:!0,slidesToShow:3,slidesToScroll:1,rtl:1==rtl,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:780,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".testimonial_slide").slick({dots:!1,arrows:!0,infinite:!0,speed:300,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:1==rtl}),e(".project-slick").slick({dots:!1,arrows:!0,infinite:!0,speed:300,autoplay:!1,slidesToShow:4,slidesToScroll:1,rtl:1==rtl,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:780,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".partner_slide").slick({dots:!1,arrows:!1,infinite:!0,speed:600,autoplay:!0,slidesToShow:5,slidesToScroll:1,rtl:1==rtl,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e("#bgndVideo").length>0&&e("#bgndVideo").YTPlayer(),e("#heroHome4").length>0&&e("#heroHome4").ripples({resolution:500,dropRadius:20,perturbance:.04}),e("#particles-js").length>0&&particlesJS.load("particles-js","assets/front/js/particles.json"),e(".project-ss-carousel").owlCarousel({loop:!0,dots:!0,nav:!0,navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"],autoplay:!1,autoplayTimeout:5e3,smartSpeed:1500,rtl:1==rtl,items:1}),e(".single-magnific-ss").magnificPopup({type:"image",gallery:{enabled:!0}}),e(".single-ss").on("click",function(i){i.preventDefault();let o=e(this).data("id");e("#singleMagnificSs"+o).trigger("click")}),e(".play_btn").magnificPopup({type:"iframe",removalDelay:300,mainClass:"mfp-fade"}),e(".counter").counterUp({delay:50,time:2e3}),(new WOW).init(),e(window).on("scroll",function(){e(this).scrollTop()>100?e("#scroll_up").fadeIn():e("#scroll_up").fadeOut()}),e("#scroll_up").on("click",function(){return e("html, body").animate({scrollTop:0},600),!1}),1==mainbs.is_announcement&&e(".announcement-banner").magnificPopup({type:"image",mainClass:"mfp-fade",callbacks:{open:function(){e.magnificPopup.instance.close=function(){sessionStorage.setItem("announcement","closed"),e.magnificPopup.proto.close.call(this)}}}}),e("a.see-more").on("click",function(i){i.preventDefault(),e(this).prev("span").show(),e(this).hide()}),e(window).on("load",function(){if(e(".loader-container").addClass("loader-fadeout"),e(".loader-container").addClass("loader-fadeout"),e(".grid").isotope({itemSelector:".single-pic",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}}),1==mainbs.is_announcement){null==sessionStorage.getItem("announcement")&&setTimeout(function(){e(".announcement-banner").trigger("click")},1e3*mainbs.announcement_delay)}})}(window.jQuery);