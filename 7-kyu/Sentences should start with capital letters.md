# 5 kyu
# [Sentences should start with capital letters](https://www.codewars.com/kata/5bf774a81505a7413400006a).

In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.
____

## Motivation

For checking the text
____

## Syntax

fix(`text in String`) -> text with Uppercase after `.`

1. __Parameters__

for  this function we use next methods and parameters:

- `if` statement to return `''` if the parameter of function isn't string;
- `split` method to to split a string into an array of substrings after `.`;
- `map` method to transform each element of the new arrays;
- `toUpperCase` method to convert the first word of each small string to uppercase letters;
- `join` method to returns the array substrings as a whole string;

2. __Return value__

`string` - new text with Uppercase in the begining of new sentence.
____

## Examples
1. 
```js

function fix(paragraph){
 if(paragraph == '') return ''
 return paragraph.split('. ')
                 .map(word => word[0].toUpperCase() + word.slice(1))
                 .join('. ') 
}
```
2. 
```js

function fix(paragraph){
  
 if (paragraph.length === 0) {
   return paragraph;
 }
  
  paragraph = paragraph.replace(/'  '/g, ' ')
  paragraph = paragraph.split('. ')
  
  for (let i = 0; i < paragraph.length; i++) {
    paragraph[i] = paragraph[i].split('')
    paragraph[i][0] = paragraph[i][0].toUpperCase()
    paragraph[i] = paragraph[i].join('')
  }
   
  return paragraph.join('. ')
}
```
3. 
```js
function fix(paragraph) {
  const arr = paragraph.split('.')
  const str = arr
    .map((sentence) => sentence.replace(/[a-z]/,(match) => match.toUpperCase()),)
    return str.join('.');
}
```