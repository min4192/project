$(function () {
  aaa();

  function upnav() {
    document.addEventListener("scroll", onScroll, { passive: true });
    let last = 0;
    const gap = 1;
    const nav = document.querySelector("nav");
    const headerheight = document.querySelector("header").clientHeight;
    function onScroll() {
      const scrollposition = pageYOffset;

      if (Math.abs(last - scrollposition) <= gap) return;
      else if (scrollposition > last || scrollposition <= headerheight) {
        nav.classList.remove("downdown");
      } else if (scrollposition < last) {
        nav.classList.add("downdown");
      }

      last = scrollposition;
    }
  }
  upnav();

  $(".sub_mn").css({ height: "0px" });
  $(".sub_nav").css({ height: "0px" });

  $("nav").mouseenter(function () {
    $(".sub_mn").stop().animate({ height: "270px" }, 200);
    $(".sub_nav").stop().animate({ height: "270px" }, 200);
    $(".sub_mn > li > a").css({ color: "#fff;" });
    $(".member li a").css({ color: "#000;" });
  });

  $(".sub_mn").mouseleave(function () {
    $(".sub_mn").stop().animate({ height: "0px" }, 200);
    $(".sub_nav").stop().animate({ height: "0px" }, 200);
    $(".sub_mn > li > a").css({ color: "#000;" });
    $(".member li a").css({ color: "#fff;" });
  });

  // $(document).mouseleave(function () {
  //   $(".sub_mn").stop().animate({ height: "0px" }, 200);
  //   $(".sub_nav").stop().animate({ height: "0px" }, 200);
  // });

  var lastScroll = 0;
  $(window).scroll(function (event) {
    var scroll = $(this).scrollTop();
    if (scroll > 1000) {
      //이벤트를 적용시킬 스크롤 높이
      $("nav").addClass("on");
      $("nav a").addClass("on1");
    } else {
      $("nav").removeClass("on");
      $("nav a").removeClass("on1");
    }
    lastScroll = scroll;
  });

  $(".family_sub").hide();
  $("#f_s li").click(function (e) {
    e.preventDefault();
    $(this).find("ul").stop().slideToggle();
  });

  $(window).fadeThis();

  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1500,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 50,
  });

  // 메인이미지 확대
  function aaa() {
    $("div").addClass("on");
    $(".main_img img")
      .css({ width: "0px", height: "0px" })
      .stop()
      .animate({ width: "100%", height: "640px" }, 800);
  }

  // kiosk 이미지 확대
  var key01 = 0;
  $(window).scroll(function () {
    var sct = $(document).scrollTop();
    if (sct >= 4100 && key01 == 0) {
      key01 = 1;
      $("div").addClass("on");
      $(".ki_img img")
        .css({ width: "0px", height: "0px" })
        .stop()
        .animate({ width: "550px", height: "750px" }, 800);
    }
  });
  // lot센서 왼쪽 이미지 확대
  var key02 = 0;
  $(window).scroll(function () {
    var sct = $(document).scrollTop();
    if (sct >= 5000 && key02 == 0) {
      key02 = 1;
      $("div").addClass("on");
      $(".lot_left img")
        .css({ width: "0px", height: "0px" })
        .stop()
        .animate({ width: "600px", height: "700px" }, 800);
    }
  });
  // lot센서 오른쪽 이미지 확대
  var key03 = 0;
  $(window).scroll(function () {
    var sct = $(document).scrollTop();
    if (sct >= 5100 && key03 == 0) {
      key03 = 1;
      $("div").addClass("on");
      $(".lot_right img")
        .css({ width: "0px", height: "0px" })
        .stop()
        .animate({ width: "600px", height: "700px" }, 800);
    }
  });
  // 자동화된 객실 관리 시스템 이미지 확대
  var key04 = 0;
  $(window).scroll(function () {
    var sct = $(document).scrollTop();
    if (sct >= 6400 && key04 == 0) {
      key04 = 1;
      $("div").addClass("on");
      $(".sys_img img")
        .css({ width: "0px", height: "0px" })
        .stop()
        .animate({ width: "650px", height: "700px" }, 800);
    }
  });
  // 객실현황 이미지 확대
  var key05 = 0;
  $(window).scroll(function () {
    var sct = $(document).scrollTop();
    if (sct >= 7250 && key05 == 0) {
      key05 = 1;
      $("div").addClass("on");
      $(".live_img img")
        .css({ width: "0px", height: "0px" })
        .stop()
        .animate({ width: "650px", height: "700px" }, 800);
    }
  });

});
