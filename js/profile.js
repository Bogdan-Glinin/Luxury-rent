const profile = document.getElementById('profile');
const rent = document.getElementById('rent');

const rentWrapper = document.querySelector('.wrapper_rent');
const profileWrapper = document.querySelector('.wrapper_profile');

rent.onclick = function () {
    rentWrapper.style.display = "block";
    profileWrapper.style.display = "none";
}

profile.onclick = function () {
    rentWrapper.style.display = "none";
    profileWrapper.style.display = "block";
}
