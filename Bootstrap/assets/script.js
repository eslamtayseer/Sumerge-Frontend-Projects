//calculate total price of order
function CalculatePrice() {
    var price = 0;
    var elements = document.getElementsByClassName("items")
    for (i = 0; i < elements.length; i++) {
        var itemprice = Number(elements[i].querySelector(".item-price").textContent)
        console.log(elements[i].querySelector(".item-price").textContent)
        var quantity = Number(elements[i].querySelector(".number-items").value)
        price += itemprice * quantity


    }
    window.alert(price)

}

//form validation max quantity of an item order cannot exceed 99
function checkInputValue(event) {
    var source = event.target || event.srcElement;
    if (source.value.length > source.maxLength) source.value = source.value.slice(0, source.maxLength);
    console.log(source.value)
}

var btn = document.getElementById("place-order-btn")
btn.addEventListener("click", CalculatePrice)


var noItemsBtn = document.getElementsByClassName("number-items")
for (let index = 0; index < noItemsBtn.length; index++) {
    const element = noItemsBtn[index];
    element.addEventListener("input", checkInputValue)

}