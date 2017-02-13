// ## Instructions

// It is absolutely critical that you read each of these requirements because
// as a professional you will be expected to completely understand what you 
// are expected to do. If you submit code that does not fulfill the 
// requirements, you will be sent to your room with no dinner.

// Create a `tree` function that should build a pine tree out of a character
// in the Chrome dev tools console. 

// ### It accepts a single object as an argument. The object should have two 
// key/value pairs.


// 1. A key that specifies the height of the pine tree.
// 2. The value for the height of the tree should be from user input in 
// 	a `<input type="text">` field in the DOM.
function myTreeHeight() {
	var height = document.getElementById("treeHeight").value;
	console.log("ohmytreeHeight", height);
}
// 3. A key that specifies which character to use to build the pine tree.
// 4. The character to use should be from user input in 
// 	a `<input type="text">` field in the DOM.
function myTreeChar() {
	var char = document.getElementById("treeChar").value;
	console.log("ohmytreeChar", char);
}
// Once the user enters in a number, and a character, the user can either 
// then just press the enter key _(as long as the cursor is in one of the 
// input fields)_, or click a button that is labeled "Grow your tree" and 
// the tree should be shown in the console. This requires you to add an 
// event listener to the button, as well as an event listener for the 
// enter/return key.
growTree.addEventListener(submit, listener, [click]);

var air = " ";
function growTree() {
	for (var i = 0; i < height; i++) {
		if (height - (i + 1) > 0) {
			air += " ";
		}
		if ( ( 2 * i ) + 1 !== height) {
			char += char;
		}
		console.log(air + treeChar);
	}
}
// If either of the input fields does not have a value in it when the user 
// presses the enter key, or presses the button, then display an alert stating 
// that both fields must have a value.

// ##### Example

// Here's what the pine tree should look like when you specify a height of 7, and 
// use the asterisk character.

// ```js
//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************
// ```
