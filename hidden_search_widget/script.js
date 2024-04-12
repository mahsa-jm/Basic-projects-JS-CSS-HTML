const search=document.querySelector('.search')
const btn=document.querySelector('.btn')
const input =document.querySelector('.input')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
});
//The toggle() method toggles between hide() and show() for the selected elements.
//This method checks the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible - This creates a toggle effect.
//Note: Hidden elements will not be displayed at all (no longer affects the layout of the page).
//Tip: This method can also be used to toggle between custom functions.

//The focus() method gives focus to an element (if it can be focused).