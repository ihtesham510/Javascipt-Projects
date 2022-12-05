function time() {
    let now = new Date()
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    if (hr > 12) {
        a = hr - 12;
    }

    let ses = document.getElementById("session");
 
    if (hr>=12) {
        ses.innerHTML = "PM"
    } else {
        ses.innerHTML = "AM"
    }
        
    
    document.getElementById("hr").innerHTML = a
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec

    
}
setInterval( time , 1000)