const popup = document.querySelector(".popup-image");
const simg11 = document.getElementById("A-Basic-Daily-Checklist-with-Color");
const simg12 = document.getElementById("A-Basic-Daily-Checklist-without-Color");
const simg21 = document.getElementById("A-Priority-Based-Daily-Checklist-With-Color");
const simg22 = document.getElementById("A-Priority-Based-Daily-Checklist-Without-Color");
const simg31 = document.getElementById("A-Basic-Weekly-Schedule-with-color");
const simg32 = document.getElementById("A-Basic-Weekly-Schedule-without-color");
const simg41 = document.getElementById("A-Basic-Monthly-Schedule-with-color");
const simg42 = document.getElementById("A-Basic-Monthly-Schedule-without-color");
const simg51 = document.getElementById("Goal-oriented-Monthly-Schedule-with-color");
const simg52 = document.getElementById("Goal-oriented-Monthly-Schedule-without-color");
const simg61 = document.getElementById("A-Basic-Yearly-Schedule-with-color");
const simg62 = document.getElementById("A-Basic-Yearly-Schedule-without-color");
const simg71 = document.getElementById("A-Basic-School-Week-Schedule-with-color");
const simg72 = document.getElementById("A-Basic-School-Week-Schedule-without-color");
let windowWidth = window.innerWidth;
check();
function check(){
if(windowWidth > 600){
    document.getElementById("popup-img").style.width = '700px';
}
else{
    document.getElementById("popup-img").style.width = '300px';
}
}
    simg11.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg11.getAttribute('src');
    });
    simg12.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg12.getAttribute('src');
    });
    simg21.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg21.getAttribute('src');
    });
    simg22.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg22.getAttribute('src');
    });
    simg31.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg31.getAttribute('src');
    });
    simg32.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg32.getAttribute('src');
    });
    simg41.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg41.getAttribute('src');
    });
    simg42.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg42.getAttribute('src');
    });
    simg51.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg51.getAttribute('src');
    });
    simg52.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg52.getAttribute('src');
    });
    simg61.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg61.getAttribute('src');
    });
    simg62.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg62.getAttribute('src');
    });
    simg71.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg71.getAttribute('src');
    });
    simg72.onclick = (()=>{
        check();
        popup.style.display = 'block';
        document.querySelector("#popup-img").src = simg72.getAttribute('src');
    });
    let zoomValue = 100; 
window.addEventListener("keydown", closepopup)
function closepopup(event){
    key_pressed = event.key;
    if(key_pressed == "Escape"){
        popup.style.display = 'none';
        zoomValue = 100;
        document.getElementById("popup-img").style.width = '700px';
    }
}
document.querySelector(".popup-image span").onclick = () =>{
    popup.style.display = 'none';
    zoomValue = 100;
    document.getElementById("popup-img").style.width = '700px';
};

function zoom(element){
    if(windowWidth > 600){
    if(zoomValue == 100){
        element.style.width = '800px';
        zoomValue += 20;
    }
    else if(zoomValue == 120){
        element.style.width = '900px';
        zoomValue += 20;
    }
    else if(zoomValue == 140){
        element.style.width = '1000px';
        zoomValue += 20;
    }
    else if(zoomValue == 160){
        element.style.width = '1100px';
        zoomValue += 20;
    }
    else if(zoomValue == 180){
        element.style.width = '1200px';
        element.style.cursor = 'zoom-out';
        zoomValue += 20;
    }
    else if(zoomValue == 200){
        element.style.width = '700px';
        element.style.cursor = 'zoom-in';
        zoomValue -= 100;
    }
}
else{
    if(zoomValue == 100){
        element.style.width = '400px';
        zoomValue += 20;
    }
    else if(zoomValue == 120){
        element.style.width = '500px';
        zoomValue += 20;
    }
    else if(zoomValue == 140){
        element.style.width = '600px';
        zoomValue += 20;
    }
    else if(zoomValue == 160){
        element.style.width = '700px';
        zoomValue += 20;
    }
    else if(zoomValue == 180){
        element.style.width = '800px';
        element.style.cursor = 'zoom-out';
        zoomValue += 20;
    }
    else if(zoomValue == 200){
        element.style.width = '300px';
        element.style.cursor = 'zoom-in';
        zoomValue -= 100;
    }
}
}