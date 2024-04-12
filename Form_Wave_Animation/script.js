const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerHTML
     .split('') //split the letters into an array
     .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)// maping it to creat an array with span around it
     .join('') //join will turn it back to string
})
// use the index which start at 0 and * 50, pas ba timeaye mokhtalef mian- 0*50-1*50-2*50 ... = 0, 50,100,...