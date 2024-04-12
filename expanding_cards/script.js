const panels = document.querySelectorAll('.panel'); //we want all the panels

panels.forEach((panel) => {
    panel.addEventListener ('click' ,() => {
        removeAciveClasses()
        panel.classList.add('active'); //active is still on other ones so we ujse code above
    })

}) //foreach : high order array method,take in a function as an argument,it's gonna loop throgh each panel
function removeAciveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })

}