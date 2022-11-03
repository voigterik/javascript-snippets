const bar = document.querySelector(".js-bar");
const container = document.querySelector(".js-container");

// height of content
const containerHeight = container.offsetHeight;

// height of browser window
const browserHeight = document.documentElement.clientHeight;

// set progress bar width to 0
bar.style.width = 0;

// when scrolling
window.addEventListener("scroll", () => {

    // divide distance scrolled by container height
    // subtract brower window height to avoid progress bar stopping short of window width
    // multiply by 100 for percentage
    let distance = Math.floor((window.pageYOffset / (containerHeight - browserHeight)) * 100);

    // apply width to progress bar
    bar.style.width = `${distance}%`;
});