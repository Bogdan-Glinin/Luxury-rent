const all = document.getElementById('all');
const allCars = document.getElementById('all-cars');

all.addEventListener('mouseover', () => {
    allCars.style.opacity = '1';
})

all.addEventListener('mouseout', () => {
    allCars.style.opacity = '0.1';
})