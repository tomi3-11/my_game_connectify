// Profile Data Storage
let userProfile = {};

// Handle Profile Form Submission
document.getElementById('profile').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user inputs
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const hobby = document.getElementById('hobby').value;
    const food = document.getElementById('food').value;

    // Store profile data
    userProfile = { name, dob, hobby, food };

    // Show game section and start the chatbot
    document.getElementById('profile-form').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    
    startGame();
});

// Start Game and WOTORO Chatbot Interaction
function startGame() {
    const wotoroChat = document.getElementById('wotoro-chat');
    wotoroChat.innerHTML = `<p>Hi ${userProfile.name}! I'm WOTORO. Let's play and learn more about each other!</p>`;

    // Ask first challenge question
    askQuestion("What's your favorite food?");

    // Handle User Input
    document.getElementById('send-btn').addEventListener('click', handleUserInput);
    document.getElementById('user-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') handleUserInput();
    });
}

// Handle User's Input
function handleUserInput() {
    const userInput = document.getElementById('user-input').value;
    const wotoroChat = document.getElementById('wotoro-chat');

    // Display user's response
    wotoroChat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById('user-input').value = '';

    // Check if the answer is correct
    if (userInput.toLowerCase() === userProfile.food.toLowerCase()) {
        wotoroChat.innerHTML += `<p><strong>WOTORO:</strong> Wow, you're spot on! You earned 10 points!</p>`;
    } else {
        wotoroChat.innerHTML += `<p><strong>WOTORO:</strong> Hmm, not quite! The correct answer is ${userProfile.food}.</p>`;
    }

    // Ask the next question
    setTimeout(() => askQuestion("What's your favorite hobby?"), 1500);
}

// Ask a challenge question
function askQuestion(question) {
    const wotoroChat = document.getElementById('wotoro-chat');
    wotoroChat.innerHTML += `<p><strong>WOTORO:</strong> ${question}</p>`;
}

