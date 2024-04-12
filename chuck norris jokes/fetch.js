const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img')
const URL = 'https://api.chucknorris.io/jokes/random';


btn.addEventListener('click', () => {
  fetch(URL)
  .then((resp) => resp.json()).then(data => displayData(data))
  .catch((err) => console.log(err))
});
// if we performing a GET request with fetch it's a defaualt req so we just pass the url


function displayData({value : joke}) {
    img.classList.add('shake-img');
    // const {value : joke} = data;
    content.textContent = joke;
    const random = Math.random()*1000;
    setTimeout(() => {
        img.classList.remove('shake-img');
    },random)
}
