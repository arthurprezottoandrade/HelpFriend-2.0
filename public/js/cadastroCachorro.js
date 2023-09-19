document.getElementById("menuBtn").onclick = function() {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("logoPrincipal").style.marginLeft = "220px"
};
  
document.getElementById("closeBtn").onclick = function() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("logoPrincipal").style.marginLeft = "20px"
};
