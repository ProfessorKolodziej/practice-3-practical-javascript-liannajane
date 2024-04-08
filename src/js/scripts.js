// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("Hello! this is how you test js is properly linked");

const myName = "Lianna, not getting myName because we named the variable Lianna";
console.log(myName);
let myAge = 24;
myAge = myAge + 1;
console.log(myAge);
console.log(myAge + 1);

//Practical JS
//showing and hiding an element

//1st need to find the element
const toggledParagraph = document.querySelector('.here');
console.log(toggledParagraph);
//should see new element in console on page (<p class="show">)
//2nd can see what you can change about the element in js
//3rd toggling show on and off
//toggledParagraph.classList.toggle("show");
//console.log(toggledParagraph);
/*4th duplicate to toggle hide
toggledParagraph.classList.toggle("hide");
console.log(toggledParagraph);*/
//can do this over and over
//can use functions so you don't need to copy and paste over and over
//write a function that toggles the show/hide classes
function toggleParagraph() {
	toggledParagraph.classList.toggle("there");
	toggledParagraph.classList.toggle("here");
	console.log("my toggled paragraph");
	console.log(toggledParagraph);
}

//call the function to hide (there)
toggleParagraph();
//call the function to show (here)
toggleParagraph();

//find the button and toggle the paragraph when we click it
const toggleButton = document.querySelector('#toggle-control');
//use # because we're recalling an id not a class

toggleButton.addEventListener("click", toggleParagraph);
//search mdn addEventListener when not sure what function to do
//to toggle a whole section, attach class or id to the section instead of the element



/* can use
this
for
multi-line
comments
*/
