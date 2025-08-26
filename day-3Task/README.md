# Day 3: Arrays & Objects in JavaScript

##  Concepts Covered
- Array methods: `map`, `filter`, `reduce`
- Objects
- Nested Objects
- Iterating over arrays of objects

---

## Code Explanation

### Array Methods
```js
const numbers = [10, 20, 30, 40, 50];

const doubled = numbers.map(num => num * 2);     // Multiply each number by 2
const filtered = numbers.filter(num => num > 25); // Keep only numbers greater than 25
const sum = numbers.reduce((acc, num) => acc + num, 0); // Add all numbers