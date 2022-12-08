var hr = 0;
var min =  0;
var sec =  0;
var milisec =  0;

var hrout = 0;
var minout =  0;
var secout =  0;
var milisecout =  0;



var x;
var spst = 0;

function time() {
    spst = spst + 1;
    if (spst === 1) {
        document.getElementById('start').innerHTML = 'Stop';
        start()
    } else if (spst === 2) {
        document.getElementById('start').innerHTML = 'Start'
        stop()
        spst = 0;
    }
        
    
}


function start() {
    x = setInterval(() => {
        
        milisecout = cleartime(milisec);
        secout = cleartime(sec);
        minout = cleartime(min);
        hrout = cleartime(hr);
        
        document.getElementById('milisec').innerHTML = milisecout;
        document.getElementById('sec').innerHTML = secout;
        document.getElementById('min').innerHTML = minout;
        document.getElementById('hr').innerHTML = hrout;
        
        
        ++milisec;
        if (milisec > 59) {
            milisec = 0;
            ++sec;
        }
        if (sec > 59) {
            sec = 0;
            ++min;
        }
        if (min > 59) {
            min = 0;
            ++hr;
        }
    }, 18);
}

function stop() {
    clearInterval(x);
}


function cleartime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

function reset() {
    hr = 0;
    min =  0;
    sec =  0;
    milisec = 0;
    
    document.getElementById('milisec').innerHTML     ="00"; 
    document.getElementById('sec').innerHTML         ="00"; 
    document.getElementById('min').innerHTML         ="00"; 
    document.getElementById('hr').innerHTML          ="00"; 
}





document.getElementById('start').addEventListener("click", time);
document.getElementById('reset').addEventListener("click", reset);

