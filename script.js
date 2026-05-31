// =====================
// MENU
// =====================

function toggleMenu(){
    const menu = document.getElementById("menu");

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
function toggleMenu(){
    const menu = document.getElementById("menu");

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

// =====================
// REGISTER CHECK
// =====================

window.addEventListener("load", () => {

    const user =
    localStorage.getItem("skp2m_user");

    const isVercel =
    location.hostname.endsWith(
    ".vercel.app"
    );

    if(!user && !isVercel){

        window.location.href =
        "/register/register.html";

    }

});