// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
 

  let subtPrice = price * quantity;
  subtotal.innerHTML = subtPrice;
  return subtPrice
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let total=[]
  for(const prod of products){//why forEach and map doesnt work?
    let subtotals = updateSubtotal(prod)
    total.push(subtotals)
  } 

  let sumTotal = (total.reduce((acc,cur)=>acc+cur))
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = sumTotal;

  console.log(sumTotal)
  
  // ITERATION 3
  //... your code goes here
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
