// feedback.js – Handle feedback submission and display

const feedbackForm = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

// Load feedback from localStorage
function loadFeedback() {
  const stored = localStorage.getItem("feedbackList");
  const feedbacks = stored ? JSON.parse(stored) : [];
  feedbackList.innerHTML =
    feedbacks
      .map(
        (fb) => `
        <div class="feedback-item">
            <strong>${fb.name}</strong> (${fb.email})<br>
            <p>${fb.message}</p>
            <small>${new Date(fb.timestamp).toLocaleString()}</small>
        </div>
    `,
      )
      .join("") || "<p>No feedback yet. Be the first!</p>";
}

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("feedbackName").value.trim();
  const email = document.getElementById("feedbackEmail").value.trim();
  const message = document.getElementById("feedbackMessage").value.trim();

  if (name && email && message) {
    const newFeedback = {
      name,
      email,
      message,
      timestamp: Date.now(),
    };

    // Get existing feedback
    const stored = localStorage.getItem("feedbackList");
    const feedbacks = stored ? JSON.parse(stored) : [];
    feedbacks.push(newFeedback);
    localStorage.setItem("feedbackList", JSON.stringify(feedbacks));

    // Clear form
    feedbackForm.reset();
    // Reload list
    loadFeedback();
    alert("Thank you for your feedback!");
  }
});

// Initial load
document.addEventListener("DOMContentLoaded", loadFeedback);
