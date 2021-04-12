let plus = document.querySelectorAll(".count1");
let moin = document.querySelectorAll(".count2");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerHTML++;
    totalPrice();
  });
  moin[i].addEventListener("click", function () {
    if (moin[i].previousElementSibling.innerHTML > 0) {
      moin[i].previousElementSibling.innerHTML--;
      totalPrice();
    } else alert("You can't get a negative number");
  });
}
//heart button
let eheart = document.querySelectorAll(".fas.fa-heart");
for (let i = 0; i < eheart.length; i++) {
  eheart[i].addEventListener("click", function () {
    eheart[i].classList.contains("empty-heart")
      ? eheart[i].classList.toggle("full-heart")
      : null;
  });
}

var removeCartItemButton = document.getElementsByClassName(" btn-close");

for (var i = 0; i < removeCartItemButton.length; i++) {
  let button = removeCartItemButton[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    let item1 = buttonClicked.parentElement.parentElement;
    let item2 = item1.nextElementSibling;
    let item3 = item2.nextElementSibling;
    let item4 = item3.nextElementSibling;
    item1.remove();
    item2.remove();
    item3.remove();
    item4.remove();
    totalPrice();
  });
}

/*
var quantityInputs= document.getElementsByClassName("quantity");

for(var i=0 ; i<quantityInputs.length;i++){
let input = quantityInputs[i]; 
input.addEventListener("change", quantityChanged)

}
function quantityChanged(event){
    var input=event.target
    if(isNaN(input.value) || input.value<= 0){
        updateCartTotal( )
    }
    
}
*/

console.log("quantity:", document.querySelectorAll(".quantityElement"));

function totalPrice() {
  let productPrice = document.getElementsByClassName("price");
  let productQuantity = document.querySelectorAll(".quantityElement");
  console.log("productPrice:", productPrice);
  let sum = 0;
  for (let i = 0; i < productQuantity.length; i++) {
    sum += productPrice[i].innerHTML * productQuantity[i].innerHTML;
  }
  return (document.querySelector("#total").innerText = sum);
}
