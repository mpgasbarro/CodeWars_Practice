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
