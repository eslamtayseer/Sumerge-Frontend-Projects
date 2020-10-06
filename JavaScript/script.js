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