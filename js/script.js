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
        
        isPalindrome(userString.value) ? palindromeResult.innerHTML = "Word is a Palindrome!"
            : palindromeResult.innerHTML = "Word is not a Palindrome!"

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

