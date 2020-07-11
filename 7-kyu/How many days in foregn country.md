# 6 kyu
# [How many days are we represented in a foreign country?](https://www.codewars.com/kata/58e93b4706db4d24ee000096)

My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a foreign country. Every day that one or more colleagues are present in the foreign country is a day that the company is represented. A single day cannot count for more than one day.

Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

____

## Motivation

For calculate the tax deduction

____

## Syntax

daysRepresented(`number start`, `number end`) -> integer (number of days between start and end of journey)

1. __Parameters__

for write this function we use next methods and parameters:
- `map` method to transform each element of the arrays like as start and end of segment;
- `reduce` method to reduces the array to a single value;
- `concat` method to creates a new array that includes values from other arrays and additional items;
- `Set` object to collection of new items;
- `size` property to return the number of elements in the Set.

2. __Return value__

A number, representing sum of days that the company is represented in the foreign country
____

## Examples

1. 
```js
function daysRepresented(trips){
  const days = trips
    .map(([start, end]) => [...Array(end - start + 1)].map((_, i) => i + start))
    .reduce((arr, val) => arr.concat(val), [])
  return new Set(days).size;
}
```
2. 
```js

function daysRepresented(trips){
  var arr=[];
  for (var i=0; i<trips.length; ++i)
    for (var j=trips[i][0]; j<=trips[i][1]; ++j)
      if (arr.indexOf(j)==-1)
        arr.push(j);
  return arr.length;
}
```
3. 
```js
function daysRepresented(trips) {
  const days = Array(365).fill(0);
  for ([a, b] of trips)
    for (let i = a - 1; i < b; i++)
      days[i] = 1;
  return days.reduce((a, b) => a + b);
}
```