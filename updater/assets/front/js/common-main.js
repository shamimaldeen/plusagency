function initMasonry(){$(".grid").isotope({itemSelector:".single-pic",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}})}!function(i){"use strict";i(".datepicker").datepicker({autoclose:!0}),i("input.timepicker").timepicker(),i(".course-slide").slick({dots:!1,arrows:!0,infinite:!0,autoplay:!1,autoplaySpeed:2500,prevArrow:'<div class="prev"><i class="fas fa-angle-left"></i></div>',nextArrow:'<div class="next"><i class="fas fa-angle-right"></i></div>',slidesToShow:3,slidesToScroll:1,rtl:1==rtl,responsive:[{breakpoint:1024,settings:{arrows:!1,slidesToShow:2}},{breakpoint:992,settings:{arrows:!1,slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1}}]});new LazyLoad;i(".gjs-lory-frame").each(function(){let e=i(this).parent().attr("id");i("#"+e).attr("style","width: 100% !important")}),i(window).on("scroll",function(){initMasonry()}),i(window).on("load",function(){initMasonry(),i("#preloader").fadeOut(500)})}(jQuery);