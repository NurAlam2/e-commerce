

$(document).ready(function(){
    // owl carousel
    $('.categories-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    

    

     
    // scroll to top
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()>300){
                $(".scroll-to-top").fadeIn();
            }else{
                $(".scroll-to-top").fadeOut()
            }
        })
    })
    // click btn to scroll top
    $(".scroll-to-top").click(function(){
        $("html, body").animate({scrollTop:0}, 500);
    })

    // featured section
    $(".featured_controls li").on("click", function(){
        $(".featured_controls li").removeClass("active");
        $(this).addClass("active")
    });
    if($(".featured_filter").length > 0){
        var containerE1 = document.querySelector(".featured_filter");
        var mixer = mixitup(containerE1)
    }

    // menu active
    $(".header__menu li").on("click", function(){
        $(".header__menu li").removeClass("active");
        $(this).addClass("active")
    });


    
})

$(document).ready(function(){
    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $('.latest-product__slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayTimeout: 2000,
        items:1,
        dots: false,
        
    })

})

$(document).ready(function(){
    
    /*-----------------------
		Price Range Slider
	------------------------ */
    $("#price-range").slider({
        step: 500,
        range: true,
        min: 0,
        max: 500,
        values: [0, 500],
        slide: function(event, ui)
        {$("#priceRange").val(ui.values[0] + " - " + ui.values[1]);}
    });
    $("#priceRange").val($("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1));



})

$(document).ready(function(){
    // discount product carousel
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 10,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });


    /*------------------
		Single Product
	--------------------*/
    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });


     /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });


   


})





// product-details
// function clickimg(smallImg){
//     var fullImg = document.getElementById("imagebox");
//     fullImg.src = smallImg.src;
// }