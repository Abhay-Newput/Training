/*
fetchData()
  .then((data) => {
    console.log(data.message); // Output: "Hello, Promise!"
    return processData(data);
  })
  .then((processedData) => {
    console.log(processedData.message); // Output: "Data processed!"
    return saveData(processedData);
  })
  .then((savedData) => {
    console.log(savedData.message); // Output: "Data saved!"
  })
  .catch((error) => {
    console.error(error);
  });

function fetchData() {
  return new Promise((resolve, reject) => {
    // Fetch data from an API or any other asynchronous operation
    setTimeout(() => {
      const data = { message: "Hello, Promise!" };
      resolve(data);
    }, 2000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    // Process the data
    setTimeout(() => {
      const processedData = { message: "Data processed!" };
      resolve(processedData);
    }, 1000);
  });
}

function saveData(data) {
  return new Promise((resolve, reject) => {
    // Save the data
    setTimeout(() => {
      const savedData = { message: "Data saved!" };
      resolve(savedData);
    }, 1500);
  });
}

*/

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data); // Simulated asynchronous operation
    }, 1000);
  });
}

function processData(data) {
  console.log("Processing data:", data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.email = "john@example.com";
      resolve(data); // Simulated asynchronous operation
    }, 1000);
  });
}

function sendEmail(data) {
  console.log("Sending email to:", data.email);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Email sent successfully"); // Simulated asynchronous operation
    }, 1000);
  });
}

// Chain promises together using .then()
getData()
  .then(processData)
  .then(sendEmail)
  .then((result) => {
    console.log(result); // Output the final result of the chain
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors in the chain
  });

/*

The getData() function returns a Promise that resolves with some initial 
data after a delay.

The processData(data) function processes the retrieved data and modifies 
it before resolving with the updated data.

The sendEmail(data) function sends an email using the processed data 
and resolves with a success message.

*/
