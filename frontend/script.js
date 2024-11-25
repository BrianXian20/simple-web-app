document.getElementById('data-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user-input').value;

    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userInput })
        });

        const result = await response.json();
        document.getElementById('response-message').textContent = result.message;
    } catch (error) {
        document.getElementById('response-message').textContent = 'Error submitting data.';
    }
});
