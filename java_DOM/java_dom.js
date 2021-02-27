// window.document

// let myElement = document.getElementById("special");
    
// console.log(myElement)

console.log("connected")


// /** Write your code below each comment */

// /* Get the element with an ID of 'first' */
// var first = document.getElementById("first");
// console.log(first);

// /* Now delete that first element (in the html file), and re-run your code. What changed? */

// /* Get the elements with a class of 'second' with getElementsByClassName: */

// var second = document.getElementsByClassName("second");
// console.log(second);


// /* Delete one of the elements with a class of 'second' and refresh the page. Do you get a similar result? */

// /* Get the span element using getElementsByTagname: */

// var span = document.getElementsByTagName("span");
// console.log(span);

// /* Add a span anywhere, and re-run the last piece of code. What's different? */




// Part 2 




let myElement = document.querySelectorAll('.box')

console.log(myElement)

// 1. Get the element with an ID of 'first' using querySelector
let first = document.querySelector("#first");
console.log(first)

// 2. Get the elements with a class of 'second' with querySelector
let second_2 = document.querySelector(".second");
console.log(second_2)

// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?
let third_2 = document.querySelectorAll(".second");
console.log(third_2)

// 4. Get the span element using querySelector
let four_2 = document.querySelector("span");
console.log(four_2)

// 5. Get multiple span elements using querySelectorAll
let five_2 = document.querySelectorAll("span");
console.log(five_2)


// 6. Select only "a" tags *directly inside* of a div (no grandchildren).
let no_grandchildren = document.querySelector('div > a')
console.log(no_grandchildren)

// 7. Select all elements that contain a "data-target" attribute

// See here: https://css-tricks.com/almanac/selectors/a/attribute/#article-header-id-0

// 8. Select all elements where the data-target attribute equals "#false"



//------------------------


var first = document.querySelector("first");
console.log(first);
// 2. Print just the text of `first`.
console.log(first.innerText);
// 3. Print the HTML of `first`.
console.log(first.innerHTML);

// 4. Get the section tag from the page and save it to a variable.
let section = document.querySelector('section')
console.log(section)

// 5. Print the text content of the section tag
console.log(section.textContent)

// 6. Print the HTML content of the section tag
console.log(section[0].innerHTML)
