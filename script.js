// =====================
// AUTO THEME
// =====================

if(
    location.pathname === "/" ||
    location.pathname.endsWith("/index.html")
){

    const themes = [

        {
            color:"#a020f0",
            glow:"rgba(160,32,240,.8)",
            soft:"rgba(160,32,240,.5)"
        },

        {
            color:"#00bfff",
            glow:"rgba(0,191,255,.8)",
            soft:"rgba(0,191,255,.5)"
        },

        {
            color:"#ff4d4d",
            glow:"rgba(255,77,77,.8)",
            soft:"rgba(255,77,77,.5)"
        },

        {
            color:"#00cc66",
            glow:"rgba(0,204,102,.8)",
            soft:"rgba(0,204,102,.5)"
        }

    ];

    let index = 0;

    setInterval(() => {

    const logo =
    document.querySelector(".logo");

    logo.style.opacity = "0.2";

    setTimeout(() => {

        index =
        (index + 1) %
        themes.length;

        document.documentElement
        .style.setProperty(
            "--theme-color",
            themes[index].color
        );

        document.documentElement
        .style.setProperty(
            "--theme-glow",
            themes[index].glow
        );

        document.documentElement
        .style.setProperty(
            "--theme-glow-soft",
            themes[index].soft
        );

        logo.style.opacity = "1";

    }, 800);

}, 4000);

}

// =====================
// Register Database
// ====================

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
    "https://skp2m.my.id/";

}

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

const user =
localStorage.getItem("skp2m_user");

const isVercel =
location.hostname.endsWith(
".vercel.app"
);

const isRegisterPage =
location.pathname.includes(
"/register/"
);

if(
    !user &&
    !isVercel &&
    !isRegisterPage
){

    location.replace(
    "/register/register.html"
    );

}

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

function logoutUser(){

    localStorage.removeItem(
        "skp2m_user"
    );

    location.reload();
}

window.onload = loadUser;
window.registerUser = registerUser;
window.logoutUser = logoutUser;
// =====================
// BackBtn
// =====================
