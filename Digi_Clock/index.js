const hours = document.getElementById("hour");
const mins = document.getElementById("minutes");
const secs = document.getElementById("seconds");
const amPm = document.getElementById("ampm");

const clock = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h= h<10 ? "0"+h : h;
    m= m<10 ? "0"+m : m;
    s= s<10 ? "0"+s : s;

    hours.innerText = h;
    mins.innerText = m;
    secs.innerText = s;
    amPm.innerText = ampm;
    setTimeout(() => {
        clock();
    }, 1000)

}

clock();