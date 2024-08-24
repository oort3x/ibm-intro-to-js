// In followers_count.js, initialize the count variable.
// This code sets up a variable count and initializes it to 0, serving as the starting point for the follower count.
// Create functions to increase count of followers and display the count on the web page using the following steps:
// Create increaseCount() function to increment the count variable by 1 in followers_count.js file.
// Create displayCount() function in followers_count.js file after increaseCount() function
//  to display count in the HTML element with the ID countDisplay and updates its content to reflect the current count value.
// Now, call displayCount() function inside the increaseCount() function to increase and display count value simultaneously.
// Write given codw after displayCount() in followers_count.js file.

let count = 0;

function displayCount() {
  document.getElementById("countDisplay").innerText = count;
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue();
}

function resetCount() {
  count = 0;
  displayCount(); // Display the count
  alert("The count has been reset");
}
// In this task you need to create a reset button which will reset the followers count code. For this you need to include:

// One button to represent Reset Count in followers_count.html file.

// Then create one function in followers_count.js file to reset count to 0.

// Also use alert popup box method to show alert message which will say that the Followers count has been reset.
