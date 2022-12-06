const mark = document.getElementById('mark');
const markFilter = document.getElementById('mark-filter');
const items = document.getElementById('cars-filter');
const AudiCheckbox = document.getElementById('Audi');
const cars = document.querySelectorAll(".allCars-item");

mark.addEventListener("click", ()=> {

    if(markFilter.style.display == "flex"){
        markFilter.style.display = "none";
        items.style.top = "0px";
    }
    else {
    markFilter.style.display = "flex";
    items.style.top = "-164px";
    }
});

AudiCheckbox.onclick = function(){
    if(!AudiCheckbox.checked){
        cars.forEach(function(e4po4mack){
            if(!e4po4mack.classList.contains('audi')){
                e4po4mack.style.display = 'block';
            }
        })
    }
    else{
        cars.forEach(function(e4po4mack){
            if(!e4po4mack.classList.contains('audi')){
                e4po4mack.style.display = 'none';
            }
        })
    }
    
}



