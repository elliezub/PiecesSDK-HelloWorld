const { PiecesClient } = require('pieces-copilot-sdk');

// Make sure the baseUrl is your actual base URL
const piecesClient = new PiecesClient({ baseUrl: 'http://localhost:1000' });

async function askQuestion() {
  try {
    const response = await piecesClient.askQuestion({
      question: "What is the most common first project for software devs? (hint it starts with hello and ends with world)"
    });
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
}

askQuestion();
