const openFormBtn = document.getElementById('openFormBtn');
const popupForm = document.getElementById('popupForm');
const closeFormBtn = document.getElementById('closeFormBtn');

const pashalko = document.getElementById('pashalko');
let sound = new Audio('img/sound.mp3')

const body = document.body;
const colors = ['#FFF', '#FFD700', '#FF6347', '#8A2BE2', '#20B2AA', '#FF4500', '#ADFF2F'];
let currentColorIndex = 0;

const dateTimeElement = document.getElementById('dateTime');


openFormBtn.addEventListener('click', function() {
    popupForm.style.display = 'flex'; 
});

closeFormBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});

pashalko.addEventListener('click', function() {
    sound.play()
})

body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        currentColorIndex--; 
        body.style.backgroundColor = colors[currentColorIndex];
        if (currentColorIndex === 0) currentColorIndex = colors.length;
    }
    else if (e.code === 'ArrowRight') {
        currentColorIndex++;
        if (currentColorIndex === colors.length) currentColorIndex = 0;
        body.style.backgroundColor = colors[currentColorIndex];
    }
});

function clearInputs() {
    var elements = document.getElementsByTagName("input");

    for (var i=0; i < elements.length; i++) {
        if (elements[i].type == "text" || elements[i].type == "email") {
            elements[i].value = "";
        }
    }
}

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();  
    dateTimeElement.textContent = dateTimeString; 
}

function getGreeting() {
    const currentHour = new Date().getHours();
    let greeting;
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    return greeting;
}

document.addEventListener("DOMContentLoaded", function() {
    const greetingMessage = getGreeting();
    document.getElementById("greeting").textContent = greetingMessage;
});

setInterval(updateDateTime, 1000);

updateDateTime();