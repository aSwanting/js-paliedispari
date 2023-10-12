// CODE

// Palindrome Check

document.getElementById("palindrome-check").addEventListener("click", function () {

    const userString = document.getElementById("palindrome-input")
    const palindromeResult = document.getElementById("palindrome-result")

    if (!userString.value) {

        userString.classList.add("is-invalid")
    }

    else {

        userString.classList.remove("is-invalid")

        isPalindrome(userString.value) ? palindromeResult.innerHTML = `"` + userString.value + `"` + " is a palindrome"
            : palindromeResult.innerHTML = `"` + userString.value + `"` + " is not a palindrome"

    }

})

// Odd Even Game

document.getElementById("odd-even-check").addEventListener("click", function () {


    const userNumberForm = document.getElementById("user-number-input")
    const userNumber = parseInt(userNumberForm.value)
    const userOddEvenSelect = parseInt(document.getElementById("user-odd-even-select").value)

    const computerNumberForm = document.getElementById("computer-number-form")
    const computerNumber = getRandomIntInclusive(1, 5)

    const oddEvenResult = document.getElementById("odd-even-result")

    if (!userNumber) {

        userNumberForm.classList.add("is-invalid")

    } else if (userNumber > 5) {

        userNumberForm.classList.add("is-invalid")

    }

    else {

        userNumberForm.classList.remove("is-invalid")
        computerNumberForm.value = computerNumber

        console.log(userNumber, computerNumber, userOddEvenSelect)

        /*         isNumberSumOdd(userNumber, computerNumber) ? console.log(true) : console.log(false)
                userOddEvenSelect ? console.log(true) : console.log(false) */

        isNumberSumOdd(userNumber, computerNumber) === userOddEvenSelect ? oddEvenResult.innerHTML = "User Wins!" : oddEvenResult.innerHTML = "User Loses!"
    }

})


// FUNCTIONS

// Palindrome Check Function
function isPalindrome(stringToCheck) {
    const stringLowerCase = stringToCheck.toLowerCase()
    for (i = 0; i < stringLowerCase.length; i++) {
        if (stringLowerCase[i] !== stringLowerCase[(stringLowerCase.length - 1) - i]) {
            return false
        }
    }
    return true
}

// Generate Random number 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


// Check if two numbers add up to odd or even
function isNumberSumOdd(a, b) {

    return (a + b) % 2

}

