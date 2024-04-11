/*
function validateInput(input) {
  if (typeof input !== "number") {
    throw new Error("Input must be a number"); // Throw an Error if input is not a number
  }

  if (input <= 0) {
    throw new Error("Input must be a positive number"); // Throw an Error if input is not positive
  }

  return input; // Return input if validation passes
}

try {
  const result = validateInput(-2); // Attempt to validate a non-number input
  console.log("Validation passed:", result);
} catch (error) {
  console.error("Validation error:", error.message); // Handle the error thrown by validateInput
}
*/

function firstFunction() {
  console.log("Inside firstFunction");

  try {
    secondFunction();
    console.log("After secondFunction call (within firstFunction)");
  } catch (error) {
    console.error("Error caught in firstFunction:", error.message);
  }
}

function secondFunction() {
  console.log("Inside secondFunction");

  try {
    thirdFunction();
    console.log("After thirdFunction call (within secondFunction)");
  } catch (error) {
    console.error("Error caught in secondFunction:", error.message);
    throw error; // Rethrow the error to propagate it further
  }
}

function thirdFunction() {
  console.log("Inside thirdFunction");

  try {
    fourthFunction(); // Call fourthFunction which throws an error
    console.log("After fourthFunction call (within thirdFunction)");
  } catch (error) {
    console.error("Error caught in thirdFunction:", error.message);
    throw error; // Rethrow the error to propagate it further
  }
}

function fourthFunction() {
  console.log("Inside fourthFunction");

  function validateInput(input) {
    if (typeof input !== "number") {
      throw new Error("Input must be a number"); // Throw an Error if input is not a number
    }

    if (input <= 0) {
      throw new Error("Input must be a positive number"); // Throw an Error if input is not positive
    }

    return input; // Return input if validation passes
  }

  try {
    const result = validateInput(-2); // Attempt to validate a non-number input
    console.log("Validation passed:", result);
  } catch (error) {
    console.error("Validation error:", error.message); // Handle the error thrown by validateInput
    throw error;
  }
}

// Call the first function to start the execution chain
firstFunction();
