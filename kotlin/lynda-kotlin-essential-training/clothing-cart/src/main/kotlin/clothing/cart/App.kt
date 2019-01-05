package clothing.cart

import clothing.cart.model.ClothingItem

fun main(args: Array<String>) {
    val clothingCart = mutableMapOf<ClothingItem, Int>()
    clothingCart[ClothingItem("Shirt", "XL", 14.99)] = 2
    clothingCart[ClothingItem("Pant", "32", 19.99)] = 4
    clothingCart[ClothingItem("Hat", "8.5", 24.00)] = 1

    println(clothingCart)

    var totalValue = 0.0
    for ((clothingItem, count) in clothingCart) {
        val currentItemPrice = clothingItem.price * count
        totalValue += currentItemPrice

        println("Item ${clothingItem.type} @ ${clothingItem.price} X $count = $currentItemPrice")
    }

    println("----------------------")
    println("Total: $totalValue")
}
