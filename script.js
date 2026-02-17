
function toggleMenu(){
document.getElementById("navMenu").classList.toggle("active");
}

// 點擊連結後自動收合
document.querySelectorAll("#navMenu a").forEach(link => {
link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
});
});