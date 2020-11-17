// MERGE SORT FUNCTION

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
hi
console.log("hi");
