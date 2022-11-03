// API
const count = 10;
const apiKey = "HXLi1Js4Tqh-7XZD-JM1Zyz1nTxZtwZWAe4T8W4QhIs";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let images = [];

let imagesLoaded = 0;
let totalImages = 10;
let readyToLoad = false;

// DOM elements
const container = document.querySelector(".js-container");
const browserWindowHeight = window.innerHeight;

function loadImages() {
    imagesLoaded++;
    if(imagesLoaded === totalImages) readyToLoad = true;
}

// get data from API
async function getData() {
    try {
        const data = await fetch(apiUrl);
        if(data.status !== 200) {
            console.log("Something went wrong " + data.status);
        }
        const images = await data.json();
        images.map(item => {
            const image = document.createElement("img");
            image.setAttribute("src", item.urls.regular);
            image.addEventListener("load", loadImages);
            container.appendChild(image);
        });
        
    } catch(error) {
        console.log("Error in try/catch: " + error);
    } 
}
getData();

window.addEventListener("scroll", () => {
    if(browserWindowHeight + window.scrollY >= document.body.offsetHeight && readyToLoad) {
        // getData();
    }
});