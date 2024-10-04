export let cart = [{
  productId:`e43638ce-6aa0-4b85-b27f-e1d07eb678c6`,
  quantity:2,
},{
  productId:`id2`,
  quantity:2,
}]





export function addtoCart(productId){
  let matchingItem;
cart.forEach((item)=>{
if(productId === item.productId){
  matchingItem = item
}
})

let QuantitySelector =  document.querySelector(`.js-quantity-selector-${productId}`)
let quantity = Number(QuantitySelector.value)

if(matchingItem){
matchingItem.quantity += quantity
}
else{
cart.push({
 productId: productId,
 quantity: quantity
})
}
}

export function removeFromCart(productId){
  let newcart = []

  cart.forEach((cartItem)=>{
     if(cartItem.productId !== productId ){
      newcart.push(cartItem)
     }
  })
  cart = newcart
}


export function calculateCartQuantity() {
let cartQuantity = 0;

cart.forEach((cartItem) => {
  cartQuantity += cartItem.quantity;
});

return cartQuantity;
}
