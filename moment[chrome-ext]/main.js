//DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

const showAmPm = true; 

//Show Time
function showTime(){
    let today = new Date(), 
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //Set AM or PM
    const amPm = hour >=12 ?"PM" : "AM";

    //12hr Format
    hour = hour % 12 || 12; 

    //Output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span></span>
        ${amPm}`;

    setTimeout(showTime, 1000); 
}

//Add Zeros - helper for show time 
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : "") + n; 
}

//Set Background and Greeting
function setBgGreet(){
    let today = new Date(); 
    let hour = today.getHours(); 

    if (hour > 6 && hour < 12){
        //morning 
        document.body.style.backgroundImage = "url('img/morning2.jpg')";
        document.body.style.backgroundSize = "cover"; 
        document.body.style.backgroundPosition = "center center"; 
        greeting.textContent = "Good Morning, "
    } else if (hour < 18){
        //afternoon
        document.body.style.backgroundImage = "url('img/afternoon2.jpg')";
        document.body.style.backgroundSize = "cover"; 
        document.body.style.backgroundPosition = "center center"; 
        greeting.textContent = "Good Afternoon, "
    } else if (hour < 20){
        //evening 
        document.body.style.backgroundImage = "url('img/evening.jpg')";
        document.body.style.backgroundSize = "cover"; 
        document.body.style.backgroundPosition = "center center"; 
        greeting.textContent = "Good Evening, "
    } else{
        document.body.style.backgroundImage = "url('img/night.jpg')";
        document.body.style.backgroundSize = "cover"; 
        document.body.style.backgroundPosition = "center center"; 
        greeting.textContent = "Good Night, ";
        document.body.style.color = "white"; 
    }
}

//Get Name
function getName(){
    if (localStorage.getItem('name') === null){
        name.textContent = "Beautiful"
    } else{
        name.textContent = localStorage.getItem("name"); 
    }
}

//set Name
function setName(e){
    if (e.type === "keypress"){
        if (e.which === 13 || e.keycode === 13){
            localStorage.setItem("name", e.target.innerText); 
            name.blur(); 
        }
    } else {
        localStorage.setItem("name", e.target.innerText)
    }

}

function setFocus(e){
    if (e.type === "keypress"){
        if (e.which === 13 || e.keycode === 13){
            localStorage.setItem("focus", e.target.innerText); 
            focus.blur(); 
        }
    } else {
        localStorage.setItem("focus", e.target.innerText)
    }

}

//Get Focus
function getFocus(){
    if (localStorage.getItem('focus') === null){
        focus.textContent = "Be Happy!"
    } else{
        focus.textContent = localStorage.getItem("focus"); 
    }
}

// $("#name").on("keypress", function(event){
//     if (event.keycode === 13){
//         localStorage.setItem("name", $("#name").val()); 
//         name.blur(); 
//     }
//     else{
//         localStorage.setItem("name", $("#name").val()); 
//     }
// })

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName); 

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus); 

//run
showTime(); 
setBgGreet(); 
getName(); 
getFocus(); 