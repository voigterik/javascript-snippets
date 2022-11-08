import { api } from "./config.js";

// API
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${api.key}&count=${count}`;

let images = [];

// variables to load more images
let imagesLoaded = 0;
let totalImages = 10;
let readyToLoad = false;

// DOM elements
const container = document.querySelector(".js-container");
const browserWindowHeight = window.innerHeight;

// load more images
function loadImages() {
    imagesLoaded++;
    if(imagesLoaded === totalImages) readyToLoad = true;
}

// set attributes for images
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key])
    } 
}

// get data from API
async function getData() {
    try {
        const data = await fetch(apiUrl);
        if(data.status !== 200) {
            console.log("Something went wrong " + data.status);
        }
        const images = await data.json();
        console.log(images);
        images.map(item => {
            const image = document.createElement("img");
            setAttributes(image, {"src": item.urls.regular, "alt": item.description});
            container.appendChild(image);
        });
        
    } catch(error) {
        console.log("Error in try/catch: " + error);
    } 
}
getData();

window.addEventListener("scroll", () => {
    if(browserWindowHeight + window.scrollY >= document.body.offsetHeight && readyToLoad) {
        getData();
    }
});