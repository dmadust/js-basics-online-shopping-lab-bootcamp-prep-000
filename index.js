var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = { 
   itemName: item,
   itemPrice: Math.floor(1 + Math.random() * 100)
 }
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}


function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  var list = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++) {
    if (i === cart.length - 1) {
      list += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
    else {
      list += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
  }
  return list;
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
