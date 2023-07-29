const btnPlusTag = document.getElementsByClassName("plus");
const btnMinusTag = document.getElementsByClassName("minus");
var btnLikeTag = document.getElementsByClassName("like");
var btnDeleteTag = document.getElementsByClassName("delete");
var checkboxTag = document.getElementsByClassName("check");
var TotalTag = document.getElementById("total");

for (var i = 0; i < checkboxTag.length; i++) {
    // to select items to have the total price
    checkboxTag[i].addEventListener("click", totalItemSelected);
}

function totalItemSelected(event) {
    var checkboxEltTag = event.target;
    var checkboxEltValue = event.target.checked;
    var totalValue = Number(TotalTag.innerHTML);
    var PriceChecked = checkboxEltTag.parentElement.parentElement.querySelector(".price");
    var EltPriceValue = Number(PriceChecked.innerHTML);
    var btnPlus = checkboxEltTag.parentElement.parentElement.querySelector(".plus");
    var btnMinus = checkboxEltTag.parentElement.parentElement.querySelector(".minus");
    if (checkboxEltValue == true) {
        totalValue += EltPriceValue;
        btnPlus.setAttribute("disabled", true);
        btnMinus.setAttribute("disabled", true);
    }
    else {
        totalValue -= EltPriceValue;
        btnPlus.removeAttribute("disabled");
        btnMinus.removeAttribute("disabled");
    }
    TotalTag.innerHTML = totalValue;
}


for (var i = 0; i < btnDeleteTag.length; i++) {
    // to delete an item
    btnDeleteTag[i].addEventListener("click", deleteItem);
}

function deleteItem(event) {
    var btnDelete = event.target;
    var trEltDelete = btnDelete.parentElement.parentElement.parentElement.parentElement;
    var trEltDeleteParent = document.querySelector("tbody");
    trEltDeleteParent.removeChild(trEltDelete);
}

for (var i = 0; i < btnLikeTag.length; i++) {
    // to color the like button
    btnLikeTag[i].addEventListener("click", colorLike);

}

function colorLike(event) {
    var btnLike = event.target;
    if (btnLike.style.color != "red") {
        btnLike.style.color = "red";
    }
    else {
        btnLike.style.color = "black";
    }
}

for (var i = 0; i < btnPlusTag.length; i++) {
    //to increment the quantity with the button plus
    btnPlusTag[i].addEventListener("click", increment);
}

for (var i = 0; i < btnMinusTag.length; i++) {
    //to decrement the quantity with the button Minus
    btnMinusTag[i].addEventListener("click", decrement);
}

function increment(event) {
    var btnPlus = event.target;
    var divElt = btnPlus.parentElement;
    var quantityTag = divElt.querySelector("p");
    var quantityValue = Number(quantityTag.innerHTML);
    quantityValue++;
    quantityTag.innerHTML = quantityValue;
    trElt = divElt.parentElement.parentElement;
    var unitPriceValue = Number(trElt.querySelector(".unit_price").innerHTML);
    var priceTag = trElt.querySelector(".price");
    var priceValue = Number(priceTag.innerHTML);
    priceValue = quantityValue * unitPriceValue;
    priceTag.innerHTML = priceValue;

}

function decrement(event) {
    var btnMinus = event.target;
    var divEltMinus = btnMinus.parentElement;
    var quantityTagMinus = divEltMinus.querySelector("p");
    var quantityValueMinus = Number(quantityTagMinus.innerHTML);
    if (quantityValueMinus > 0) {
        quantityValueMinus--;
    }
    quantityTagMinus.innerHTML = quantityValueMinus;
    trEltMinus = divEltMinus.parentElement.parentElement;
    var unitPriceValueMinus = Number(trEltMinus.querySelector(".unit_price").innerHTML);
    var priceTagMinus = trEltMinus.querySelector(".price");
    var priceValueMinus = Number(priceTagMinus.innerHTML);
    priceValueMinus = quantityValueMinus * unitPriceValueMinus;
    priceTagMinus.innerHTML = priceValueMinus;
}