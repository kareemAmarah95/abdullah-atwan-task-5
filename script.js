"use strict";
// Reverse Words in a Sentence
// Description: Write a function that takes a sentence as input and returns the sentence with each word reversed.
// Details:
// Make sure your function handles punctuation properly; don’t mess with it!
// The function should work for sentences of any length.
// Example:
// Input: "Hello World!"
// Output: "olleH !dlroW"
// function reverseWord() {}
// function reverseWord(str) {
//   return str.split("").reverse().join();
// }

// console.log(reverseWord("Hello World!"));
//=========================================

// Convert Roman Numerals to Integers
// Description: Create a function that converts a Roman numeral into an integer.
// Details:
// Your function should support numerals from I to M (1 to 1000).
// Consider using an object to store values for each Roman numeral.
// If the input is invalid, return null.
// Example:
// Input: "XIV"
// Output: 14
// {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }
// function value(r) {
//   if (r === "I") {
//     return 1;
//   }
//   if (r === "V") {
//     return 5;
//   }
//   if (r === "X") {
//     return 10;
//   }
//   if (r === "L") {
//     return 50;
//   }
//   if (r === "C") {
//     return 100;
//   }
//   if (r === "D") {
//     return 500;
//   }
//   if (r === "M") {
//     return 1000;
//   }
//   return -1;
// }

// function romanToDecimal(str) {
//   let res = 0; // Initialize the result
//   for (let i = 0; i < str.length; i++) {
//     let s1 = value(str[i]);
//     console.log(s1);
//     if (i + 1 < str.length) {
//       console.log(str.length);
//       //    get the value  of the next symbol
//       let s2 = value(str[i + 1]);
//       if (s1 >= s2) {
//         // if the current value is greater
//         // or equal, add it to the result
//         res += s1;
//       } else {
//         // Else , add the difference and skip
//         // the next symbol
//         res += s2 - s1;
//         i++;
//       }
//     } else {
//       // add the last symbol to the result
//       res += s1;
//     }
//   }
//   return res;
// }

// console.log(romanToDecimal("IX"));

//=========================================

// Fibonacci Sequence with Recursion
// Description: Write a function that takes a number and returns the Fibonacci number at that position using recursion.
// Details:
// Make sure to handle negative inputs by returning null.
// Your function should be efficient, so think about how recursion will affect performance.
// Example:
// Input: 6
// Output: 8

//=========================================

// Sum of Numbers from 1 to n
// Description: Write a function that calculates the sum of numbers from 1 to n.
// Details:
// Use the formula n * (n + 1) / 2 for a quick calculation.
// Handle negative inputs by returning 0 or null.
// Example:
// Input: 5
// Output: 15

//=========================================
// Toggle Case of Characters
// Description: Write a function that takes a string and toggles the case of each character.
// Details:
// Make sure to preserve punctuation and whitespace.
// Your function should handle any type of character, not just letters.
// Example:
// Input: "Hello World!"
// Output: "hELLO wORLD!"

//=========================================
// Count Repeated Characters in a String
// Description: Create a function that counts how many times each character appears in a string.
// Details:
// Use an object to store counts for each character.
// Include spaces and punctuation in your count.
// Example:
// Input: "banana"
// Output: { b: 1, a: 3, n: 2 }

//=========================================

// Check If Array Elements are in Order
// Description: Write a function to check if the elements of an array are in ascending order.
// Details:
// Your function should return true if they are in order, and false otherwise.
// Consider edge cases like an empty array or an array with one element.
// Example:
// Input: [1, 2, 3, 4]
// Output: true

//=========================================

// Find the Largest Number in an Array
// Description: Create a function that returns the largest number from an array.
// Details:
// Handle empty arrays by returning null.
// Consider negative numbers as well.
// Example:
// Input: [5, 2, 9, 1]
// Output: 9

//=========================================

// Flatten an Array
// Description: Write a function that flattens a nested array into a single array.
// Details:
// Your function should handle arrays of any depth.
// Consider edge cases like empty arrays or arrays with non-array elements.
// Example:
// Input: [[1, 2], [3, 4], [5]]
// Output: [1, 2, 3, 4, 5]

//=========================================

// Count Vowels in a String
// Description: Create a function that counts the number of vowels in a given string.
// Details:
// Consider both uppercase and lowercase vowels.
// Ignore non-alphabetic characters.
// Example:
// Input: "Hello World!"
// Output: 3

//=========================================

// Find the Second Largest Number in an Array

// Description: Write a function to find the second largest number in an array.
// Details:
// Handle cases where the array has less than two unique numbers by returning null.
// Example:
// Input: [2, 3, 1, 5, 4]
// Output: 4

//=========================================

// Check for Palindrome

// Description: Create a function that checks if a given string is a palindrome.
// Details:
// Ignore spaces, punctuation, and case differences.
// Example:
// Input: "A man, a plan, a canal, Panama!"
// Output: true

//=========================================

// Sort an Array of Strings by Length

// Description: Write a function that sorts an array of strings by their lengths.
// Details:
// Use a sorting algorithm to rearrange the strings.
// Handle cases where multiple strings have the same length.
// Example:
// Input: ["apple", "banana", "kiwi", "pear"]
// Output: ["pear", "kiwi", "apple", "banana"]

//=========================================

// Find Unique Values in an Array

// Description: Create a function that returns an array of unique values from the input array.
// Details:
// Use a data structure like a Set to ensure uniqueness.
// Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

//=========================================

// Check for Anagrams

// Description: Write a function that checks if two strings are anagrams of each other.
// Details:
// Ignore spaces and punctuation.
// Consider case sensitivity.
// Example:
// Input: "listen" and "silent"
// Output: true

//=========================================

// Generate a Random Password

// Description: Create a function that generates a random password with a given length.
// Details:
// The password should include uppercase letters, lowercase letters, numbers, and symbols.
// Make sure the password is secure and random.
// Example:
// Input: 8
// Output: aB3#fG8!

//=========================================

// Find Common Elements in Two Arrays

// Description: Write a function that finds common elements between two arrays.
// Details:
// Use efficient data structures for performance.
// Handle edge cases like empty arrays.
// Example:
// Input: [1, 2, 3] and [2, 3, 4]
// Output: [2, 3]

//=========================================

// Rotate an Array

// Description: Create a function that rotates an array by a given number of positions.
// Details:
// Handle cases where the rotation count is greater than the array length.
// Consider using array slicing.
// Example:
// Input: [1, 2, 3, 4, 5] and 2
// Output: [4, 5, 1, 2, 3]

//=========================================

// Find the Intersection of Two Arrays

// Description: Write a function that finds the intersection of two arrays (common elements).
// Details:
// Use sets for optimal performance.
// Return an array of the intersecting elements.
// Example:
// Input: [1, 2, 3] and [2, 3, 4]
// Output: [2, 3]

//=========================================

// Longest Substring Without Repeating Characters

// Description: Write a function that finds the length of the longest substring without repeating characters.
// Details:
// Use a sliding window technique for optimal performance.
// Handle edge cases with empty strings.
// Example:
// Input: "abcabcbb"
// Output: 3 (The answer is "abc")

//=========================================

// Two Sum Problem (Challenging)

// Description: Given an array of integers, return the indices of the two numbers such that they add up to a specific target.
// Details:
// You must not use the same element twice.
// Your solution should be optimized for performance, ideally O(n).
// Consider using a hash map to track indices.
// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

//=========================================

// Group Anagrams (Very Challenging)

// Description: Given an array of strings, group the anagrams together.
// Details:
// An anagram is a word formed by rearranging the letters of a different word.
// You should return a list of groups of anagrams.
// Consider using sorting or a hash map to categorize the words.
// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

//===============================================================================

// const express = require("express");
// const jsonwebtoken = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const bodyParser = require("body-parser"); // Add bodyParser
// const app = express();
// const port = 3000;

// const users = [];
// const secretKey = "your_secret_key"; // Use an environment variable for better security

// app.use(bodyParser.json()); // Middleware to parse JSON bodies

// // Register route
// app.post("/register", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the user already exists
//     const findUser = users.find((data) => email === data.email);
//     if (findUser) {
//       return res.status(400).send("User already exists!");
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     users.push({ email, password: hashedPassword });
//     console.log(users);

//     res.status(201).send("Registered successfully!");
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// });

// // Login route with JWT
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find user
//     const findUser = users.find((data) => email === data.email);
//     if (!findUser) {
//       return res.status(400).send("Wrong email or password!");
//     }

//     // Compare password
//     const passwordMatch = await bcrypt.compare(password, findUser.password);
//     if (passwordMatch) {
//       // Generate JWT
//       const token = jsonwebtoken.sign(
//         { email: findUser.email }, // Payload
//         secretKey, // Secret key
//         { expiresIn: "1h" } // Token expires in 1 hour
//       );

//       // Send token as a response
//       res.status(200).json({ message: "Logged in successfully!", token });
//     } else {
//       res.status(400).send("Wrong email or password!");
//     }
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// });

// // Middleware to verify JWT
// const authenticateJWT = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (authHeader) {
//     const token = authHeader.split(" ")[1]; // Token comes in the format "Bearer <token>"

//     jsonwebtoken.verify(token, secretKey, (err, user) => {
//       if (err) {
//         return res.sendStatus(403); // Forbidden
//       }

//       req.user = user; // Attach the user to the request object
//       next();
//     });
//   } else {
//     res.sendStatus(401); // Unauthorized
//   }
// };

// // A protected route (for demonstration purposes)
// app.get("/profile", authenticateJWT, (req, res) => {
//   res.status(200).json({ message: `Welcome ${req.user.email}!` });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`The server started on port ${port}`);
// });
