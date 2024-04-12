const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length //how many slides do we have,we ant all the divs in slide right,all divs with backgroundimages
//we use the .length property bc we only want the length that it will give us 4 in this case

//now we wanna have an active slide index,they're positioned to be on top ofeach othe so we wanna know which ones are in display now
let activeSlideIndex = 0  //we use to get the index of active slide
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh` //we use negative bc we want it on top-(jquery)

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))
//they both gonna call the same function and just gonna get passed the different argument

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight //andaze safe client 
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) { //check if we are at the beginning {
            activeSlideIndex = slidesLength - 1 //to go to the last slide index
        }
    }
    //we need to add a transform and translate to y-axis basically move it up and down
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)` //negative cause we want to go up
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)` //it's positive cause we want it to go the other way
    
} 

