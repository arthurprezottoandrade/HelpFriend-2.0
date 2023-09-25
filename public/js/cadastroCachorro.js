document.getElementById("menuBtn").onclick = function() {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("logoPrincipal").style.marginLeft = "220px"
};

document.getElementById("closeBtn").onclick = function() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("logoPrincipal").style.marginLeft = "20px"
};

document.getElementById("foto").addEventListener("change", function() {
    // Verifique se o arquivo foi carregado
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            // Atualize a imagem
            document.getElementById("dogImage").src = e.target.result;
        };
        
        reader.readAsDataURL(this.files[0]);
    }
});