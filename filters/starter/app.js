const productsContainer = document.querySelector('.products-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

let filterProducts = [...products];

const displayProducts = () => {
    // if statement

   productsContainer.innerHTML = filterProducts.map(({id,title,comapy, image, price}) => {
        return `<article class="product" data-id="${id}">
        <img src=${image}  class="product-img img">
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}$</span>
        </footer>
        </article>
        `
    })
    .join('')
}

form.addEventListener('keyup', () => {
    const inputValue = searchInput.ariaValueMax;
    filterProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue);
    })
    displayProducts();
})
