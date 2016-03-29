// Putting all of the function practices into on javascript file 

// 1. 
var string = potato
letterCapitalize = function(string) {
  string.charAt(0).toUpperCase +string.substring(1); 
  return string; 
}

wordCount = function(string) {
return string.split(" ").length; 

}

primeTime = function(num){
for (i = 1; i < 65536; i++){
	if(num % i === 0){
		return false; 
	} else { return true
	}
	
}

var i = 3; 

function tripleFive(){
	for(i = 0; i <= 3; i++){
		console.log("Five!")
	}
}

function excite (){

}

function tiny(i){
	if(i > 0 && i < 1){
		return true;
	} else {
		return false; 
	}
}

//1. GetName Function
var info = {
	name: 'ilana',
	age: 28
}

function getName(){
	return info.name;
}

console.log(info.name)

/*2. Write a function called 'totalLetters' which takes an 
array of strings and returns the total number of letters in all strings.*/

var words =['potato', 'milk', 'grapes', 'tea'] 

function totalLetters() {
for(i = 0; i <= words.length; i++)
	var length = words.length; 
	return length;  
}
	console.log(length)


/* 3. Write a function called 'keyValue' which takes two arguments and
returns a new object with a key of the first argument and the value of the second argument. */

var keyValue = function (a, b) {
    var object = {}
    object[a] = b
    return object 
}

console.log(keyValue('city', 'Denver'));

/* 4. Write a function called 'negativeIndex' which takes an array and a negative number, 
and returns the value from the array at the given negative index, as if the array was circular,
 i.e. arr.length+num. */

var arr = ['fish', 'cat', 'dog', 'cow', 'crab']
var num = -4
var negativeIndex = function(a, b) {
	return a[(a.length + b)]	
}

console.log(negativeIndex(arr, num))

/* 5. Write a function called 'removeM' which takes a single string 
argument and removes all 'm' characters from the string*/

var myString = 'mammal'
var removeM = function() {
	return myString = myString.split('m').join('')
}
console.log(removeM(myString))

/* 6. Write a function called 'printObject' which takes a single object argument 
and console.log's each key-value pair in the format key is value on separate lines. */ 

var printObject = function (obj){

	for (key in obj){
		console.log(key+" is "+obj[key]);
	}
}

printObject({ firstname: 'refus', lastname: 'mchamburger' });

/* 7. Write a function called 'vowels' which takes a string and returns 
an array of all the vowels in the string, including duplicates. */


var vowels = function (str){
	var myArray = new Array();
	str = str.toLowerCase();
	var vowelList = "aeiou";

	for (pos in str){
		letter = str[pos]
		if (vowelList.indexOf(letter)!=-1)
			myArray.push(letter);
	}
	return myArray;
}

console.log(vowels('I am a banana'));

/* 8. Write a function called 'twins' which takes an array and  returns true if every adjacent pair
of items in the array is the same. */

var twins = function(array){
	var st1 ="";
	var st2 ="";

	for (i=0; i<array.length; i+=2){
		st1+=array[i];
	}

	for (i=1; i<array.length; i+=2){
		st2+=array[i];
	}

	if (st1===st2)
		return true;
	else
		return false;
}

console.log(twins(['a', 'a', 'b', 'b', 'z', 'z']));
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));

/* 9. Write a function called 'or' which takes an array of booleans and returns true if
any one of them is true. Given an empty array, return false. If you find an item that 
is true, the function should return true immediately and not continue checking further values. */

var or = function(myArray) {

	for (pos in myArray){
		if (myArray[pos]===true)
			return true;
	}

	return false;
}

console.log(or([false, false, true, false]) );
console.log(or([false, false, false]));
console.log(or([]));

/* 10. Write a function called 'unique' which takes an array of strings, and returns 
a new array consisting of the unique values (no duplicates). */ 

var unique = function (myArray){
	var returnArray = [];

	for (var i = 0;i<myArray.length;i++){
		if (returnArray.indexOf(myArray[i])==-1)
			returnArray.push(myArray[i]);
	}
	return returnArray;
}

console.log(unique(['ilana', 'bill', 'bob', 'ilana']));
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']) );

/*Write a function palindrome that takes a single string 
parameter and returns true if the parameter is a palindrome, 
otherwise returns false. */
// var x = "racecar"; 

// var palindrome = function(){
//     for(i = 0; i < x.length; i++){
//         if(x.charAt(i) != x.charAt(x.length - i - 1 )) {
//             return false;
//         } 
//     }
//     return true;
// }
// console.log(palindrome(x));

/* Write a function dashInsert that takes a single num 
parameter and returns the num with inserted dashes ('-') 
between adjacent odd digits. For example: if num is 454793 
the output should be "4547-9-3". */
var dashNum = 454793; 

var dashInsert = function () {
	for (i=0; i < dashNum.length; i++) {
		if(dashNum(i) % 2 != 0){
			return (dashNum(i).split().join('-'))
		} else {
			return false 
		}
	}
}
console.log(dashInsert(dashNum))

/*Write a function caesarCipher that takes a string and
 number parameter and performs a Caesar Cipher shift on it 
 using the num parameter as the shifting number. A Caesar 
 Cipher works by shifting each letter in the string N places 
 down in the alphabet (in this case N will be num). Punctuation, 
 spaces, and capitalization should remain intact. For example if 
 the string is "Caesar Cipher" and num is 2 the output should 
 be "Ecguct Ekrjgt". */ 

var caesarCipher = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarCipher(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};

console.log(caesarCipher('The Broncos will win the Superbowl', 6))

function alphabetSoup(str) {  
	return str.split('').sort().join('');  
}  
console.log((alphabetSoup("hello")));


var greatLow = [7, 7, 12, 98, 106]

function secondGreatLow(arr){

  if (arr.length === 2) {
        arr.sort(function(a,b) {return a - b});
        return arr[1] + " " + arr[0];
   }
    
  var uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  });
    
  if (uniqueArray.length > 2) {
    uniqueArray.sort(function(a, b){return a-b});
     return uniqueArray[1] + " " + uniqueArray[uniqueArray.length - 2]; 
  }
  else {
    return uniqueArray[1] + " " + uniqueArray[0];
  }
}

secondGreatLow(greatLow)

var coffee = 63

function timeCovert(d){
	console.log(Math.trunc(d/60) + ':' + (d % 60))
}

timeCovert(coffee)