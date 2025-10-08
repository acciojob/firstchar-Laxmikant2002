function firstChar(text) {
  // your code here
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') return text[i];
  }
  return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
