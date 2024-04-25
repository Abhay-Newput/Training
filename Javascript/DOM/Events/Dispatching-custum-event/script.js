document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.getElementById("myButton");

  // Add click event listener to the button
  myButton.addEventListener("click", () => {
    // Create a custom event object
    const customEvent = new CustomEvent("customEventName", {
      detail: {
        message: "Custom event dispatched!",
      },
      bubbles: true, // Allow event to bubble up through the DOM
      cancelable: true, // Allow event to be canceled
    });

    // Dispatch the custom event on the button element
    myButton.dispatchEvent(customEvent);
  });

  // Add event listener for the custom event on the document
  document.addEventListener("customEventName", (event) => {
    // Handle the custom event when it is fired
    console.log("Custom event received:", event.detail.message);
  });
});
