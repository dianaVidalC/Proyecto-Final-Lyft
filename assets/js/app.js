
var lastScrollTop=1;

window.addEventListener("scroll",function(){
    var currentScroll=window.pageYOffset || document.body.scrolltop;
    console.log(currentScroll);
    if(currentScroll>lastScrollTop){
      document.getElementById("nav-header").classList.add("solid");
      document.getElementById("nav-header").style.opacity=1;
      document.getElementById("sing-up").classList.remove("oculto");
     if(currentScroll>115){
      document.getElementById("sing-up").classList.remove("oculto");
      }
    }else{
      document.getElementById("nav-header").style.opacity=1;
    if(currentScroll<=115){
      document.getElementById("nav-header").classList.remove("solid");
      document.getElementById("sing-up").classList.add("oculto");
    }
  }
  lastScrollTop=currentScroll;
},false);

document.getElementById("numero").addEventListener("mousedown",function(){
  document.getElementById("nombre").classList.add("mostrar");
  document.getElementById("email").classList.add("mostrar");
  document.getElementById("city").classList.add("mostrar");
});
