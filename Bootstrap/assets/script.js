function CalculatePrice() {
    var price = 0;
    var elements = document.getElementsByClassName("items")
    for (i = 0; i < elements.length; i++) {
        var itemprice = Number(elements[i].querySelector(".item-price").textContent)
        console.log(elements[i].querySelector(".item-price").textContent)
        var quantity = Number(elements[i].querySelector(".Quantity").textContent)
        price += itemprice * quantity


    }
    window.alert(price)

}
var btn = document.getElementById("place-order-btn")
btn.addEventListener("click", CalculatePrice)
var noItemsBtn = document.getElementsByClassName("number-items")
    // console.log(noItemsBtn.length)
for (let index = 0; index < noItemsBtn.length; index++) {
    const element = noItemsBtn[index];
    element.addEventListener("", checkInputValue)

}

function checkInputValue() {
    // if (window.Event.sou.value.length > window.EventSource.maxLength) window.EventSource.value = window.EventSource.value.slice(0, window.EventSource.maxLength);
    console.log("here")
}