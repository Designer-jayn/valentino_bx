/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
      _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();



    $('#intro').addClass('on');
    setTimeout(()=>{

        $('#intro .line').hide();

        var typed = new Typed('#typed',{
            // strings:["First sentence","Second sentence"],
            strings: [
                'World of VALENTINO',
            ],
            backSpeed: 60,
            typeSpeed: 40,
            loop:false,
            shuffle:false
        });

        setTimeout(()=>{

            $('#intro').fadeOut(function () {

                $('#section01').addClass('on');
            });
        },2000);
    },3000);


    $(".glass_tap").slick({ // 안경 탭 돌아가게하는
        dots: false, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        // prevArrow: $('.prev'), //이전 화살표
        // nextArrow: $('.next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 200, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 2500, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 4, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: true, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'linear', //css transition
        variableWidth: false,
    });


    $(".glass_tap").mouseenter(function () {

        $(this).slick('slickPause');

    });


    $(".glass_tap").mouseleave(function () {

        $(this).slick('slickPlay');

    });








    $("#container,.sc02_hori_scroll,.sc03_hori_scroll,#section04").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // =========================
    // on event section      ===
    //==========================





    $('#button_box .button').click(function () {

        $(this).toggleClass('on');
        $('#mega').toggleClass('on');

    });




    const container = document.querySelector('#container');
    const stage = $('#container .main');



    function nextPager(nextPage,index){
        stage.css('transform',`translateY(-${innerHeight * index}px)`);

        container.removeAttribute('class');

        setTimeout(()=>{
            container.setAttribute('class',nextPage);
        },1000);

    }
    function wheelFunc(e){


        if(e.deltaY < 0){ //up

            if(container.classList.contains('page-4')){ // 4 > 3

                // nextPager('page-3',2);

            }else if(container.classList.contains('page-3')){ // 3 > 2

                // nextPager('page-2',1);

            }


            // }else if(container.classList.contains('page-2')){ // 2 > 1
            //
            // nextPager('page-1',0);
            //
            // }
            //



        }else{ //down

            if(container.classList.contains('page-1')){ // 1 > 2

                nextPager('page-2',1);

                $('#section02').delay(1000).queueAddClass('on');

                // sc02_hori_scroll


                setTimeout(()=>{
                    $('.sc02_hori_scroll').stop().animate({"scrollLeft": $('.sc02_hori_scroll .inner').width() - innerWidth}, 1200, 'easeInOutExpo');
                    // $('.sc02_hori_scroll').css('pointer-events','none');

                },2000); //슬라이드 넘어가는시간//


            }else if(container.classList.contains('page-2')){ // 2 > 3

                //

            }else if(container.classList.contains('page-3')){ // 3 > 4

                nextPager('page-4',3);

            }
        }

    }


    container.addEventListener('wheel',wheelFunc);



    //-------------------------------씬 2 시작-----------------------------


    $('.bag_tap_left').click(function () {
        $('.bag_tap_container').toggleClass('on');
        console.log('clickedd!!!');
    });




    let trigger = false;


    const sc02_wheel = document.querySelector('#section02');

    sc02_wheel.addEventListener('wheel',function (e) {

        e.stopPropagation();

        console.log('wheelllll');

        if(e.deltaY < 0 && trigger === true) {

            nextPager('page-1',0);

            setTimeout(()=>{
                trigger = false;
            },1000)

        }else{

            console.log('11');
            nextPager('page-3',2);

            setTimeout(()=>{
                $('.beach_text').addClass('on');
                $('.black_bcg').addClass('on');
                $('.women').addClass('on');
                $('.boat').addClass('on');
            },600);
        }

    });



    $('.input_field input').focus(function () {
        console.log('in');

        $(this).attr('placeholder','');
    });

    $('.input_field input').blur(function () {

        console.log('out');
        $(this).attr('placeholder','zhemzldqlfur');
    });

    $('.sc02_hori_scroll').scroll(function (e) {  //가로스크롤 첫번째  구동지점

        e.stopPropagation();
        var scrollLeft = $('.sc02_hori_scroll').scrollLeft();

        console.log(scrollLeft);


        // =========================
        // scroll event section  ===
        //==========================

        if(scrollLeft === 0){

            trigger =  true;

        }

        if(scrollLeft >= $('.sc02_hori_scroll .inner').width() - innerWidth){
            // const
            // nextPager('page-3',2);
        }

        if(scrollLeft >= 500){
            $('.text_box02').addClass('on');
            $('#section02').removeClass('on');
        }


    });



    let trigger2 = false;


    //-------------------------------씬 2 끝-----------------------------

    //-------------------------------씬 3 시작 -----------------------------


    $('.sc03_hori_scroll').scroll(function () {  //가로스크롤 두번째  구동지점
        var scrollLeft = $('.sc03_hori_scroll').scrollLeft();

        console.log(scrollLeft);


        $('.sc03_02 .bcg').css('transform',`translateX(-${scrollLeft*0.1}px)`);
        // =========================
        // scroll event section  ===
        //==========================

        if(scrollLeft === 0){
            nextPager('page-2',1);

            $('.sc02_hori_scroll').css('pointer-events','initial');

        }

        if(scrollLeft >= $('.sc03_hori_scroll .inner').width() - innerWidth){

            setTimeout(()=>{
                trigger2 = true;
            },700);

            if(trigger2 === true){
                nextPager('page-4',3);  //section04
            }
        }

        if(scrollLeft >= innerWidth * 2){
            $(".up").addClass('on');
            $(".down").addClass('on');
            $(".girl").addClass('on');
            $(".line").addClass('on');
        }


    });

    //-------------------------------씬 3끝-----------------------------


//-------------------------------씬 4 시-----------------------------

    const sc04 = document.querySelector('#section04');
    let sc04_trigger = false;

    $('#section04').scroll(function () {  //
        var scrollTop = $('#section04').scrollTop();

        console.log(scrollTop);


        if(scrollTop === 0){


            setTimeout(()=>{
                sc04_trigger = true;
            },700);


            sc04.addEventListener('wheel',function (e) {

                if(e.deltaY < 0 && sc04_trigger === true){

                    nextPager('page-3',2);

                }
            })

        }




        if(scrollTop >= 100){
            $('.visual').addClass('on');
            sc04_trigger = false;
        }


    });


    $('.s04_title_box > div').click(function () {

        $('#section04 .villa > div').removeClass('on');
        $('.s04_title_box > div').removeClass('on');
        $(this).addClass('on');

        if($('.s04_title_box > div:nth-child(1)').hasClass('on')){
            $('#s04_picture .bar').css('transform',`translateX(0)`);
            $('#section04 .villa > div:nth-child(1)').addClass('on');



        }else if($('.s04_title_box > div:nth-child(2)').hasClass('on')){
            $('#s04_picture .bar').css('transform',`translateX(130px)`);
            $('#section04 .villa > div:nth-child(2)').addClass('on');




        }else if($('.s04_title_box > div:nth-child(3)').hasClass('on')){
            $('#s04_picture .bar').css('transform',`translateX(260px)`);
            $('#section04 .villa > div:nth-child(3)').addClass('on');

        }

    });



//-------------------------------씬 4 끝-----------------------------





    $('#gnb02_inner > div').click(function () {

        if($(this).hasClass('go01')){

            nextPager('page-1',0);



        }else if($(this).hasClass('go02')){
            nextPager('page-2',1);{
                $('#section02').delay(1000).queueAddClass('on');
            }


            setTimeout(()=>{
                $('.sc02_hori_scroll').stop().animate({"scrollLeft": $('.sc02_hori_scroll .inner').width() - innerWidth}, 1200, 'easeInOutExpo');
                // $('.sc02_hori_scroll').css('pointer-events','none');

            },2000); //슬라이드 넘어가는시간/

           // $('.bag_tap_left').click(function () {
           //     $('.bag_tap_container').toggleClass('on');
           // });



        }else if($(this).hasClass('go03')){
            nextPager('page-3',2);
            setTimeout(()=>{
                $('.beach_text').addClass('on');
                $('.black_bcg').addClass('on');
                $('.women').addClass('on');
                $('.boat').addClass('on');
            },600);

        }else if($(this).hasClass('go04')){
            nextPager('page-4',3);


        }



    });




    $('#gnb_in > div').click(function () {

        $('#mega').removeClass('on');


        if($(this).hasClass('g01')){

            nextPager('page-1',0);



        }else if($(this).hasClass('g02')){
            nextPager('page-2',1);{
                $('#section02').delay(1000).queueAddClass('on');
            }


            setTimeout(()=>{
                $('.sc02_hori_scroll').stop().animate({"scrollLeft": $('.sc02_hori_scroll .inner').width() - innerWidth}, 1200, 'easeInOutExpo');
                // $('.sc02_hori_scroll').css('pointer-events','none');

            },2000); //슬라이드 넘어가는시간/

            // $('.bag_tap_left').click(function () {
            //     $('.bag_tap_container').toggleClass('on');
            // });



        }else if($(this).hasClass('g03')){
            nextPager('page-3',2);
            setTimeout(()=>{
                $('.beach_text').addClass('on');
                $('.black_bcg').addClass('on');
                $('.women').addClass('on');
                $('.boat').addClass('on');
            },600);


        }else if($(this).hasClass('g04')){
            nextPager('page-4',3);


        }






    });



    $('.baggg > div').click(function () {

        $('.sc02_hori_scroll .women_bag > div').removeClass('on');
        $('.baggg > div').removeClass('on')
        $(this).addClass('on');

        if ($('.baggg .b01').hasClass('on')) {
            $('.sc02_hori_scroll .women_bag > div:nth-child(1)').addClass('on');


        } else if ($('.baggg > .b02').hasClass('on')) {
            $('.sc02_hori_scroll .women_bag >  div:nth-child(2)').addClass('on');


        } else if ($('.baggg > .b03').hasClass('on')) {
            $('.sc02_hori_scroll .women_bag >  div:nth-child(3)').addClass('on');

        } else if ($('.baggg > .b04').hasClass('on')) {
            $('.sc02_hori_scroll .women_bag >  div:nth-child(4)').addClass('on');

        }
    });









});












$(function () {

    // scroll event
    $('#container').scroll(function () {
        var scrollTop = $('#container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================




        // $("").stop().animate({"margin-top": -scrollTop * 0.1}, 200);





        //===================================================================
        // nav on/off event
        $('#container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('#container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });

});












