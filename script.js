function firstChar(text) {
  // your code here
  text = text.trim();
  // If the string is empty after trimming, return ''
  if (text === '') return '';
  // Return the first character
  return text[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
