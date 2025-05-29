function calculateTotalTime(startDateString) {
    let startDate = new Date(startDateString);
    let currentDate = new Date();
    console.log(currentDate);

    let timeDiff = currentDate - startDate;
    let totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return {
        days: totalDays
    };
}
window.onload = function () {
    let timeCounted = calculateTotalTime("2022-05-22");
    document.getElementById("day").textContent = timeCounted.days+1;
};
const img1 = [
    "Khanh/1.jpg",
    "Khanh/2.jpg",
    "Khanh/3.jpg"
];
let count1 = 0;
document.getElementById("pic1").addEventListener("click", function(){
    count1++;
    if(count1 >= img1.length) count1 = 0;
    document.getElementById("pic1").src = img1[count1];
});

const img2 = [
    "Duong/1.jpg",
    "Duong/2.jpg",
    "Duong/3.jpg",
    "Duong/4.jpg",
    "Duong/5.jpg",
    "Duong/6.jpg",
    "Duong/7.jpg",
    "Duong/8.jpg",
    "Duong/9.jpg",
    "Duong/10.jpg",
    "Duong/11.jpg",
    "Duong/12.jpg",
    "Duong/13.jpg",
    "Duong/14.jpg",
    "Duong/15.jpg",
    "Duong/16.jpg",
    "Duong/17.jpg"
];
let count = 0;
document.getElementById("pic2").addEventListener("click", function(){
    count++;
    if(count >= img2.length) count = 0;
    document.getElementById("pic2").src = img2[count];
});

document.querySelector(".box").addEventListener("click",function(){
    fetch("MyLetter.txt")
    .then(Response => Response.text())
    .then(text => {
        Swal.fire({
            imageUrl: "together.jpg",
            title: "Gửi em",
            imageWidth: 300,
            imageHeight: 300,
            html: text.replace(/\n/g, "<br>"),
            customClass:{
                popup: 'swal-left-align' 
            },
            confirmButtonText : "Click nếu bé cũng yêu anh",
        });
    })
    .catch(error => {
        Swal.fire({
            title: "Error",
            text: "Cannot load file!",
            icon: "error"
        });
    });
});

document.querySelector(".heart").addEventListener("click",function(){
    startCountdown();
});

function startCountdown() {
    let timeLeft = 3; // Số giây đếm ngược
    
    Swal.fire({
        title: "Bắt đầu đếm ngược!",
        html: `<strong><span id="countdown">${timeLeft}</span></strong> giây`,
        timer: timeLeft * 1000, // Thời gian chạy
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            const countdownEl = document.getElementById("countdown");
            const timerInterval = setInterval(() => {
                timeLeft--;
                countdownEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                }
            }, 1000);
        }
    }).then(() => {
        window.location.href = "heart.html";
    });
}