document.getElementById("toggleFooter").addEventListener("click", function () {
    const footer = document.getElementById("myFooter");
    const toggleButton = document.getElementById("toggleFooter");
    
    if (footer.style.height === "0px" || !footer.style.height) {
        footer.style.height = "40px"; 
        footer.style.opacity = "1"; 
        toggleButton.textContent = "Sembunyikan"; 
    } else {
        footer.style.height = "0";
        footer.style.opacity = "0"; 
        toggleButton.textContent = "Tampilkan Referensi"; 
    }
});