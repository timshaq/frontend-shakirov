$(document).ready(function(){$(".anc_1").on("click",function(n){n.preventDefault();var o=$(this).attr("href"),i=$(o).offset().top;$("body,html").animate({scrollTop:i},i/1.5)}),$(".anc_2").on("click",function(n){n.preventDefault();var o=$(this).attr("href"),i=$(o).offset().top;$("body,html").animate({scrollTop:i},i/1.5)}),$(".anc_3").on("click",function(n){n.preventDefault();var o=$(this).attr("href"),i=$(o).offset().top;$("body,html").animate({scrollTop:i},i/1.5)})}),$(function(){$(".navigation__img_menu-burger").click(function(){$(".header__navigation-mobile").fadeIn().css({display:"flex"}),$(".navigation__img_menu-burger").css({display:"none"}),$(".navigation__img_menu-close").css({display:"block"})}),$(".navigation__img_menu-close").click(function(){$(".header__navigation-mobile").fadeOut(),$(".navigation__img_menu-close").css({display:"none"}),$(".navigation__img_menu-burger").css({display:"block"})})}),window.onresize=function(){1024<=window.innerWidth?($(".navigation__img_menu-burger").css({display:"none"}),$(".navigation__img_menu-close").css({display:"none"}),$(".header__navigation-mobile").css({display:"none"})):$(".navigation__img_menu-burger").css({display:"block"})},$(function(){function n(){var n=window.scrollY;console.log(n),$("html").css("overflow","hidden")}function o(){$("html").css({"overflow-y":"scroll","overflow-x":"hidden"})}$(function(){$(".tel-mask").mask("+7 (999) 999-99-99")}),$(".about__button_action").click(function(){$(".inform-container").fadeIn(400,n),$(".inform-container").css({display:"flex",overflow:"auto"})}),$(".inform-container").click(function(n){n.target==this&&$(this).fadeOut(400,o)}),$(".informer__image").click(function(n){$(".inform-container").fadeOut(400,o)}),$(".my-skills__button_action").click(function(){$(".inform-container").fadeIn(400,n),$(".inform-container").css({display:"flex",overflow:"auto"})}),$(".inform-container").click(function(n){n.target==this&&$(this).fadeOut(400,o)}),$(".informer__image").click(function(n){$(".inform-container").fadeOut(400,o)}),$(".button_call").click(function(){$(".call-container").fadeIn(400,n),$(".call-container").css({display:"flex",overflow:"auto"})}),$(".call-container").click(function(n){n.target==this&&$(this).fadeOut(400,o)}),$(".caller__image").click(function(n){$(".call-container").fadeOut(400,o)}),$("#small-call-me").click(function(){$(".call-container").fadeIn(400,n),$(".call-container").css({display:"flex",overflow:"auto"})}),$(".call-container").click(function(n){n.target==this&&$(this).fadeOut(400,o)}),$("#order-project").click(function(){$(".order-container").fadeIn(400,n),$(".order-container").css({display:"flex",overflow:"auto"})}),$(".order-container").click(function(n){n.target==this&&$(this).fadeOut(400,o)}),$(".orderer__image").click(function(n){$(".order-container").fadeOut(400,o)}),$("#submit-informer").on("click",function(){var n=$(".informer__form").serialize();console.log(n),$.post("mail-inform.php",n,function(n){alert("Ваша заявка отправлена!"),$(".inform-container").fadeOut(400,o)})}),$("#submit-order").on("click",function(){var n=$(".orderer__form").serialize();console.log(n),$.post("mail.php",n,function(n){alert("Ваша заявка отправлена!"),$(".order-container").fadeOut(400,o)})}),$("#submit-call").on("click",function(){var n=$(".caller__form").serialize();console.log(n),$.post("mail.php",n,function(n){alert("Ваша заявка отправлена!"),$(".call-container").fadeOut(400,o)})})}),$(".examples__album").slick({slidesToShow:3,infinite:!0,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,dots:!1,arrows:!0,responsive:[{breakpoint:1367,settings:{slidesToShow:2,infinite:!0,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,dots:!1,arrows:!0}},{breakpoint:1025,settings:{slidesToShow:2,infinite:!0,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,dots:!0,arrows:!1}},{breakpoint:998,settings:{slidesToShow:1,infinite:!0,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,dots:!0,arrows:!1}}]});