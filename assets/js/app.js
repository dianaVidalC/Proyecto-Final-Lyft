
var lastScrollTop=0;

window.addEventListener("scroll",function(){
    var currentScroll=window.pageYOffset || document.body.scrolltop;
    console.log(currentScroll);
    if(currentScroll>lastScrollTop){
      document.getElementById("nav-header").classList.add("header-in");
      document.getElementById("nav-header").classList.add("solid");
      document.getElementById("nav-header").style.opacity=1;
      document.getElementById("sing-up").classList.remove("oculto");
     if(currentScroll>115){
      document.getElementById("sing-up").classList.remove("oculto");
      }
    }else{
      document.getElementById("nav-header").classList.add("header-in");
      document.getElementById("nav-header").style.opacity=1;
    if(currentScroll<=3){
      document.getElementById("nav-header").classList.remove("header-in");
      document.getElementById("nav-header").classList.remove("solid");
      document.getElementById("sing-up").style.opacity="hidden";
    }
  }
  lastScrollTop=currentScroll;
},false);
