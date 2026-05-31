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

function loadUser(){

    const data =
    localStorage.getItem("skp2m_user");

    if(!data) return;

    const user =
    JSON.parse(data);

    document.getElementById(
        "register-box"
    ).style.display = "none";

    document.getElementById(
        "member-box"
    ).style.display = "block";

    document.getElementById(
        "member-name"
    ).innerText =
    `👤 ${user.username}`;
}

function registerUser(){

    const username =
    document.getElementById("username").value;

    const phone =
    document.getElementById("phone").value;

    if(!username || !phone){

        alert("Lengkapi data dulu!");
        return;

    }

    localStorage.setItem(
        "skp2m_user",
        JSON.stringify({
            username,
            phone
        })
    );

    window.location.href =
    "../index.html";

}

function logoutUser(){

    localStorage.removeItem(
        "skp2m_user"
    );

    location.reload();
}

window.onload = loadUser;

// =====================
// BackBtn
// =====================

const backBtn = document.getElementById("backBtn");

if(backBtn){

    const isVercel =
    location.hostname.endsWith(
    ".vercel.app"
    );

    if(isVercel){

        backBtn.href =
        "https://skp2m.vercel.app";

    }else{

        backBtn.href =
        "https://skp2m.my.id";

    }

}