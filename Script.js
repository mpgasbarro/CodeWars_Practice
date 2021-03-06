// MERGE SORT FUNCTION

// const { useDebugValue } = require('react');

// const { arrayOf } = require('prop-types');

// let newArr = [4, 7, 3, 8, 2, 1, 9, 6];
// function mergeSort(arr) {
// 	// YOUR CODE HERE
// 	if (arr.length <= 1) {
// 		return arr;
// 	}
// 	let middle = Math.floor(arr.length / 2);
// 	let arr1 = arr.slice(0, middle);
// 	let arr2 = arr.slice(middle);
// 	return merge(mergeSort(arr1), mergeSort(arr2));
// }
// // HELPER FUNCTION: merge two sorted arrays
// function merge(arr1, arr2) {
// 	var result = [];
// 	while (arr1.length || arr2.length) {
// 		if (arr1[0] <= arr2[0]) {
// 			result.push(arr1.shift());
// 		} else {
// 			result.push(arr2.shift());
// 		}
// 	}
// 	return result.concat(arr1, arr2);
// }
// console.log(mergeSort(newArr));
// module.exports = mergeSort;

// ______________________________________________________________________
// PROBLEM 2
// Write a function called babyShark that takes a number as an argument. Console log as many lines as the number passed in.

// For every odd numbered line, have it print Baby shark
// For every even numbered line, have it print doo doo do doo do do

// function babyShark(num) {
// 	for(let i=0; i <=num; i++) {
// 		if( i % 2 !== 0) {
// 		console.log("Baby Shark");
// 	} else {
// 		console.log("Doo Doo Do Doo Doo Do");
// 	}
// }
// }

// console.log(babyShark(7));

// function babyShark(num) {
// 	for( let i=0; i< num; i++) {
// 		if (i % 2 === 0) {
// 			console.log(" DOOO DOO DOO DOO");
// 		} else {
// 			console.log(("baby shark"));
// 		}
// 	}
// }

// babyShark(9);
// _________________________________________________________________
// PROBLEM 3 Write a function called isSquare that takes a number as an argument. Make it so the function determines if the number passed in is a square number, and return true if it is, false if it isn't
// function isSquare(num) {
// 	for( let i = 0; i <= num; i++) {
// 		if(num / i == i) {
// 			return true
// 		} else {
// 			return false
// 		}
// 	}
// };

// console.log(isSquare(9));

// ___________________________________________________________
// Write a function called findShort that takes in a string/sentence as an argument. Make it so that the function returns the length of the shortest word(s) in the string.

// Assume the string will never be empty and you do not need to account for different data types.

// findShort("bitcoin take over the world maybe who knows perhaps")
// // returns 3
// findShort("turns out of random test cases are easier than writing out basic ones")
// // returns 2

// _________________________________________________________________________
// PROBLEM 4 Make a function that that squares each number passed into it from an array, and sums the results.

// const arr = [2, 2, 2]
// sum = 0

// function squareNum(arr) {
// for (let i=0; i < arr.length; i++) {
// 	let sqNum = arr[i] * arr[i];
// 	sum += sqNum
// 	console.log(sum);
// 	}
// }
// squareNum(arr)

// ________________________________________________________________________________________________
// PROBLEM 5  - Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array
// Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row, column and diagonal.
// const arr = [
// 	[10, 20, 30],
// 	[40, 50, 60],
// 	[70, -80, 90],
// ];
// arrSum1 = arr[0].reduce((total, amount) => total + amount);
// arrSum2 = arr[1].reduce((total, amount) => total + amount);
// arrSum3 = arr[2].reduce((total, amount) => total + amount);

// function biggestNum(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr[i].length; i++) {}
// 	}
// }

// biggestNum(arr);

// _________________________________________________________
// PROBLEM 6
// Write a function called isMember that takes an array of words and a string as arguments. isMember should return true if the string is a word in the array, and false if it is not.

// The function is expected to return a BOOLEAN.
// The function accepts the following parameters:
// -- 1. Array of strings
// -- 2. String

// function isMember(arr, str) {
// 	return arr.includes(str);
// }

// ____________________________________________________________
// PROBLEM 7
// Bonus
// A query may contain the wildcard character "*" which can match with any character. If you're familiar with card games, think of the "*" as the Joker card which is also a wildcard and can represent any card in the deck.

// function isMember(arr, str) {
// 	let currentWord;
// 	for( let i=0; i< arr.length; i++) {
// 		currentWord = arr[i];
// 		if( currentWord.length !== str.length) continue;
// 		for(let j=0; j< currentWord.length; j++) {
// 			if(j === currentWord.length - 1) return true;
// 			if( currentWord[j] === str[j] || str[j] === "*") return true;
// 		}
// 	} return false;
// }
// ________________________________________________________________
// PROBLEM 8 Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// let max = 0;
// let min = 0;
// let sum = 0;

// function orderSum(a, b) {
//     if( a > b) {
//         max = a;
//         min = b
//     } else {
//         max = b;
//         min = a
//     }
//     for( let i = min; i <= max; i++) {
//         sum += i
//             console.log(sum);
//     }
// }

// orderSum( 9, 5)
// _________________________________________________________________
// PROBLEM 9
// The main idea is to count all the occurring characters(UTF-8) in string. If you have string like aba then the result should be

// { 'a': 2, 'b': 1 }
// let newWord = '';
// let array = [];

// function countChoc(word) {
// 	newWord = word.split('');
// 	for (let i = 0; i <= newWord.length; i++) {
// 		if ((array = newWord[i])) {
// 			array = newWord[i] += 1;
// 		} else {
// 			array = newWord[i];
// 		}
// 	}
// }

// countChoc('hello');

// // SOLUTION
// function count(string) {
// 	// if empty string, return empty object
// 	if (!string) {
// 		return {};
// 	}
// 	//create an array of the letters in the string
// 	const strArray = string.split('');
// 	//use reduce to iterate over the array: first parameter is the accumulator, second is the current value
// 	const letterCounts = strArray.reduce((count, letter) => {
// 		//for every letter in the array, either increment its existing count or initialize it at zero and add one
// 		if (count[letter]) {
// 			count[letter] = count[letter] + 1;
// 		} else {
// 			count[letter] = 1;
// 		}
// 		//return the count object
// 		return count;
// 		//initialize count accumulator as an empty object
// 	}, {});
// 	//return the letter counts object
// 	return letterCounts;
// }
// –––––––––––––––––––––≠––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// problem 10

// function upperCase(word) {
//     let newWord = word.split(" ");
//     newWord.map((newNewWord) => {
//     let capWord = newNewWord.charAt(0).toUpperCase() + newNewWord.slice(1)
//         console.log(capWord);
//     });
// }

// upperCase("Hello there dog");

// // _______________________________________________________________________
// function filter_list(word) {
// 	newWord = [];
// 	for (let i = 0; i < word.length; i++) {
// 		if (word[i] < 1000000000000) {
// 			newWord = newWord + ' ' + word[i];
// 			finalWord = newWord.split(' ');
// 			console.log(finalWord);
// 		}
// 	}
// }

// filter_list(['a', 'b', 'c', 2, 3, 346]);

// _________________________________________________________________________________
// PROBLEM 11
// let sum = 0
// function sumOfMultiplesofThreeAndFive(num) {
// 	for (let i = 1; i < num; i++) {
// 		if(i % 3 === 0 || i % 5 === 0) {
// 			sum += i
// 		}
// 	} console.log(sum)
// }
// console.log(sumOfMultiplesofThreeAndFive(1000))

// // console.log(sumOfMultiplesofThreeAndFive(10))
// // // should be 23
// // Explanation: Multiples of three and five below 10 are 3, 5, 6, and 9. The sum of 3, 5, 6 and 9 is 23.

// console.log(sumOfMultiplesofThreeAndFive(1000))

// ________________________________________________________________________
//
// sum = 2
// function evenFibonnacisSum(upperlimit) {
// 	for( let i = 1; i < upperlimit; i++) {
// 		if( i === )
// 	}

// }

// console.log(evenFibonnacisSum(5))
// _________________________________________________________________
// time = 12

// if time

//

// const myIngredients = ['salt', 'pineapple', 'flour', 'cups'];
// const walmart = ['cups', 'pear', 'orange', 'salt', 'pineapple', 'plates', 'tofu']

// function isItThere(arr) {
//     let doesItHave = []
//     for (let i = 0; i < arr.length; i++) {
//         if(!walmart.includes(arr[i])){
//             return false
//         } else {
// 			return true;
// 		}
//      }
//  }

// console.log(isItThere(myIngredients));

// let arr = [1, 2, 2]
// sum = 0;

// function sumOfSquares(val){
// 	for(let i = 0; i < val.length; i++){
// 		squared = val[i] * val[i]
// 		sum = sum + squared
// 	} return sum
// }

// console.log(sumOfSquares(arr));

// Write a for loop that sums the values in the below array.
// const numbers = [23, 19, 23, 52, 12];
// sum = 0

// function whatIsVal(val) {
// for (let i=0; i < val.length; i++){
// 		sum += val[i]
// 	} return sum
// }

// console.log(whatIsVal(numbers));

// __________________________________________________________________________________________

// function sakuraFall(v) {
// 	return v < 1 ? 0 : 400 / v;
// }

// console.log(sakuraFall(10));
// _______________________________
// function hello(name) {
// 	let newName = name.split('');
// 	let endName = newName[0].toUpperCase()
// 	let newNewName = ""
// 	for(let i=1; i < newName.length; i++) {
// 		newNewName += newName[i].toLowerCase()
// 	}
// 	return("Hello, " + endName + newNewName);
// }

// hello("mike");
// ________________________________________
// function isDivideBy(number, a, b) {
// 	return number % a === 0 && number % b === 0
// }
// console.log(isDivideBy(-12, 2, -5))
// __________________________________________
// function index(array, n) {
// 	let num = array[n]
// 	if(num || num === 0){
// 		newNum = Math.pow(num, n)
// 		return newNum
// 	} else {
// 		return -1
// 	}
// }

// console.log(index([0, 1], 0));
// _____________________________________

// const arr = N => {
// let array = [];
// for(let i=0; i < N ; i++){
//   array.push(i)
// 	} return array
// }

// console.log(arr(5));
// ____________________________________
// function checkAlive (health) {
//   if (health > 0) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(checkAlive(1));
// _____________________________________
// let badNum = ""
// let newVal = 0

// function solve(arr){
//     for(let i = 0; i < arr.length; i++){
//       badNum = arr[i]
//         if(badNum === arr[i] || -badNum === arr[i]) {
//           badNum
//           newVal = 0
//         } else {

//           badNum = arr[i]
//           console.log('BadNum val ' + badNum);
//             }
//           } console.log("final one" + badNum);
//         }

// solve([-3, 1, 2, -2, -1, -4, 3]);

// function namez(name, otherNam) {
//   if(name === otherNam || -name === otherNam) {
//      console.log("hello");
//   } else {
//     console.log(false);
//   }
// }

// namez(3, -3)
// Will need to loop through each part of the array
// Will then need to compare each iteratio with previous iterations.
// will need to compare both positive and negative for the number.

// [1, -1, 2, -2, 3];
// ------------------------------------------------------
// function solution(value) {
//   let newNum = value.toString()
//   if(newNum.length == 1) {
//     console.log(`Value is 0000${newNum}`)
//   } else if(newNum.length == 2 ) {
//     console.log(`Value is 000${newNum}`);
//   } else if (newNum.length == 3) {
//     console.log(`Value is 00${newNum}`);
//   } else if( newNum.length == 4) {
//     console.log(`Value is 0${newNum}`);
//   }
// }

// solution(95)
// ___________________________________________________
// function doubles(s) {
//   let val = s.split("");
//   let len = val.length
//   let empt = [];

//   for(let i = 0; i < len; i++){
//       if(empt.indexOf(val[i]) === -1){
//       empt.push(val[i])
//       newEmpt = empt.join("").toString()
//       }
//   } console.log(newEmpt);
// }

// // doubles("aabdbccdd")
// // _______________________________________________
// function highAndLow(numbers) {
//     let arrayNum = numbers.split(" ");
//     let sortedNumsMin = Math.min(...arrayNum);
//     console.log(sortedNumsMin);
//     let sortedNumsMax = Math.max(...arrayNum);
//     let message = `${sortedNumsMax} ${sortedNumsMin}`
//     return(message);
// };

// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
// _______________________________
// function mirror(data) {
//     let newData = [];
//     let newNewData = [];
//     let SBArr = data.sort(function (a, b) {
// 			return a - b;
// 		});
//     for(let i= 0; i < data.length-1; i++){
//          newData.push(data[i])
//     }
//     newData.sort(function(a, b) {
// 			return b - a;
//         });
//     data.push(...newData);
//     return(data);
// }

// mirror([3,5,2,1,-6, 9, 23, 64, -21, -7])

// Need to add to the array, the same value. Doubling value, unless it is the largest value.
// Will need to loop through the data to see which number is the largest
// If the number is the largest, wont duplicate.

// function reverseLetter(str) {
//     let newStr = str.split("").reverse();
//     let newStrL = newStr.length;
//     let fixedStr = [];
//     let finalStr = ""
//     for(let i=0; i < newStrL; i++){
//         if (
// 					newStr[i] != '1' &&
// 					newStr[i] != '2' &&
// 					newStr[i] != '3' &&
// 					newStr[i] != '4' &&
// 					newStr[i] != '5' &&
// 					newStr[i] != '6' &&
// 					newStr[i] != '7' &&
// 					newStr[i] != '8' &&
// 					newStr[i] != '9' &&
// 					newStr[i] != '0' &&
// 					newStr[i] != '!' &&
// 					newStr[i] != '@' &&
// 					newStr[i] != '#' &&
// 					newStr[i] != '$' &&
// 					newStr[i] != '%' &&
// 					newStr[i] != '^' &&
// 					newStr[i] != '&' &&
// 					newStr[i] != '*' &&
// 					newStr[i] != '(' &&
// 					newStr[i] != ')' &&
// 					newStr[i] != '_' &&
// 					newStr[i] != '-' &&
// 					newStr[i] != '+' &&
// 					newStr[i] != '=' &&
//                     newStr[i] != '?' &&
//                     newStr[i] != '/' &&
// 					newStr[i] != '`' &&
// 					newStr[i] != '~' &&
// 					newStr[i] != ':' &&
// 					newStr[i] != ';' &&
// 					newStr[i] != ']' &&
// 					newStr[i] != '[' &&
// 					newStr[i] != '}' &&
// 					newStr[i] != '{' &&
// 				) {
// 					fixedStr.push(newStr[i]);
// 				}
//     } return (fixedStr.join(""))
// }

// 'ultr53o?n';

// reverseLetter('ultr53o?n');

// _________________________________________________________________________________
// return the two oldest/oldest ages within the array of ages passed in.
// function twoOldestAges(ages){
// 	let sortedAge = ages.sort(function(a,b){return a-b})
// 	let sortedAr = []
// 	let secondOld  = sortedAge[sortedAge.length -2]
// 	let oldest = sortedAge[sortedAge.length -1]
// 	sortedAr.push(secondOld)
// 	sortedAr.push(oldest)
// 	console.log(sortedAr);

// }

// twoOldestAges([1,2,10,8, 11, 45, 32, 68, 12, 32, 65, 37, 8654, 234, 123])
// ------------------------------------------------------------------

// CODE WARS PRACTICE - 10/07/20 //

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
// Example:
// solution('XXI'); // should return 21

// function translateRomanNumeral(romanNumeral) {
// 	let DIGIT_VALUES = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	};

// 	let result = 0;
// 	let input = romanNumeral.split('');

// 	for (let i = 0; i < input.length; i++) {
// 		let currentLetter = DIGIT_VALUES[input[i]];
// 		let nextLetter = DIGIT_VALUES[input[i + 1]];
// 		if (currentLetter === undefined) {
// 			return 'null';
// 		} else {
// 			if (currentLetter < nextLetter) {
// 				result += nextLetter - currentLetter;
// 				i++;
// 			} else {
// 				result += currentLetter;
// 			}
// 		}
// 	}

// 	console.log(result);
// }

// translateRomanNumeral("DCL");

// --------------------------------------------------------------------
// CODE WARS PRACTICE - 10/08/20 //
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.
// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.
// NOTE: Each rider travels as far as he can, but never more than 100 miles.

// function riders(stations) {
//     let sum = 0;

//     for(let i = 0; i< stations.length; i++ ){
//         sum += stations[i] }

//     if(sum <= 100) {
//             console.log(1)
//     } else if( sum >= 100 && sum <= 200) {
//         console.log(2)
//     } else if (sum >= 200 && sum < 300){
//         console.log(3)
//     } else if( sum > 300 && sum < 400){
//         console.log(4)
//             }
//         }

// // riders([20, 8, 25, 46, 20, 20, 17, 27, 34, 37, 29, 34, 49, 33]);
// let date = new Date()

// console.log(date);
// -----------------------------------------------------------------
// CODEWARS - 10/09/20
// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Break String into an array
// loop through the array
// have two arrays - one with letters and one without
// make a conditional statement

// function getStrings(city) {
// 	let newCity = city.toLowerCase().split('');
// 	console.log(newCity);
// 	let newArr = [];
// 	let duplicate = '';
// 	let invis = '';

// 	for (let i = 0; i < newCity.length; i++) {
// 		if (
// 			newArr.indexOf(newCity[i]) === -1 &&
// 			newArr.indexOf(newCity[i] + ':*') === -1 &&
// 			newArr.indexOf(newCity[i] + ':**') === -1 &&
// 			newArr.indexOf(newCity[i] + ':***') === -1 &&
// 			newArr.indexOf(newCity[i] + ':****') === -1 &&
// 			newArr.indexOf(newCity[i] + ':*****') === -1 &&
// 			newArr.indexOf(newCity[i] + ':******') === -1 &&
// 			newArr.indexOf(newCity[i] + ':*******') === -1 &&
// 			newArr.indexOf(newCity[i] + ':********') === -1 &&
// 			newArr.indexOf(newCity[i] + ':*********') === -1 &&
// 			newArr.indexOf(newCity[i] + ':**********') === -1 &&
// 			newArr.indexOf(newCity[i] + ':***********') === -1
// 		) {
// 			newArr.push(newCity[i] + ':*');
// 		} else if (newArr.indexOf(newCity[i] + ':**') >= 0) {
// 			duplicate = newArr.indexOf(newCity[i] + ' :**');
// 			newArr[duplicate] = newCity[i] + ':***';
// 		} else if (newArr.indexOf(newCity[i] + ':***') >= 0) {
// 			duplicate = newArr.indexOf(newCity[i] + ':***');
// 			newArr[duplicate] = newCity[i] + ':****';
// 		} else if (newArr.indexOf(newCity[i] + ':****') >= 0) {
// 			duplicate = newArr.indexOf(newCity[i] + ':****');
// 			newArr[duplicate] = newCity[i] + ':*****';
// 		} else if (newArr.indexOf(newCity[i] + ':*****') >= 0) {
// 			duplicate = newArr.indexOf(newCity[i] + ':*****');
// 			newArr[duplicate] = newCity[i] + ':******';
// 		} else if (newArr.indexOf(newCity[i] + ':******') >= 0) {
// 			duplicate = newArr.indexOf(newCity[i] + ':******');
// 			newArr[duplicate] = newCity[i] + ':*******';
// 		} else if (newArr.indexOf(newCity[i] + ':*******') >= 0) {
// 			duplicate = newArr.indexOf(newCity[i] + ':*******');
// 			newArr[duplicate] = newCity[i] + ':********';
// 		} else if (newArr.indexOf(newCity[i] + ':********') >= 0) {
// 			duplicate = newArr.indexOf(newCity[i] + ':********');
// 			newArr[duplicate] = newCity[i] + ':*********';
// 		} else if (newArr.indexOf(newCity[i] + ':*********') >= 0) {
// 			duplicate = newArr.indexOf(newCity[i] + ':*********');
// 			newArr[duplicate] = newCity[i] + ':**********';
// 		} else if (newArr.indexOf(newCity[i] + ':**********') >= 0) {
// 			duplicate = newArr.indexOf(newCity[i] + ':**********');
// 			newArr[duplicate] = newCity[i] + ':***********';
// 		} else {
// 			duplicate = newArr.indexOf(newCity[i] + ':*');
// 			newArr[duplicate] = newCity[i] + ':**';
// 		}
// 	}
// 	if (newArr.indexOf(" :*")> 0) {
// 		invis = newArr.indexOf(' :*');
// 		newArr.splice(invis, 1);
// 	} else if (newArr.indexOf(" :**")> 0) {
// 		invis = newArr.indexOf(' :**');
//         newArr.splice(invis, 1);
//     } else if (newArr.indexOf(" :***")> 0) {
// 		invis = newArr.indexOf(' :***');
//         newArr.splice(invis, 1);
//     } else if (newArr.indexOf(" :****")> 0) {
// 		invis = newArr.indexOf(' :****');
//         newArr.splice(invis, 1);
//     }
// 	let newVal = newArr.join();
// 	console.log(newVal);
// }

// getStrings('lllccclas vegas f ');
//
//
//******** */ CODEWARS PRACTICE - 10/13/20***********

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases.
// Good luck!

// function repeats(arr){
//     let newArr = [];
//     let doublecheck = "";
//     let sum = 0;

//     for (let i=0; i <= arr.length -1 ; i++){
//        if( newArr.indexOf(arr[i]) === -1 ){
//            newArr.push(arr[i])
//        } else {
//             doublecheck = newArr.indexOf(arr[i])
//             newArr.splice(doublecheck, 1);
//         };
//     };

//     function myFunc(item){
//         sum += item;
//     }
//     newArr.forEach(myFunc)

//     return sum;

// }

// repeats([4, 5, 7, 5, 8, 4]);

// CODEWARS PRACTICE - 10/15/20
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// need to switch string to an array
// iterate through the array
// conditional of if it matches a vowel, add to sum
// print sum at end

// function getCount(str) {
//     let vowelsCount = 0;
//     let arr = str.split("")
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] === "a"|| arr[i] === "e" || arr[i] === "i"|| arr[i] === "o"|| arr[i] === "u") {
//             vowelsCount ++
//         }
//     }

// 	return vowelsCount;
// }

// getCount('Hellooo');

//  CODEWARS PRACTICE - 10/15/20
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// Loop through the array
// if it matches with 0, maybe pop and then push?

// var moveZeros = function (arr) {
//     let newArr=[]
// 	for(let i=0; i <= arr.length; i++){
//         if( arr[i] == 0){
//             arr.splice(i, 1)
//             newArr.push(0)
//             console.log(arr);
//             console.log(newArr);
//         }
//     } console.log([...arr, ...newArr]);
// };

// moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]);

// ___________________________________________________________________________________
// CODEWARS PRACTICE - 10/21/20
// You are given an array of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

// Your task is to find x * x * y.

// Example
// For arr=[1, 1, 1, 2, 2, 3], the result should be 18

// 3 x 3 x 2 = 18

// For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000

// 200 x 200 x 100 = 4000000

// Input/Output
// [input] integer array arr

// an array contains positive integers.

// [output] an integer

// The value of x * x * y

// ***** SOLUTION *****

// function missingValues(arr) {
// 	let x;
// 	let y;
// 	let val = {};
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (!val[arr[i]]) {
// 			val[arr[i]] = 1;
// 		} else {
// 			val[arr[i]]++;
// 		}
// 	}
// 	newArr = Object.keys(val);
// 	newArr.forEach((num) => {
// 		if (val[num] === 1) {
// 			x = num;
// 		} else if (val[num] === 2) {
// 			y = num;
// 		}
// 	});
// 	return x * x * y;
// }

// missingValues([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56]);

// _______________________________________________________________________________

// CODEWARS PRACTICE  - 10/23/20
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

// ***** SOLUTION *****

// function solution(number) {
// 	let sum = 0
// 	for (let i = 1; i < number; i++) {
// 		if(i % 3 == 0){
// 			sum += i
// 		} else if (i % 5 == 0){
// 			sum += i
// 		}
// 	} return sum
// }

// solution(16)

// _________________________________________________________________________________
// CODEWARS PRACTICE  - 10/24/20

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//  ***** SOLUTION *****

// function findOdd(A) {
// 	let odd = {};
// 	let answer = 0;
// 	for (let i = 0; i < A.length; i++) {
// 		if (!odd[A[i]]) {
// 			odd[A[i]] = 1;
// 		} else {
// 			odd[A[i]]++;
// 		}
// 	}
// 	let val = Object.keys(odd);
// 	val.map((x) => {
// 		if (odd[x] % 2 != 0) answer = parseInt(x);
// 	});
// 	return answer;
// }

// findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);

// ______________________________________________________________________________________________
// CODEWARS PRACTICE - 10/26/20
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// ******SOLUTION*****

// function spinWords(n) {
// 	newArr = n.split(' ');
// 	newWord = '';
// 	ind = 0;
// 	for (let i = 0; i < newArr.length; i++) {
// 		if (newArr[i].length >= 5) {
// 			newWord = newArr[i].split('').reverse().join('');
// 			ind = newArr.indexOf(newArr[i]);
// 			newArr.splice(ind, 1, newWord);
// 		}
// 	}
// 	console.log(newArr.join(' '));
// }

// spinWords('Hey fellow warriors');

// _________________________________________________________________________________________________
// CODEWARS PRACTICE - 10/27/2020
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// ***** SOLUTION *****

// function digital_root(n) {
// 	let sum = 0;
// 	let str = n.toString().split('');
// 	if (str.length <= 1) {
// 		return n;
// 	} else {
// 		for (let i = 0; i < str.length; i++) {
// 			sum += parseInt(str[i]);
// 		}
// 	}
// 	return digital_root(sum);
// }

// console.log(digital_root(456));

// CODEWARS PRACTICE - 11/02/20
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:
// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

// let count = 0;

// function persistence(num) {
// 	let sum = 1;
// 	numStr = num.toString().split('');

// 	if (numStr.length <= 1) {
// 		return count;
// 		count = 0;
// 	} else {
// 		for (let i = 0; i < numStr.length; i++) {
// 			sum *= parseInt(numStr[i]);
// 		}
// 		count++;
// 		return persistence(sum);
// 	}
// 	return count;
// }

// persistence(25);

// ______________________________________________________________________________________________________________________________________
// CODEWARS PRACTICE - 11/03/20
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//  ***** SOLUTION *****

// function findOutlier(integers) {
// 	newArrEven = [];
// 	newArrOdd = [];
// 	for (let i = 0; i < integers.length; i++) {
// 		if (integers[i] % 2 === 0) {
// 			newArrEven.push(integers[i]);
// 		} else {
// 			newArrOdd.push(integers[i]);
// 		}
// 	}
// 	if (newArrEven.length < 2) {
// 		return parseInt([...newArrEven].join(''));
// 	} else {
// 		return parseInt([...newArrOdd].join(''));
// 	}
// }

// findOutlier([160, 3, 1719, 19, 11, 13, -21]);

// ____________________________________________________________________________________________________________________________-

// CODEWARS PRACTICE - 11/04/20
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// *****SOLUTION*****
// function duplicateCount(text) {
// 	let newArr = text.toUpperCase().split("")
// 	let arrOne = [];
// 	let arrTwo=[];

// 	for(let i = 0; i < newArr.length; i++){
// 		if(arrOne.indexOf(newArr[i]) === -1){
// 			arrOne.push(newArr[i])
// 		} else if( arrTwo.indexOf(newArr[i]) === -1) {
// 			arrTwo.push(newArr[i])
// 		}
// 	}
// 	return arrTwo.length;
// }

// duplicateCount('Indivisibilities');

// __________________________________________________________________

// CODEWARS PRACTICE - 11/03/20
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

// *****SOLUTION*****
// function likes(names) {
// 	let name = names.length - 2;

// 	if (names.length < 1) {
// 		return 'no one likes this';
// 	} else if (names.length <= 1) {
// 		return names[0] + ' likes this';
// 	} else if (names.length == 2) {
// 		return names[0] + ' and ' + names[1] + ' like this';
// 	} else if (names.length == 3) {
// 		return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
// 	} else {
// 		return (names[0] + ', ' + names[1] + ' and ' + name + ' others like this')
// 	}
// }

// console.log(likes(["peter", "bob", "mike", "john", "john"]))

//
// function reverseWordsInSentence(sentence){
// 	let newArr = sentence.split(" ").reverse().join(" ")
// 	return newArr;
// }

// function reverseLettersInWords(sentence){
// 	let newArr = sentence.split(" ");
// 	let newSentence = [];
// 	for (let i=0; i < newArr.length; i++){
// 			newSentence.push(newArr[i].split("").reverse().join(""))

// 	}
// 	return newSentence.join(" ");
// }

// console.log(reverseLettersInWords("The quick brown fox jumps over the lazy dog"));
// // dog lazy the over jumps fox brown quick The

// _____________________________________________________________________
// CODEWARS PRACTICE  11/06/20
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// ***** SOLUTION *****
// function pigIt(str) {
// 	let newArr = str.split(' ');
// 	let valOfInd = '';
// 	for (let i = 0; i < newArr.length; i++) {
// 		newArr[i].charAt(0);
// 	}
// 	console.log(newArr);
// }

// pigIt('Pig latin is cool');

// ____________________________________________________________________________
// CODEWARS PRACTICE - 11/10/20
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//  ***** SOLUTION *****
// function isValidWalk(walk) {
// 	let count = 0
// 	if(walk.length !== 10){
// 		return false
// 	} else {
// 	for (let i = 0; i < walk.length; i++) {
// 		if( walk[i] == "n"){
// 			count++
// 		} else if (walk[i] == "s"){
// 			count--
// 		} else if (walk[i] == "e"){
// 			count++
// 		} else {
// 			count--
// 		}
// 	}
// }

// 	return count === 0 ? true: false

// }

// console.log(isValidWalk(['e', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'w']))

// ___________________________________________________________________________________

// CODEWARS - 11/10/20
// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// 	if (newNum.length == 1) {
// 		return newNum.join('');
// 	}

// 	for (let i = 1; i < newNum.length; i++) {
// 		if (parseInt(newNum[i]) % 2 === 0) {
// 			evenArr.push(newNum[i]);
// 		} else if (
// 			parseInt(newNum[i]) % 2 !== 0 &&
// 			parseInt(newNum[i + 1]) % 2 === 0
// 		) {
// 			evenArr.push('-' + newNum[i] + '-');
// 		} else {
// 			evenArr.push('-' + newNum[i]);
// 		}
// 	}
// 	return evenArr.join('');
// }

// console.log(dashatize(70));

// ________________________________________________________________________

// CODEWARS - 11/13/20
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// ***** SOLUTION *****
// function squareDigits(num){
//    let digits= num.toString().split("");
//    console.log(digits);

//    let squaredNum = []
//     for(let i=0; i<= digits.length; i++) {
//         let squaredNum = num[i] * num[i]
//     };
//     return squaredNum;
// };

// squareDigits(9119);
// console.log('hello hello');

// _________________________________________________________________
// CODEWARS - 11/17/20
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
// 	let newArr = [];
// 	for (let i = 0; i < a.length; i++) {
// 		if (b.indexOf(a[i]) === -1) {
// 			newArr.push(a[i]);
// 		}
// 	}
// 	return newArr;
// }

// arrayDiff([1, 2], [1]);

// CODEWARS - 11/18/20
// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountain desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or

// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or

// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or

// { "WEST" }
// or

// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.

// ***** SOLUTION *****
// function dirReduc(arr) {
// 	let north = [];
// 	let south = [];
// 	let east = [];
// 	let west = [];
// 	let sum = 0;
// 	let sum1 = 0;
// 	let sum2 = 0;
// 	let sum3 = 0;
// 	let finalArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 'NORTH') {
// 			north.push(arr[i]);
// 		} else if (arr[i] === 'SOUTH') {
// 			south.push(arr[i]);
// 		} else if (arr[i] === 'WEST') {
// 			west.push(arr[i]);
// 		} else {
// 			east.push(arr[i]);
// 		}
// 	}
// 	console.log(east.length);
// 	console.log(west.length);

// 	if (north.length > south.length) {
// 		sum = north.length - south.length;
// 		north.splice(0, sum);
// 		south.splice(0, south.length);
// 	} else if (south.length > north.length) {
// 		sum1 = south.length - north.length;
// 		south.splice(0, sum1);
// 		north.splice(0, north.length);
// 	} else if (
// 		north.length >= 2 &&
// 		south.length >= 2 &&
// 		north.length === south.length
// 	) {
// 		south.splice(0, south.length);
// 		north.splice(0, north.length);
// 	}
// 	if (west.length > east.length) {
// 		sum2 = west.length - east.length;
// 		west.splice(0, sum2);
// 		east.splice(0, east.length);
// 	} else if (east.length > west.length) {
// 		sum3 = east.length - west.length;
// 		east.splice(0, sum3);
// 		west.splice(0, west.length);
// 	} else if (
// 		west.length >= 2 &&
// 		east.length >= 2 &&
// 		west.length === east.length
// 	) {
// 		west.splice(0, west.length);
// 		east.splice(0, east.length);
// 	}
// 	let final = [...east, ...north, ...west, ...south];
// 	 console.log(final);
// }

// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);

// ______________________________________________________________________________________________________

// CODEWARS CHALLENGE - 12/09/20
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// ***** SOLUTION *****

// function add ([a,b]){
// 	a + b

// }

// function orderWeight(strng) {
// 	let newArr = strng.split(" ");
// 	let number;
// 	let tempArr = [];
// 	for(let i = 0; i < newArr.length; i++){
// 		console.log(newArr[i]);
// 		number =newArr[i].split("");
// 		console.log(number);
// 		number.forEach(x => {
// 			tempArr.push(parseInt(x));
// 			console.log(tempArr);
// 		})

// 		}

// }

// // add(["7", "8"])

// orderWeight('56 65 74 100 99 68 86 180 90');

// function oddNumbers(l, r) {
//     let newArr= [];
//     console.log(newArr)
//     for(let i = l; i < r + 1; i++){
//         if (i % 2 !== 0) {
//             newArr.push(i)
//         }
//     } console.log(newArr)
// }

// oddNumbers(1, 5)

//

// function printTable(n) {
//     let row = n;
//     let column = n;
//     let newArr = []
//     for (let i = 1; i < row + 1; i++){
//         for( let j = 1; j < column + 1; j++){
//             if(newArr.length <= n){}
//             newArr.push(i * j)
//             console.log(newArr);
//         }
//     }
// }
// printTable(4)

// const url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=';

// fetch(url)
// 	.then((res) => {
// 		return res.json()
//     })
//     .then(res => {
//         console.log("success", res.data);
//         let sortedVal = res.data.map(x => x.Title)
//         sortedVal.sort()
//         console.log(sortedVal);

//     })
// 	.catch((err) => {
// 		console.log('something went wrong...', err);
//     });
// function countingValleys(steps, path) {
//     let down = -1;
//     let up = 1;
//     let sum = 0;
//     let total = 0;

//     for(let i = 0; i < path.length; i++){
//         if(path[i] === "D"){
//             sum += up
//             console.log(sum);
//         } else if(path[i] === "U") {
//             sum -= down
//         } else if( sum === 0){
//             total++
//         }
//     console.log(total)
//     }
// }

// countingValleys()

//-----------------------------------------------
// HackerRank Challenge - Sales by Match
//  Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// ***** SOLUTION *****
// function sockMerchant(n, ar) {
// 	let total = 0;
// 	let newArr = {};
// 	let newVal = [];
// 	for (let i = 0; i < ar.length; i++) {
// 		if (!newArr[ar[i]]) {
// 			newArr[ar[i]] = 0;
// 		}
// 		newArr[ar[i]] = newArr[ar[i]] + 1;
// 	}
// 	newVal = Object.values(newArr);
// 	newVal.forEach((value) => {
// 		if (value > 1) {
// 			total += Math.floor(value / 2);
// 		}
// 	});
// 	console.log(total);
// }

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// HACKERRANK - Jumping on the Clouds - 12/22/20
// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

// Example

// Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .

// function jumpingOnClouds(c) {
// 	var count = 0;
// 	for (var i = 0; i < c.length; i++) {
// 		if (c[i] === 0) {
// 			if (c[i] === c[i + 1]) {
// 				count++;
// 				i++;
// 			}
// 		} else {
// 			count++;
// 		}
// 	}

// 	return count;
// }

// jumpingOnClouds([0, 0, 0, 1, 0, 0]);

// HACKERRANK CHALLENGE - 12/23/20 - Repeated String
// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example

// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

// ***** SOLUTION *****
// function repeatedString(s, n) {
// 	let count= 0
// 	if(s === 'a'){
// 		count = n
// 		console.log(count)
// 	}
// 	let length = Math.ceil(n / s.length)
// 	let newStr = s.repeat(length)
// 	let arr = newStr.split("")
// 	let newArr = arr.splice(n, arr.length - n )
// 	arr.forEach((x) => {if(x === "a"){
// 		count++
// 	}})
// 	console.log(count);
// }

// repeatedString(
// 	'aba',
// 	10
// );
// __________________________________________________
// Find two numbers in a sorted array that sum to a target
// function two_sum(arr, target) {
// 	let left = 0;
// 	let right = arr.length - 1;
// 	let total = 0;
// 	while (left < right && total != target) {
// 		let total = arr[left] + arr[right];
// 		if (total < target) {
// 			left += 1;
// 		} else if (total > target) {
// 			right -= 1;
// 		} else {
// 			return [left, right];
// 		}
// 	}
// }

// console.log(two_sum([-1, 1, 2, 3, 5], 5));
// ________________________________________________________________-

//  Given a sorted array and a target, return the indices of three values that sum up to the target.
// Assume there is only 1 possible answer.
// Return [-1,-1,-1] if three indices that sum to the target do not exist.

// function three_sum(arr, target){
// 	for(let i=0; i< arr.length; i++){
// 		let left = i + 1;
// 		let right = arr.length - 1;
// 		let total = 0;
// 		while(left < right){
// 			total = arr[left] + arr[right] + arr[i]
// 			if(total < target){
// 				left ++
// 			} else if ( total > target){
// 				right --
// 			} else {
// 				return[i, left, right]
// 			}
// 		}
// 	}
// }

// function threeSum(arr, target) {
// 	for (let i = 0; i < arr.length; i++) {
// 		var left = i + 1;
// 		var right = arr.length - 1;
// 		while (left < right) {
// 			var curr = arr[i] + arr[left] + arr[right];
// 			if (curr < target) {
// 				left++;
// 			} else if (curr > target) {
// 				right--;
// 			} else {
// 				return [arr[i], arr[left], arr[right]];
// 			}
// 		}
// 	}
// 	return [-1, -1, -1];
// }

// console.log(threeSum([1, 2, 4, 5, 12], 19));

//
// function squared(arr){
// 	let newArr = arr.sort(function (a, b) {
// 		return (a*a)-(b*b);
// 	});
// 	console.log(newArr);
// }

// squared([-4, -6, -2, 1, 4, 5])

//

// function hourglassSum(arr) {
// 	let total = ;

// 	for (let i = 0; i < 4; i++) {
// 		for (let j = 0; j < 4; j++) {
// 			let sum =
// 				arr[i][j] +
// 				arr[i][j + 1] +
// 				arr[i][j + 2] +
// 				arr[i + 1][j + 1] +
// 				arr[i + 2][j] +
// 				arr[i + 2][j + 1] +
// 				arr[i + 2][j + 2];
// 			if (sum > total) {
// 				total = sum;
// 			}
// 		}
// 	}
// 	console.log(total);
// }

// hourglassSum([
// 	[1, 1, 1, 0, 0, 0],
// 	[0, 1, 0, 0, 0, 0],
// 	[1, 1, 1, 0, 0, 0],
// 	[0, 0, 2, 4, 4, 0],
// 	[0, 0, 0, 2, 0, 0],
// 	[0, 0, 1, 2, 4, 0],
// ]);

// _________________________________________
// FIND TWO NUMBERS IN A SORTED ARRAY THAT SUM TO A TARGET. PRACTICING AGAIN

// function findSum(arr, target) {
// 	let left = 0;
// 	let right = arr.length - 1;

// 	while (left < right) {
// 		if (arr[left] + arr[right] < target) {
// 			left++;
// 		} else if (arr[left] + arr[right] > target) {
// 			right--;
// 		} else {
// 			return [arr[left], arr[right]];
// 		}
// 	}
// }

// console.log(findSum([1, 2, 3, 5, 12], 19));

// FIND THREE NUMBERS IN A SORTED ARRAY THAT SUM TO A TARGET. PRACTICING AGAIN

// function findThreeSum(arr, target) {
// 	for (let i = 0; i < arr.length; i++) {
// 		let left = i + 1;
// 		let right = arr.length - 1;
// 		let total = 0;

// 		while (left < right && total != target) {
// 			total = arr[i] + arr[left] + arr[right];
// 			if (total < target) {
// 				left++;
// 			} else if (total > target) {
// 				right--;
// 			} else {
// 				return [arr[i], arr[left], arr[right]];
// 			}
// 		}
// 	}
// }

// console.log(findThreeSum([1, 2, 3, 5, 12], 19));

// function hourGlassSumz(arr) {
// 	let length = 4;
// 	let height = 4;
// 	let total = -63;
// 	let sum = 0;

// 	for (let i = 0; i < length; i++) {
// 		for (let j = 0; j < height; j++) {
// 			sum =
// 				arr[i][j] +
// 				arr[i][j + 1] +
// 				arr[i][j + 2] +
// 				arr[i + 1][j + 1] +
// 				arr[i + 2][j] +
// 				arr[i + 2][j + 1] +
// 				arr[i + 2][j + 2];

// 			if (sum > total) {
// 				total = sum;
// 			}
// 		}
// 	}
// 	console.log(total);
// }

// hourGlassSumz([
// 	[1, 1, 1, 0, 0, 0],
// 	[0, 1, 0, 0, 0, 0],
// 	[1, 1, 1, 0, 0, 0],
// 	[0, 0, 2, 4, 4, 0],
// 	[0, 0, 0, 2, 0, 0],
// 	[0, 0, 1, 2, 4, 0],
// ]);

// ___________________________________________________________
// 01/14/21 - HackerRank Challenge - Arrays - Left Rotation
// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// function rotLeft(a, d) {
// 	let move = a - d
// 	let newArr = []

// 	for(let i = 1; i < a + 1; i--){
// 		newArr.push(i)
// 	}

// }

// rotLeft(5, 4)

//__________________________________________________________
// HACKERRANK CHALLENGE 2/2/21
// COUNTING VALLEYS...AGAIN
// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// convert string into array
// loop through Array

// function countingValleys(steps, path) {
// 	let newPath = path.split('');
// 	console.log(newPath);
// 	let up = 0;
// 	let down = 0;
// 	let total = 0;
// 	let valleys = 0;

// 	for (let i = 0; i < newPath.length; i++) {
// 		if (newPath[i] === 'U') {
// 			total++;
// 		} else if (newPath[i] === 'D') {
// 			total--;
// 		}

// 		if (newPath[i] === 'U' && total === 0) {
// 			valleys++;
// 		}
// 	}
// 	return valleys;
// }

// countingValleys(8, 'DDUUDDUDUUUD');

// _______________________________________________________-
// Hacker rank challenge - jumping clouds...solving, AGAIN
// Arrays: Left Rotation
// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// // int d: the number of rotations
// function rotLeft(a, d) {
// 	let arr = [];
// 	let newArr = [];
// 	let index = 0;

// 	for (let i = 1; i <= a; i++) {
// 		arr.push(i);
// 	}
// 	for (let i = a - 1; i >= 0; i--) {
// 		let index = d - i;
// 		console.log(`${index} and  ${arr[i]}`);
// 		newArr.splice(index, 0, arr[i]);
// 		console.log(newArr);
// 	}
// 	console.log(newArr);
// }

// rotLeft(5, 2);

// const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
// console.log(insertionSort(list));

// function insertion(items) {
//     for(let i= 0; i < items.length; i++){
//         let value = items[i]
//         for(let j = i - 1; j > -1 && items[j] > value; j--){
//             items[j + 1] = items[j]
//         }
//         items[j + 1] = value
//     }

// }

// function insertion(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		let value = items[i];
// 		for (let j = i - 1; j > -1 && items[j] > value; j--) {
// 			items[j + 1] = items[j];
// 		}
// 		items[ j + 1] = value;
// 	}
// 	return items;
// }

// function insertionSort(items) {
// 	for (var i = 0; i < items.length; i++) {
// 		let value = items[i];
// 		// store the current item value so it can be placed right
// 		for (var j = i - 1; j > -1 && items[j] > value; j--) {
// 			// loop through the items in the sorted array (the items from the current to the beginning)
// 			// copy each item to the next one
// 			items[j + 1] = items[j];
// 		}
// 		// the last item we've reached should now hold the value of the currently sorted item
// 		items[j + 1] = value;
// 	}

// 	return items;
// }

// function insertionSort(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		let value = items[i];
// 		for (var j = i - 1; j > -1 && items[j] > value; j--) {
// 			// loop through the items in the sorted array (the items from the current to the beginning)
// 			// copy each item to the next one
// 			items[j + 1] = items[j];
// 		}
// 		// the last item we've reached should now hold the value of the currently sorted item
// 		items[j + 1] = value;
// 	}

// 	return items;
// }

// const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
// console.log(insertionSort(list));

// // INSERTION SORT
// function insertionSort(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		let value = items[i];
// 		for (var j = i - 1; j > -1 && items[j] > value; j--) {
// 			items[j + 1] = items[j];
// 		}
// 		items[j + 1] = value;
// 	}
// 	return items;
// }

// BUBBLE SORT
// let bubbleSort = (inputArr) => {
// 	let len = inputArr.length;
// 	for (let i = 0; i < len; i++) {
// 		for (let j = 0; j < len; j++) {
// 			if (inputArr[j] > inputArr[j + 1]) {
// 				let tmp = inputArr[j];
// 				inputArr[j] = inputArr[j + 1];
// 				inputArr[j + 1] = tmp;
// 			}
// 		}
// 	}
// 	return inputArr;
// };

// function bubbleSort(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		for (let j = 0; j < items.length; j++) {
// 			if (items[j] > items[j + 1]) {
// 				let bubble = items[j];
// 				items[j] = items[j + 1];
// 				items[j + 1] = bubble;
// 			}
// 		}
// 	}
// 	return bubble;
// }

// function newBubble(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		for (let j = 0; j < items.length; j++) {
// 			if (items[j] > items[j + 1]) {
// 				let bubble = items[j];
// 				items[j] = items[j + 1];
// 				items[j + 1] = bubble;
// 			}
// 		}
// 	}
// 	return bubble;
// }

// console.log(newBubblet([54, 26, 93, 17, 77, 31, 44, 55, 20]));

// _____________________________________________________
// HACKER RANK 2D array again
// Given a  2D Array, :

// An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

// Need a variable to kepe track of which hourglass is the largest sum
// Will need to to do two for loops, to get multiple values within arrays

// function hourGlassSumz(arr) {
// 	let sum = -63;
// 	let compairedSum = 0;
// 	for (let i = 0; i < 4; i++) {
// 		for (let j = 0; j < 4; j++) {
// 			compairedSum =
// 				arr[i][j] +
// 				arr[i][j + 1] +
// 				arr[i][j + 2] +
// 				arr[i + 1][j + 1] +
// 				arr[i + 2][j] +
// 				arr[i + 2][j + 1] +
// 				arr[i + 2][j + 2];
// 			if (compairedSum > sum) {
// 				sum = compairedSum;
// 			}
// 		}
// 	}
// 	return sum;
// }

// hourGlassSumz([
// 	[1, 1, 1, 0, 0, 0],
// 	[0, 1, 0, 0, 0, 0],
// 	[1, 1, 1, 0, 0, 0],
// 	[0, 0, 2, 4, 4, 0],
// 	[0, 0, 0, 2, 0, 0],
// 	[0, 0, 1, 2, 4, 0],
// ]);

// ___________________________________________________________________
// // HackerRank - Mini-Max Sum
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example
// The minimum sum is  and the maximum sum is . The function prints
// 16 24

// function miniMaxSum(arr) {
// 	let smallVal = 0;
// 	let largeVal = 0;
// 	let newArr = arr.sort(function (a, b) {
// 		return a - b;
// 	});

// 	for (let i = 0; i < arr.length - 1; i++) {
// 		smallVal += arr[i];
// 	}
// 	for (let i = 1; i < arr.length; i++) {
// 		largeVal += arr[i];
// 	}
// 	return([smallVal, largeVal]);
// }

// miniMaxSum([2, 1, 3, 4, 5]);

// ___________________________________________________________________
// Practice of Insertion Sort

// function insertionSort(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		let value = items[i];
// 		for (var j = i - 1; j > -1 && items[j] > value; j--) {
// 			items[j + 1] = items[j];
// 		}
// 		items[j + 1] = value;
// 	}
// 	return items;
// }

// function insertionSort(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		value = items[i];
// 		for (var j = i - 1; j > -1 && items[j] > value; j--) {
// 			items[j + 1] = items[j];
// 		}
// 		items[j + 1] = value;
// 	}
// 	console.log(items);
// }

// function insertionSort(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		value = items[i];
// 		for (var j = i - 1; j > -1 && items[j] > value; j--) {
// 			items[j + 1] = items[j];
// 		}
// 		items[j + 1] = value;
// 	}
// 	return items;
// }

// function insertionSort(items) {
// 	for (let i = 0; i < items.length; i++) {
// 		value = items[i];
// 		for (var j = i - 1; j > -1 && items[j] > value; j--) {
// 			items[j + 1] = items[j];
// 		}
// 		items[j + 1] = value;
// 	}
// 	return items;
// }

// const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
// console.log(insertionSort(list));

// CodeWar  - 2/16/21
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// function validParentheses(parens) {
// 	let openCount = 0;
// 	let closeCount = 0;
// 	let newArr = parens.split('');
// 	for (let i = 0; i < newArr.length; i++) {
// 		if (newArr[i] === '(' && openCount >= closeCount) {
// 			openCount++;
// 		} else {
// 			closeCount++;
// 		}
// 	}
// 	if (openCount === closeCount) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// validParentheses(')(()))');

// ___________________________________________________________
// HACKERRANK - 2/17 - Left Rotation
// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// function rotLeft(a, d) {
// 	let newArr = [];
// 	for (let i = 0; i < d; i++) {
// 		let first = a.shift();
// 		a.push(first);
// 	}
// 	return a;
// }

// rotLeft([1, 2, 3, 4, 5], 4);

// -_________________________________________________________
// HackerRank problem - 4/18 -
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example

// The maximum height candles are  units high. There are  of them, so return .

// function birthdayCakeCandles(candles) {
// 	candles.sort(function (a, b) {
// 		return a - b;
// 	});
// 	console.log(candles);
// 	let lastNumber = sortedCandles[candles.length - 1];
// 	let count = 0;

// 	for (let i = 0; i < candles.length; i++) {
// 		if (candles[i] === lastNumber) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// birthdayCakeCandles([4, 4, 1, 3]);

// _________________________________________________________
// HackerRank - Anagrams - 2/22
// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

// Split the strings into arrays
// loop through the arrays
// determining if it is in an empty object, there by inputting it into an object.
// Go through the values of the object for those that equal one and count ++

// function makeAnagram(a, b) {
// 	let sortedArrLong = a.length >= b.length ? a.split('') : b.split('');
// 	let sortedArrShort = a.length >= b.length ? b.split('') : a.split('');
// 	let whichLetters = {};
// 	let count = 0;

// 	for (let i = 0; i < sortedArrLong.length; i++) {
// 		if (Object.keys(whichLetters).includes(sortedArrLong[i])) {
// 			whichLetters[sortedArrLong[i]] = whichLetters[sortedArrLong[i]] + 1;
// 			count++;
// 		} else {
// 			whichLetters[sortedArrLong[i]] = 0;
// 		}
// 		if (Object.keys(whichLetters).includes(sortedArrShort[i])) {
// 			whichLetters[sortedArrShort[i]] = whichLetters[sortedArrShort[i]] + 1;
// 			count++;
// 		} else {
// 			whichLetters[sortedArrShort[i]] = 0;
// 		}
// 	}
// 	console.log(whichLetters);
// 	let final = Object.values(whichLetters);

// 	final.forEach(function (zero) {
// 		if (zero === 0 && zero != undefined) {
// 			count++;
// 		}
// 	});
// 	console.log(count);
// }

// makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke');

// ______________________________
// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

// Example:

// function fibonacci(n) {
// 	let sum = 0;
// 	newArr = [0, 1];
// 	if (n <= 0) {
// 		return [];
// 	}
// 	for (let i = 1; i < n - 1; i++) {
// 		sum = newArr[i] + newArr[i - 1];
// 		newArr.push(sum);
// 	}
// 	return newArr;
// }

// fibonacci(4);

// ____________________________________________
// Codewar - Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

// Courtesy of projecteuler.net

// function solution(number) {
// 	sum = 0
// 	for(let i = 1; i < number; i++){
// 		if(i % 3 === 0 && i % 5 != 0){
// 			sum += i
// 		} else if ( i % 5 === 0 && i % 3 !== 0){
// 			sum += i
// 		} else if ( i % 5 === 0 && i % 3 === 0)
// 			sum += i
// 	}
// 	return (sum);
// }

// solution(16);

// CodeWar - How Many Numbers III - 3/3
// We want to generate all the numbers of three digits where:

// the sum of their digits is equal to 10.

// their digits are in increasing order (the numbers may have two or more equal contiguous digits)

// The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334

// Make a function that receives two arguments:

// the sum of digits value

// the desired number of digits for the numbers

// The function should output an array with three values: [1,2,3]

// 1 - the total number of possible numbers

// 2 - the minimum number

// 3 - the maximum number

// The example given above should be:

// findAll(10, 3) => [8, "118", "334"]
// If we have only one possible number as a solution, it should output a result like the one below:

// findAll(27, 3) => [1, "999", "999"]
// If there are no possible numbers, the function should output the empty array.

// findAll(84, 4) => []
// The number of solutions climbs up when the number of digits increases.

// findAll(35, 6) => [123, '116999', '566666']
// Features of the random tests:

// Number of tests: 112
// Sum of digits value between 20 and 65
// Amount of digits between 2 and 17

// _____________________________________________
// ***SOLUTION***
// function findAll(n, k) {
// 	let number = Math.pow(10, k - 1)
// 	let highNum = Math.pow(10, k)
// 	let sum = 0
// 	let answerOne = []
// 	for( let i = number; i < highNum; i++){
// 		let sortedNum = i.toString().split("")
// 		console.log(sortedNum);
// 		for( let j = 0; j < sortedNum.length; j++ ){
// 			console.log(sortedNum);
// 		}
// 	}

// }

// findAll(10, 3)

// 	for(let i=0; i< arr.length; i++){
// 		let left = i + 1;
// 		let right = arr.length - 1;
// 		let total = 0;
// 		while(left < right){
// 			total = arr[left] + arr[right] + arr[i]
// 			if(total < target){
// 				left ++
// 			} else if ( total > target){
// 				right --
// 			} else {
// 				return[i, left, right]
// 			}
// 		}
// 	}
// }

// HackerRank - Drawing Book - 3/3/20
// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side:

// image

// When they flip page , they see pages  and . Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is  pages long, and a student wants to turn to page , what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

// Given  and , find and print the minimum number of pages that must be turned in order to arrive at page .

// **Solution**
// function pageCount(n, p) {
// 	 let sumFront = 0
// 	 let sumBack = 0
// 	for( let i = 2; i < n; i+= 2){
// 		sumFront++
// 		if( i === p || i - 1 === p){
// 			break
// 		}
// 	}

// 	for ( let j = n - 1; j >= 1; j-=2){
// 		sumBack++
// 		if( j === p || j + 1 === p){
// 			break
// 		}

// 	}
// 	if(sumFront <= sumBack){
// 		return(sumFront);
// 	} else if (sumBack <= sumFront ) {
// 		return(sumBack - 1);
// 	}

// }

// console.log(pageCount(5, 4))

// _________________________________________________
// **** HACKER RANK ****
//
// function sumPairs(ints, s) {
// 	const newInts = []
// 	for(let i = 0; i < ints.length; i++){
// 		newInts.push(ints[i])
// 	}

// 	let left = 0;
// 	let orderedArr = ints.sort((a,b) => a - b)
// 	let right = ints.length - 1
// 	let total = []
// 	let hereisLeft;
// 	let hereisRight;
// 	while(left <= right){
// 		if(orderedArr[left] + orderedArr[right] < s){

// 				left++
// 			} else if (orderedArr[left] + orderedArr[right] > s){
// 				right--
// 			} else {
// 					console.log(orderedArr[left]);
// 					console.log(orderedArr[right]);
// 					hereisLeft = newInts.indexOf(orderedArr[left]);
// 					hereisRight = newInts.indexOf(orderedArr[right])
// 				}

// 				// if(hereisLeft < hereisRight){
// 				// 	return [orderedArr[left], orderedArr[right]] }
// 				// else {
// 				// 		return [orderedArr[right], orderedArr[left]];
// 				// 	}
// 		}

// 	}

// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));

// break

// __________________________________________________
// CODEWRS - Weight for Weight
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// For C: The result is freed.

// ***SOLUTION****

// function orderWeight(strng) {
// 	let splitArrOne = strng.split("")
// 	splitArrOne.push(" ")
// 	let splitArrTwo = strng.split(" ")
// 	let sum = 0;
// 	let numberString = []
// 	let sortObj = {}
// 	let finalArr = []
// 	let finalfinalArr = []
// 	for(let i = 0; i < splitArrOne.length; i++){
// 			if(splitArrOne[i] !== " "){
// 				sum += parseInt(splitArrOne[i])
// 			} else {
// 				numberString.push(sum)
// 				sum = 0
// 			}

// 	}
// 	console.log(numberString);
// 	console.log(sum);
// 	for (let i = 0; i < numberString.length; i++){
// 		sortObj[splitArrTwo[i]] = numberString[i]
// 	}
// 	let orderedNumber  = numberString.sort((a,b) => a - b)

// 	for(let i = 0; i < orderedNumber.length; i++){
// 		for( const [key, value] of Object.entries(sortObj)){
// 			if( orderedNumber[i] == parseInt(value)){
// 				finalArr.push(key)
// 		}
// 		}
// 	}
// 	for(let i = 0; i < finalArr.length; i++){
// 		if(finalfinalArr.indexOf(finalArr[i]) == -1){
// 			finalfinalArr.push(finalArr[i])
// 		}
// 	}
// 	console.log(finalfinalArr);
// }

// orderWeight('56 65 74 100 99 68 86 180 90');

// CODEWAR - 3/11
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// function alphabetPosition(text) {
// 	let alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ")
// 	let textArr = text.toLowerCase().split("")
// 	let answer = []
// 	for( let i = 0; i < textArr.length; i++){
// 		for(let j = 0; j < alpha.length; j++){
// 			// console.log(alpha[i] + " this is alpha");
// 			// console.log(textArr[j] + " this is textArr");
// 			if(textArr[i] === alpha[j]){
// 				answer.push(j + 1)
// 			}
// 		}
// 	}
// 	return(answer.join(" ").toString());

// }

// alphabetPosition("The sunset sets at twelve o' clock.");

//
// CODEWAR - IQ Test - Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// function iqTest(numbers) {
// 	let newArr = numbers.split("")
// 	let ObjOfIt = {
// 		"even": 0,
// 		"odd": 0
// 	}
// 	for(let i = 0; i < newArr.length; i++){
// 		if(parseInt(numbers[i]) % 2 === 0 ){
// 			console.log("hello");
// 			ObjOfIt["even"]++
// 		} else if(parseInt(numbers[i] % 2 !== 0 || parseInt(numbers[i] != NaN))) {
// 			console.log("yehaw");
// 			ObjOfIt["odd"]++
// 		}
// 	}
// 	console.log(ObjOfIt);
// 	console.log(NaN);
// }

// iqTest('2 4 7 8 10');

// _____________________________________________________________
// CODEWAR - 3/16/21
// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// let  answer=[]

// function partsSums(ls) {
// 	let sum = 0
// 	if(ls.length < 1){
// 		answer.push(0)
// 		let finalAnswer = [...answer]
// 			answer = []
// 		return finalAnswer
// 	} else {
// 	for(let i = 0; i < ls.length; i++){
// 		sum += ls[i]

// 	}
// 	answer.push(sum)
// 	ls.shift()
// }
// 	return partsSums(ls)
// }

// console.log(partsSums([0, 1, 3, 6, 10]));

// _------------------------------------------
// Codewars - Human Readable time
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
	let hourCount = 0;
	let minuteCount = 0;
	let secondCount = seconds;
	let minutes = seconds / 60;
	let hours = minutes / 60;
	let answer = ['00', ':', '00', ':', '00'];

	for (let i = 1; i <= seconds; i++) {
		if (i % 3600 == 0) {
			hourCount++;
			minuteCount -= 60;
		} else if (i % 60 === 0 && i % 3600 != 0) {
			minuteCount++;
			secondCount -= 60;
		}
	}
	console.log(hourCount);
	console.log(minuteCount);
	console.log(secondCount);

	if (hourCount < 1) {
	} else if (hourCount < 10 && hourCount >= 1) {
		answer[0] = '0' + hourCount.toString();
	} else {
		answer[0] = hourCount.toString();
	}

	if (minuteCount < 1) {
	} else if (minuteCount < 10 && minuteCount >= 1) {
		answer[2] = '0' + minuteCount.toString();
	} else if (minuteCount < 60 && minuteCount > 0) {
		answer[2] = minuteCount.toString();
	}

	if (secondCount < 1) {
	} else if (secondCount < 10 && secondCount >= 1) {
		answer[4] = '0' + secondCount.toString();
	} else if (secondCount < 60 && secondCount > 0) {
		answer[4] = secondCount.toString();
	}

	console.log(answer.join('').toString());
}

humanReadable(359999);
