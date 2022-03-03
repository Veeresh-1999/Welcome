function openNav() {
    document.getElementById("mobile_menu").style.width="70%";
}

function closeNav() {
    document.getElementById("mobile_menu").style.width="0";
}

/*Contact info*/
function openNav1() {
    document.getElementById("myNav1").style.height = "12%";
  }
  
  function closeNav1() {
    document.getElementById("myNav1").style.height = "0%";
  }
  
  var loader = document.getElementById("preloader");
  window.addEventListener("load", function(){
      loader.style.display = "none";
  })

  var loader1 = document.getElementById("preloader1");
  window.addEventListener("load", function(){
      loader1.style.display = "none";
  })