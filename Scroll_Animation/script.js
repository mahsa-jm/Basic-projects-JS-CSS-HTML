const boxes=document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
//we want to fire off an event when we scroll.
//window The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
checkBoxes();
function checkBoxes(){ //we wanna know where at which poin we want them to start to come in the page
    const triggerBottom = window.innerHeight / 5 * 4
    //we want it to be a little less than the innerheight
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
//The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
//The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
//in here we wanna know where the top of the box is