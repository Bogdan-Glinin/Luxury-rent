const mark = document.getElementById('mark');
const markFilter = document.getElementById('mark-filter');
const items = document.getElementById('cars-filter');
// const AudiCheckbox = document.getElementById('Audi');
// const cars = document.querySelectorAll(".allCars-item");
const filter = document.querySelectorAll('.filter-menu');


// mark.addEventListener("click", ()=> {

//     if(markFilter.style.display == "flex"){
//         markFilter.style.display = "none";
//         items.style.top = "0px";
//     }
//     else {
//         markFilter.style.display = "flex";
//         items.style.top = "-164px";
//     }
// });

mark.onclick = function(){
    if(markFilter.style.display == "flex"){
            markFilter.style.display = "none";
            items.style.top = "0px";
    }
    else{
        markFilter.style.display = "flex";
    items.style.top = "-164px";
    filter.forEach(function(carMark){
        if(!carMark.classList.contains('mark')){
            carMark.style.display = 'none';
        }
    })
    }
}

const power = document.getElementById('power');
const powerFilter = document.getElementById('power-filter');

power.onclick = function(){
    if(powerFilter.style.display == "flex"){
            powerFilter.style.display = "none";
            items.style.top = "0px";
    }
    else{
        powerFilter.style.display = "flex";
        items.style.top = "-140px";
        filter.forEach(function(carPower){
            if(!carPower.classList.contains('power')){
                carPower.style.display = 'none';
        }
    })
    }
}

const color = document.getElementById('color');
const colorFilter = document.getElementById('color-filter');

color.onclick = function(){
    if(colorFilter.style.display == "flex"){
            colorFilter.style.display = "none";
            items.style.top = "0px";
    }
    else{
        colorFilter.style.display = "flex";
        items.style.top = "-140px";
        filter.forEach(function(carColor){
            if(!carColor.classList.contains('color')){
                carColor.style.display = 'none';
        }
    })
    }
}

const price = document.getElementById('price');
const priceFilter = document.getElementById('price-filter');

price.onclick = function(){
    if(priceFilter.style.display == "block"){
            priceFilter.style.display = "none";
            items.style.top = "0px";
    }
    else{
        priceFilter.style.display = "block";
        items.style.top = "-52.5px";
        filter.forEach(function(carprice){
            if(!carprice.classList.contains('price')){
                carprice.style.display = 'none';
        }
    })
    }
}

// AudiCheckbox.onclick = function(){
//     if(!AudiCheckbox.checked){
//         cars.forEach(function(e4po4mack){
//             if(!e4po4mack.classList.contains('audi')){
//                 e4po4mack.style.display = 'block';
//             }
//         })
//     }
//     else{
//         cars.forEach(function(e4po4mack){
//             if(!e4po4mack.classList.contains('audi')){
//                 e4po4mack.style.display = 'none';
//             }
//         })
//     }
    
// }



