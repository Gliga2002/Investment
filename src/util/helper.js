export default function convertToCamelCase(inputString) {
 // Split the string into words
let words = inputString.split(" ");

if (!words[1]) {
  return inputString.toLowerCase();
}
// Capitalize the first letter of the second word
words[0] = words[0].toLowerCase();
words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);

// Join the words back into a single string
let resultString = words.join("");

return resultString// Output: initialInvestment
}