let future_time = "aug 15 2021";

let countDown = () => {
    let ftime = new Date(future_time).getTime();
    let diff = ftime - new Date().getTime();

    let ldate = Math.floor(diff / (1000 * 60 * 60 * 24));
    let lhour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let lminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let lseconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {ldate,lhour,lminutes,lseconds};
}

$(function(){
    $("#day-night").on("click",function(){
        $(this).children("i").toggleClass("fa-sun-o");
        $(this).children("i").toggleClass("fa-moon-o");
        $(".bg-white").toggleClass("bg-dark");
        $(".text-dark").toggleClass("text-white");
        $(".hover-day").toggleClass("hover-night");
        $("#white-space").toggleClass("white-space-day");
        $("#white-space").toggleClass("white-space-night");
        $(".shadow-dark").toggleClass("shadow-white");
    });

    $("#toggle-side").on("click",function(){
        $(".sidebar").addClass("active");
    });

    $(".sidebar-close,#white-space").click(function(){
        $(".sidebar").removeClass("active");
    });

    setInterval(() => {
        let obj = countDown();
        $(".days").text(obj.ldate);
        $(".hours").text(obj.lhour);
        $(".minutes").text(obj.lminutes);
        $(".seconds").text(obj.lseconds);
    },1000);

});

let total_slides = 4;
if(window.innerWidth < 1030 && window.innerWidth > 850){
    total_slides = 3;
}else if(window.innerWidth < 850 && window.innerWidth > 500){
    total_slides = 2;
}else if(window.innerWidth < 500){
    total_slides = 1;
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: total_slides,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});