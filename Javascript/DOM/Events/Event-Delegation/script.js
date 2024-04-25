document.addEventListener("DOMContentLoaded", () => {
  // Wait for the DOM content to be fully loaded before executing JavaScript

  // Get reference to the parent container element
  const buttonContainer = document.getElementById("buttonContainer");

  // Add event listener to the parent container for 'click' events
  buttonContainer.addEventListener("click", (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
      // Log the text content of the clicked button
      console.log(`Button clicked: ${event.target.textContent}`);

      // Example: Toggle a class on the clicked button
      event.target.classList.toggle("active");
    }
  });
});
