package simple.calculator

fun main(args: Array<String>) {
    try {
        print("Number 1: ")
        val number1 = readLine()!!.toDouble()

        print("Number 2: ")
        val number2 = readLine()!!.toDouble()

        print("Select an operation (+ - / *): ")
        val operation = readLine()

        val result: Double = when (operation) {
            "+" -> number1 + number2
            "-" -> number1 - number2
            "/" -> number1 / number2
            "*" -> number1 * number2
            else -> throw java.lang.Exception("Unknown operator")
        }

        println("The answer is $result")
    } catch (e: NumberFormatException) {
        println("${e.message} is not a number")
    } catch (e: Exception) {
        println(e.message)
    }
}
