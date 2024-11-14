/**
 * Event Loop
 * 
 * processing order:
 *      1. sync code
 *      2. Promises (event loop)
 *      3. other asyn operations (event loop)
 */

console.log('First log');

//setTime 
setTimeout(() => {
    console.log('Time complete!');
}, 0);

console.log('Second log');

Promise.resolve('Promise resolved').then(data => {
    console.log(data);
});

console.log('Third log');