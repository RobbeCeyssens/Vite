import './styles/reset.css'
import './styles/style.css'


// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination], 
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    //scrollbar: {
      //el: '.swiper-scrollbar',
    //},
  }
);

const hamburgerMenu = document.querySelector("#hamburger__menu");
const lines = document.querySelectorAll("hamburger__icon");

/*hamburgerMenu.addEventListener("click", function() {
  lines[0].classList.toggle("cross1");
  lines[1].classList.toggle("cross2");
  lines[2].classList.toggle("hide");
});*/

async function getAddressFromCoordinates(longitude, latitude) {
  const endpoint = "mapbox.places";
  const url = `https://api.mapbox.com/geocoding/v5/${endpoint}/${-82.338083},${29.658244}.json`;
  const accessToken = "pk.eyJ1IjoibW9qb2ZseTYiLCJhIjoiY2xlbW5sajAyMGF6eTQyb2ZxaWxrZ3VtaiJ9.TYUliPOV5yi_slsmi1-bXg";

  const loaderElement = document.getElementById("loader");
  loaderElement.style.display = "block";
console.log(`${url}?access_token=${accessToken}`)
  try {
    const response = await fetch(`${url}?access_token=${accessToken}`);
    const data = await response.json();
    const address = data.features[0].place_name;
    loaderElement.style.display = "none";

    document.getElementById("address1").textContent = address;
    console.log(address);
    console.log(document.getElementById("address1"));
  } catch (error) {
    loaderElement.style.display = "none";
    console.error(error);
    return null;
  }
}
getAddressFromCoordinates();