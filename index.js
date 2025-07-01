// Helper Functions
function display(message) {
    document.getElementById('output').innerHTML += message + '<br>';
}

function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

// Question Functions
function question1() {
    clearOutput();
    let number = prompt("1. Please Enter a number: ");
    display("You entered: " + number);
}

function question2() {
    clearOutput();
    let number = Number(prompt("2. Please Enter a number that can be divided by 3 and 4: "));
    if(number % 3 === 0 && number % 4 === 0) {
        display("Yes");
    } else {
        display("No");
    }
}

function question3() {
    clearOutput();
    let x = Number(prompt("3. Enter the first integer"));
    let y = Number(prompt("Enter the second integer"));
    display("Max: " + Math.max(x, y));
}

function question4() {
    clearOutput();
    let number = Number(prompt("4. Please Enter a Number"));
    if(number > 0) {
        display(number + " is positive");
    } else if(number === 0) {
        display(number + " is zero");
    } else {
        display(number + " is negative");
    }
}

function question5() {
    clearOutput();
    let x = Number(prompt("5. Enter the first integer"));
    let y = Number(prompt("Enter the second integer"));
    let z = Number(prompt("Enter the third integer"));
    display("Max: " + Math.max(x, y, z));
    display("Min: " + Math.min(x, y, z));
}

function question6() {
    clearOutput();
    let number = Number(prompt("6. Please Enter a Number"));
    display("Number " + number + " is " + (number % 2 === 0 ? "Even" : "Odd"));
}

function question7() {
    clearOutput();
    let letter = prompt("7. Enter your letter");
    if (['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'].includes(letter)) {
        display("Vowel");
    } else {
        display("Consonant");
    }
}

function question8() {
    clearOutput();
    let number = Number(prompt("8. Please Enter a Number"));
    for (let i = 1; i <= number; i++) {
        display(i);
    }
}

function question9() {
    clearOutput();
    let number = Number(prompt("9. Enter a number:"));
    for(let i = 1; i <= 12; i++) {
        display(i + " × " + number + " = " + (i * number));
    }
}

function question10() {
    clearOutput();
    let number = Number(prompt("10. Enter a number:"));
    for(let i = 1; i <= number; i++) {
        if(i % 2 === 0) {
            display(i);
        }
    }
}

function question11() {
    clearOutput();
    let base = Number(prompt("11. Enter the base"));
    let power = Number(prompt("Enter the power"));
    let answer = 1;
    for (let i = 0; i < power; i++) {
        answer *= base;
    }
    display(base + " to the power of " + power + " = " + answer);
}

function question12() {
    clearOutput();
    let total = 0;
    for(let i = 0; i < 5; i++) {
        total += Number(prompt("12. Please Enter mark " + (i + 1)));
    }
    display("Total Marks = " + total);
    display("Average Marks = " + (total / 5));
    display("Percentage = " + (total / 500 * 100) + "%");
}

function question13() {
    clearOutput();
    let month = Number(prompt("13. Please Enter the month's number (1-12): "));
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        display("31 days");
    } else if (month === 2) {
        display("28 days");
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        display("30 days");
    } else {
        display("Invalid month number");
    }
}

function question14() {
    clearOutput();
    let Physics = Number(prompt("14. Enter Physics mark: "));
    let Chemistry = Number(prompt("Enter Chemistry mark: "));
    let Biology = Number(prompt("Enter Biology mark: "));
    let Mathematics = Number(prompt("Enter Mathematics mark: "));
    let Computer = Number(prompt("Enter Computer mark: "));
    
    let total = Physics + Chemistry + Biology + Mathematics + Computer;
    let percentage = (total / 500) * 100;
    
    display("Total Marks: " + total);
    display("Percentage: " + percentage + "%");
    
    if(percentage >= 90) {
        display("Grade A");
    } else if(percentage >= 80) {
        display("Grade B");
    } else if(percentage >= 70) {
        display("Grade C");
    } else if(percentage >= 60) {
        display("Grade D");
    } else if(percentage >= 40) {
        display("Grade E");
    } else {
        display("Grade F");
    }
}

function question15() {
    clearOutput();
    let month = prompt("15. Please Enter the month's number (1-12): ");
    switch(month) {
        case "1": case "3": case "5": case "7": case "8": case "10": case "12": 
            display("31 days");  
            break;  
        case "2":
            display("28 days");
            break;
        case "4": case "6": case "9": case "11":
            display("30 days");
            break;
        default:
            display("Invalid month number");
    }
}

function question16() {
    clearOutput();
    let letter = prompt("16. Enter your letter").toLowerCase();
    switch (letter) {
        case "a": case "e": case "i": case "o": case "u":
            display("Vowel");
            break;
        default:
            display("Consonant");
    }
}

function question17() {
    clearOutput();
    let x = Number(prompt("17. Enter the first integer"));
    let y = Number(prompt("Enter the second integer"));
    display("Max: " + Math.max(x, y));
}

function question18() {
    clearOutput();
    let number = Number(prompt("18. Please Enter a Number"));
    display(number % 2 === 0 ? "Even" : "Odd");
}

function question19() {
    clearOutput();
    let number = Number(prompt("19. Please Enter a Number"));
    if(number > 0) {
        display(number + " is Positive");
    } else if(number === 0) {
        display(number + " is Zero");
    } else {
        display(number + " is Negative");
    }
}

function question20() {
    clearOutput();
    let x = Number(prompt("20. Enter the first number"));
    let y = Number(prompt("Enter the second number"));
    let operation = prompt("Enter operation (+, -, *, /)");
    
    let result;
    switch(operation) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        default:
            result = "Invalid operation";
    }
    
    display(x + " " + operation + " " + y + " = " + result);
}