/*console.log('hello')

Variables
var b = 'book';
console.log(b);
var someNumber = 99
console.log(someNumber)

Manipulate the DOM with JS(Alter UI HTML)
var age = prompt("What is your age?")
document.getElementById('someText').innerHTML = age;


Numbers
Ingeger - whole number
float - fraction
var integer1 = 5;
var float1 = 5.4;
console.log(5 * 10) = 5x10
(50 / 5) = divided by

var num1 = 10
num1 = num1 +1 = 11
num1++ = Increment num1 by 1
num1-- = Decrement num1 by 1
num1 % 5 = remainder (0) because 2 goes into 5 evenly
num1 / 6 =
num * 5 =
num1+= 10; = 20 (num1(10) incrememt by 20)


Functions-all functions mustbe a)created & b)called
function fun() {
    alert('')
}
fun()


Concationation - adding 2 or more strings together
var name = prompt("What is your name?")
var result = 'Hello' + ' ' + name <-Concatination


Arguements in functions
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result)
    sumNumbers("num1 + num2") = 20

 function sumString(string1, string2){
    var result = string2 + string2;
    console.log(result)
    sumString('ring' + 'dice') = ringdice

*if your function is dependant on a string/number name it in the perameters
function(peramiter){}


//While loops - while variable = truthy do this. while var is falsy don't
var num =
while (num < 100) {
    num+= 1
    console.log(num)
}
-increment up to 99


//For loops -

for (let num = 0; num <=100; num++) {
    console.log(num)
}
-increment up to 99


Data Types
Number/Integer - 18
Number/Float - 18.8
String - 'ring'
Array - ['ring', 'watch', necklace']
Object - Array of arrays -
jewlery ['ring', 'watch', 'necklace']
clothes ['tshirt', 'pants']
null - nothing = null
Boolean - truthy or falsy


Strings Operations/ = new line
let fruit = 'banana';
let fruits = 'banana/apple/grapes';

fruit.length = length of charectors starting at 0
fruit.indexOf('an'); =1 'an' starts at 1
fruit.indexOf('Z'); =0 = does not exist
fruit.slice(2, 6);= nana = slices char from spot 2 to spot 6
fruit.replace('ban', '123'); = '123ana'
fruit.toUpperCase = BANANA
fruit.toLowerCase = banana
fruit.toProperCase = Banada =
fruit.chatAt(2); = 'n' OR fruit[2]
fruit.split(' ') = "b", "a", "n", "a", "n", "a" - split by charector
fruits.split(,) = "banana", "apple", "grape" - turns into an array?


Arrays
make an array 2 ways
let fruits = 'banana', 'apple', 'grapes';
fruits = new Array('banana', 'apple', 'grapes');

fruits[0] = 'pear' - changes fruit 0 to pear

for (let i = 0; i > fruits.length; i++) = increments index
= listed individually


Array common methods
Convert an array to a string - opposite of split
console.log('to string', fruits.toString();

Add a char inbetween aray items
console.log(fruits.join' - ')

Pop off the last item
console.log(fruits.pop(), fruits.pop);

Appends/Adds item-2 ways
console.log(fruits.toPush(''))
fruits[fruits.length] = 'new fruit' = adds 'new fruit' as last item

Removes first item
fruits.shift()

Adds new first item
fruits.unshift('kiwi')

fruits.delete - don't do this

Add 2 arrays together
let fruit = ['apple', 'pear', 'orange']
let vegetables = 'lettuce', 'tomatoes', 'cucumber']
let allGroceries = fruits.concat(vegetables)

Reverse an array
allGroceries.reverse()

Sort Numbers
let someNumbers = [14, 23, 55]
someNumbers.sort()

Sort letters in acending order
someNumbers.sort(function(a, b) {return a-b})
someNumbers.sort(function(a, b) {return b-a})

Increments by 1 until 9
let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    empotyArray.push(num);
}

Objects

+ '\n'  = new line


let student ={first: 'Abby',
                    last:'Carlson',
                    age:30.
                    height:160
                    studentInfo: function () {
                        return this.first + '\n' + this.last + '\n' +this.age
                    }
}:

console.log(student.first) = Abby
console.log(student.last) = Carlson

Change value
student.first = 'Kayla'
console.log(student.first) = Kayla

Increment
student.age++;

console.log(student.studentInfo()); =
Abby
Carlson
30

Conditional Rendering/If Else/Switch Statements
&& and
|| or
= equals
=== equals exactly

var age = prompt('what is your age?);

if (age >=18) && (age <= 35) ) {
status = 'target demo'
} else {
status = 'not my target demo'
}

Switch Statements
Differentiate between weekday and weekend
array['Sun', 'Mon', etc]

instead of writing a bunch of if else statements
switch(6) {
    case 0: text = 'Weekend';
    break;
    case 5: text = 'Weekend';
    break;
    case 6: text = 'Weekend';
    break;
    default = 'Weekday'
}
console.log(text) = text  because switch(6)
if switch(2) = Weekday




JSON - JavaScript Object Notation - typically for API's
an array with objects inside of it
JSON is valid Javascipt
this array with objects can be pasted into JS script code

[
                 '{
                    first: 'Abby',
                    last:'Carlson',
                    age:30
                    height:160
                },
                {
                     first: 'Kaylee',
                    last:'Clarkson',
                    age:40
                    height:165
                }'
            ]

Turn into an array
JSON.parse(students)
console.log(JSON.parse(students)[1].age) = 40




*/