const nextYear = new Date().getFullYear() + 1;
const targetDate = new Date(`${nextYear}-01-01T00:00:00`);
const newYaer = document.getElementById("newYear");
newYaer.innerHTML = nextYear;


//  Time method to update the countdown
function timeUpdate(){
    const now = new Date().getTime();
    const distance = new Date(targetDate.toLocaleString('en-US', { timeZone: 'Asia/Almaty' })) - now;
    // Time calculations for days, hours, minutes and seconds
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in the HTML
    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;

    if(distance < 0){
        clearInterval(timeInterval);
    }
}

const timeInterval = setInterval(timeUpdate, 1000);

timeUpdate();

const topButton = document.getElementById("returnToTop");

window.onscroll = ()=>{
    if(topButton){
        if(document.body.scrollTop >300 || document.documentElement.scrollTop > 300){
            topButton.style.opacity = "1";
        }else{
            topButton.style.opacity = "0";
        }
    }
}

function topFunction() {
    window.location.href="#header";
}