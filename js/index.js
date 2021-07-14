// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  const priceValue = parseFloat(price.innerText);
  const quantityValue = parseInt(quantity.value);

  const subTotal = product.querySelector('.subtotal span')
  const subTotalValue = priceValue * quantityValue
  subTotal.innerText = subTotalValue
  return subTotalValue
}

function calculateAll() {

  // Get list with all products
  const products = document.getElementsByClassName('product');
  const productsArr = [...products];

  let totalValue = 0;

  // Iterate & calc subtotal for each product
  productsArr.forEach( product => {
    totalValue += updateSubtotal(product);
  });

  // Update DOM
  const totalElm = document.querySelector('#total-value span');
  totalElm.innerText = totalValue;
  
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
