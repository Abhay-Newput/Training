/*
Promises are a powerful feature in JavaScript that provide a more structured 
 and readable way to handle asynchronous operations, compared to the traditional callback-based approach.

A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

Promises have three possible states:

    Pending: The initial state, when the asynchronous operation has not completed yet.
    Fulfilled: The asynchronous operation has completed successfully, and the Promise has a resulting value.
    Rejected: The asynchronous operation has failed, and the Promise has a reason (error) for the failure.

*/

/*
// Creating a Promise:

new Promise((resolve, reject) => {
  // Perform an asynchronous operation
  // Call resolve(value) if the operation is successful
  // Call reject(error) if the operation fails
});

// Consuming a Promise:

myPromise
  .then((result) => {
    // Handle the resolved value
  })
  .catch((error) => {
    // Handle the rejection
  })
  .finally(() => {
    // Code to be executed regardless of the Promise's state
  });
*/
// Example

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { message: "Hello, Promise!" };
    resolve(data);
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result.message); // Output: "Hello, Promise!"
    return result.message.toUpperCase();
  })
  .then((uppercaseMessage) => {
    console.log(uppercaseMessage); // Output: "HELLO, PROMISE!"
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise completed!");
  });
