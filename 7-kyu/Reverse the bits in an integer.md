# 7 kyu
# [Reverse the bits in an integer](https://www.codewars.com/kata/5959ec605595565f5c00002b)

Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.
____

## Motivation
For readable display IP-address
____

## Syntax

> reverseBits(`binary number`) -> `decimal number`

1. __Parameters__

for write this function we use next methods and parameters:

- `toString(2)` method to converts a binary number to a string and show string as a binary value due to radix parameter `(2)`; 
- `split` method to to split a string into an array of substrings;
- `reverse` method to reverse the order of the elements in an array substrings;
- `join` method to returns the array substrings as a whole string;
- `parseInt` function to converts `string` to `integer`


2. __Return value: `number`__

A decimal integer, representing binary number
____

## Examples


```js
  function reverseBits(n) {
    const binaryReverse = n.toString(2).split('').reverse().join('')
    return parseInt(binaryReverse, 2)
  }
```

```js
function reverseBits (n) {
  let tmp = n.toString(2);
  var salida = "";
  for(let i = tmp.length-1; i>=0; i-- ){
    salida += tmp[i];
  }
  return (parseInt(salida,2));
}
```