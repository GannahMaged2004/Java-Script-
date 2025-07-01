//1- Write a program that allow to user enter number then print it

var number_one = window.prompt("1. Please Enter a number: ");
window.alert(number_one);


// ==========================================================================================================================================


// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

var number_two = window.prompt("2. Please Enter a number that can be divided by 3 and 4: ");
number_two = Number(number_two);
if(number_two%3==0&&number_two%4==0){
    window.alert("Yes")
}else{
    window.alert("No")
}


// ====================================================================================================================================


//3- Write a program that allows the user to insert 2 integers then print the max

window.alert("3. Please Enter 2 integers: ");
var x = Number(window.prompt("Enter the first integer"));
var y = Number(window.prompt("Enter the second integer"));
if(x>y){
    window.alert(x)
}
else{
    window.alert(y)
}

// ====================================================================================================================================


//4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive

var number_four = Number(window.prompt("4. Please Enter a Number"));
if(number_four>0){
    window.alert(number_four+" is positive")
}
else if(number_four ==0){
    window.alert(number_four+ " is zero")
}
else{
    window.alert(number_four+" is negative")
}

// ====================================================================================================================================

// 5. Write a program that take 3 integers from user then print the max element and the min element.

window.alert("5. Please Enter 3 integers: ");
var x = Number(window.prompt("Enter the first integer"));
var y = Number(window.prompt("Enter the second integer"));
var z = Number(window.prompt("Enter the third integer"));
if(x>y && x>z){
    window.alert("Max : "+x)
}else if(y>x && y>z){
    window.alert("Max: "+y)
}else{
    window.alert("Max : "+z)
}
if(x<y && x<z){
    window.alert("Min : "+x)
}else if(y<x && y<z){
    window.alert("Min: "+y)
}else{
    window.alert("Min : "+z)
}

// ====================================================================================================================================

//6- Write a program that allows the user to insert integer number then check If a number is even or odd

var number_six = Number(window.prompt("6. Please Enter a Number"));
if(number_six%2==0){
    window.alert("Number "+number_six+" is Even")
}else{
    window.alert("Number "+number_six+" is Odd")
}

// ====================================================================================================================================

// 7. Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

var letter = window.prompt("Enter your letter");
if (letter == 'A' || letter == 'a' || letter == 'E' || letter == 'e' || letter == 'I' || letter == 'i' || letter == 'O' || letter == 'o' || letter == 'U' || letter == 'u') {
    window.alert("Vowel");
} else {
    window.alert("Consonant");
}


// ====================================================================================================================================

// 8. Write a program that allows a user to insert an integer then it prints all the numbers between 1 to that number

var number_eight = Number(window.prompt("8. Please Enter a Number"));
for (var i = 1 ; i <= number_eight; i++){
    window.alert(i);
}

// ====================================================================================================================================

// 9. Write a program that allows user to insert integer then print a multiplication table up to 12

var number_nine = Number(window.prompt("Enter a number :"));
for(var i=1;i<=12;i++){
    window.alert(i*number_nine);
}

// ====================================================================================================================================

// 10. Write a program that allows to user to insert number then print all even numbers between 1 to this number

var number_ten = Number(window.prompt("Enter a number :"));
for(var i=1 ; i<= number_ten; i++){
    if(i % 2 == 0){
        window.alert(i);
    }
}

// ====================================================================================================================================

// 11. Write a program that takes two integers then prints the power

window.alert("11. Please Enter 2 integers: ");
var base = Number(window.prompt("Enter the base"));
var power = Number(window.prompt("Enter the power"));
let answer = 1;
for (var i = 0; i < power; i++) {
    answer *= base;
}
window.alert(answer);

// ====================================================================================================================================

// 12. Write a program to enter marks of five subjects and calculate total, average andpercentage.

var total =0;
for(var i =0 ;i<5;i++){
    total+=Number( window.prompt("12. Please Enter the 5 marks: "+(i+1)));
}
window.alert("Total Marks = "+total);
window.alert("Average Marks = "+total/5);
window.alert("Percentage = "+total/500*100);

// ====================================================================================================================================

// 13-Write a program to input month number and print number of days in that month.

// Jan (1), March (3) , May (5) , July (7), August (8), October (10) , December (12): 31
// Febuary (2) : 28
// April (4), June (6), September (9), November (11) : 30

while (true) {
    var month = Number(window.prompt("13. Please Enter the month's number: "));

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        window.alert("31 days");
        break;
    } else if (month == 2) {
        window.alert("28 days");
        break;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        window.alert("30 days");
        break;
    } else {
        window.alert("Please enter a number from 1 to 12.");
    }
}

// ====================================================================================================================================

// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

var Physics = Number(window.prompt("Enter the Physics Exam's mark: "))
var Chemistry = Number(window.prompt("Enter the Chemistry Exam's mark: "))
var Biology = Number(window.prompt("Enter the Biology Exam's mark: "))
var Mathematics  = Number(window.prompt("Enter the Mathematics Exam's mark: "))
var Computer = Number(window.prompt("Enter the Computer Exam's mark: "))

var total = Physics + Chemistry + Biology + Mathematics + Computer;
percentage = (total/500)*100;

if(percentage>=90){
    window.alert(" Grade A")
}
else if(percentage>=80){
    window.alert("Grade B")
}
else if(percentage>=70){
    window.alert("Grade C")
}
else if(percentage>=60){
    window.alert("Grade D")
}
else if(percentage>=40){
    window.alert("Grade E")
}
else if(percentage<40){
    window.alert("Grade F")
}

window.prompt("Total Marks: "+total);
window.prompt("Percentage: "+percentage);
window.prompt("Grade: ")

// ==============================================================================================================


                                                    //    SWITCH CASES

// 15- Write a program to print total number of days in month.       

var month = window.prompt("15. Please Enter the month's number: ");
switch(month){
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12": 
        window.alert("31 days");  
        break;  
    case "2":
        window.alert("28 days");
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        window.alert("30 days");
        break;               
}



// ==============================================================================================================

// 16- Write a program to check whether an alphabet is vowel or consonant


var seven = window.prompt("16. Enter your letter");
switch (seven) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    window.alert("vowel");
    break;
    default:
        window.alert("consonant);
        break;
}

// ==============================================================================================================

// 17- Write a program to find maximum between two numbers

window.alert("17. Please Enter 2 integers: ");
var x = Number(window.prompt("Enter the first integer"));
var y = Number(window.prompt("Enter the second integer"));

switch (x > y){
    case true:
        window.alert(x);
        break;
    case false:
        window.alert(y);
        break;    
}

// ==============================================================================================================

// 18- Write a program to check whether a number is even or odd

var number_eighteen = window.prompt("18. Please Enter a Number");
switch (number_eighteen % 2 == 0) {
    case true:
        window.alert("Even");
        break;
    case false:
        window.alert("odd");
        break;
}


// ==============================================================================================================


// 19- Write a program to check whether a number is positive or negative or zero

var number_nineteen = window.prompt("19. Please Enter a Number");
switch (number_nineteen > 0) {
    case true:
        window.alert(number_nineteen+ " is Positive");
        break;
    case false:
        switch(number_nineteen == 0){
            case true:
                window.alert(number_nineteen+ " is Zero");
                break;
            case false:
                window.alert(number_nineteen+ " is Negative");  
                break;  
        }  
        break;
    }



// ==============================================================================================================


// 20- Write a program to create Simple Calculator

window.alert("20. Please Enter 2 integers and an operation ");
var x = Number(window.prompt("Enter the first integer"));
var y = Number(window.prompt("Enter the second integer"));
var operation = window.prompt ("Enter your arithmetic operation: ");

switch(operation){
    case "+":
        window.alert(x + y);
        break;

    case "-":
        window.alert(x - y);
        break; 

    case "!- ":
        window.alert(y - x);
        break; 

    case "*":
        window.alert(x * y);
        break;

    case "/":
        window.alert(x / y);
        break;    
        
    case "!/":
        window.alert(y / x);
        break;
        
}

// ==============================================================================================================
