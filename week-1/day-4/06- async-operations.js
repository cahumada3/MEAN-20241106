/**
 * an async operation will leave the synchronous processing stack and head to the event loop 
 * they will wait for sync operations to cease before being processed
 * we can NOT predict the exact tmining of when they will be processed
 * 
 * PRIORITY = sync code, then promises, then other async operations
 */

/**
 * setTimeout() will execute an operation after a "fixed" period of time
 * where the first param is the callback function, second param is the amount of time (in milliseconds)
 */

// setTimeout(() => {
//     console.log('Timeout complete!');
// }, 1000);


/**
 * setInterval() will execute the callback function continuously, everytime the time elapses
 */
 let counter = 1;

// setInterval(() => {
//     console.log(`Interval excuted, counter at ${counter}`);
//     counter++;
// }, 1000);

let myInterval = setInterval(() => {
    console.log(`Interval excuted, counter at ${counter}`);
    counter++;
}, 1000);

/**
 * clearInterval will stop the execution of a setInterval
 * to do this, you do need to assign the setInterval to a variable
 */
setTimeout(() => {
    clearInterval(myInterval);
    console.log('Interval is CLEARED')
}, 5000);
