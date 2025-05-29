// custom mật khẩu
const baseAccount = {
    name : "ChuThuyDuong",
    pass : "22052022"
}

const getClick = document.getElementById("login-button");
getClick.addEventListener("click", function(){
    getname = document.getElementById("name");
    getpass = document.getElementById("pass");

    if (getname.value.trim() === baseAccount.name && getpass.value.trim() === baseAccount.pass) {
        window.location.href = "main.html";
    } else {
        getpass.value = "";
        Swal.fire({
            icon: "error",
            title: "Wrong password",
            text: "Are you the third wheel, or have you fallen out of love?",
            timer: 3000,
            showConfirmButton: false
        });
    }
    
});

// ảnh custom ở đây
const clickPic = document.querySelector(".img-container");
clickPic.addEventListener("click", function(){
    Swal.fire({
        title: "Gửi tặng Dương",
        text: "Chiếc web này được đặc biệt làm ra cho em.",
        imageUrl: "Bbi.png",
        imageWidth: 378,
        imageHeight: 300,
        imageAlt: "Us"
      });
});