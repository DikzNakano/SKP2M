
// =====================
// Register Database
// ====================

const SUPABASE_URL =
"https://wgredziepsnlqerorxzw.supabase.co";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndncmVkemllcHNubHFlcm9yeHp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMDU5MDIsImV4cCI6MjA5NTc4MTkwMn0.w9yjTQyxtfCA0zpw8ngsr1PdiGsOYU9KDLbPjtfeVQg";

try {

    const supabase =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    alert("client oke");

} catch(err){

    alert(
        "ERROR: " +
        err.message
    );

}

async function registerUser(){

    alert("registerUser jalan");

    const username =
    document.getElementById("username")
    ?.value.trim();

    const nomor =
    document.getElementById("phone")
    ?.value.trim();

    if(!username || !nomor){
        alert("Lengkapi data terlebih dahulu");
        return;
    }

    const { error } =
    await supabase
    .from("members")
    .insert([
        {
            username,
            nomor
        }
    ]);

    if(error){

        console.error(error);

        alert(
            "Gagal menyimpan data: " +
            error.message
        );

        return;
    }

    alert("Berhasil disimpan!");

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
