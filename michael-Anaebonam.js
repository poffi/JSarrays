//Oranizing and storing data is a foundational concept of programming. example "NEW YEAR'S RESOLUTIONS"
let newyearsresolutions = ['keep a journal', 'take a falconry class','learn Kubernetes'
];
newyearsresolutions[0]=' travelling'
newyearsresolutions[1]=' Going to gym'
newyearsresolutions[2]=' reading'
//Arrays are javascript's way of maling lists
//Arrays can store any data types
//like lists, arrays are ordered, meaning each items has a numbered posistion.
// to creat an Array is to use an Array literal
//Array wraps items in a square brackets[]
const hobbies = [ 'drawing' , 'Gaming' ,'reading'];
console.log ( hobbies[0])
// each element in your array has a numbered position known as its index
//We can access individual items using their index.
// Arrays in javaScript are Zero-indexed, meaning the position start counting from 0.
// CITIES is an array that has three elements.
let listItem = (hobbies[0])
console.log( hobbies [2])

let seasons =['winter','spring','summer','Fall'];
seasons[3]= 'Autumn';
console.log(seasons);
console.log(newyearsresolutions)
/* variables declared with let can be reassigned
Variables declared with const keyword cannot be reassigned*/
let condiments=['ketchup','Mustard','Relish']
condiments[0]='mayo'
console.log(condiments[condiments.length-1]);


const utensils=[ 'fork','spoon','knife']
utensils[0]='spork'
console.log(utensils)
//One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings.

console.log(newyearsresolutions. length);
console.log(newyearsresolutions[newyearsresolutions.length-1]);
//We use dot notation, chaining a period with the property name to the array, to access the length property of the newYearsResolutions array.
/*learn about some built-in JavaScript methods that make working with arrays easier.
 These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.
.push() allows us to add items to the end of an array.
.push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.
*/
const itemTracker= ['item 0','item 1','item 2'];
itemTracker.push('item 3','item 4');
console.log(itemTracker);
//the opposite of .push() is .pop() THIS REMOVES AN ITEM IN THE ARRAY
const newitemTracker =['item 0','item 1', 'item2'];
const removed= newitemTracker.pop();
console.log(newitemTracker)
console.log(removed)
//When you need to mutate an array by removing the last element, use .pop().
const chores=['cleaning','washing'];
const away= chores.pop();
console.log(away)
console.log(chores);
//.shift and .unshift is what removes and add an items in the front of an array.
//the .shift removes

 /*const remove= chores.shift();
console.log(chores)
console.log(remove)*/

//the .unshift adds
/*console.log(chores.unshift('eating', 'sleeping'));
console.log(chores);*/


