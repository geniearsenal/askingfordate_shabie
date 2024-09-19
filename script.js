document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        "Can I ask you a date?",
        "What type of date do you like?",
        "What food do you prefer? Street foods or something else?"
    ];

    document.getElementById('question1').textContent = questions[0];
    document.getElementById('question2').textContent = questions[1];
    document.getElementById('question3').textContent = questions[2];

    document.getElementById('submitBtn').addEventListener('click', function () {
        const answer1 = document.getElementById('answer1').value;
        const answer2 = document.getElementById('answer2').value;
        const answer3 = document.getElementById('answer3').value;

        // Display responses  
        document.getElementById('response1').textContent = `1. Date: ${answer1}`;
        document.getElementById('response2').textContent = `2. Type of Date: ${answer2}`;
        document.getElementById('response3').textContent = `3. Food Preference: ${answer3}`;

        // Hide questions and show output  
        document.getElementById('questions').style.display = 'none';
        document.getElementById('romanticMessage').classList.remove('hidden');
        document.getElementById('output').classList.remove('hidden');
    });

    document.getElementById('restartBtn').addEventListener('click', function () {
        location.reload();  // Restart the questionnaire  
    });
});