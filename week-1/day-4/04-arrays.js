/**
 * Arrays
 *      combine the functionality of typical arrays with that of things like Lists/LinkedLists/ArrayLists in other languages
 * 
 *      - zero-indexed
 *      - they do NOT have a fixed size, so you can add and remove items at will
 *      - they are ordered, but not not sorted by default
 *      - they do NOT have to contain all the same data type - you can put ANYTHING in there
 */

let nums = [1, 2, 3, 4, 5];

//access a specific element
console.log(nums[0]);

//changing the an element 
nums[2] = 33;

console.log(nums);

//add element to the end of an array
nums.push(6);
console.log(nums);

//removes the last element from an array
nums.pop();
console.log(nums);

//adds element to the start of an array
nums.unshift(0);
console.log(nums);

//removes the first element from an array
nums.shift();
console.log(nums);

let wackyArray = [1, 2, 'a', 'string', {id: 6}, [6, 7, 9]];
console.log(wackyArray);

/**
 * there are a couple of ways that we can manipulate our arrays
 * to copy a portion of an array and disconnect that portion from the original array
 * we use slice()
 */

let nums2 = [1, 2, 3, 4, 5, 6, 7];

console.log(nums2);

//first param is the starting index (inclusive) and the second param is the ending index (does not include the ending index itself) exclusive
let slicedArray = nums2.slice(2, 6);
console.log(slicedArray);
