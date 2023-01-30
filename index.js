// store button element in constant variable
const btnEl = document.querySelector(".btn");

// add event listener to button to detect when we hover over it
btnEl.addEventListener("mouseover", (event)=>{
    // get relative position of cursor to button aka furthest left is start x=0 and top is y=0
    const x = (event.pageX-btnEl.offsetLeft);
    const y = (event.pageY-btnEl.offsetTop);

    // set positioning of css animation when we hover over button to the relative values we got above
    // this allows animation to start from where you hover
    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");

});
