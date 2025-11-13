const sendForm = () => {
    const form = document.querySelector('.modal');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const text = form.querySelector('input[type=text]');
        const tel = form.querySelector('input[type=tel]');
        const email = form.querySelector('input[type=email]');

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        };

        console.log('Sending:', sendObj);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(sendObj),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            const result = await response.json();
            console.log('Server response:', result);

            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error sending form:', error);
            alert('Failed to send form.');
        } finally {
            console.log('Form is cleared');
            form.reset();
        }
    });
};

sendForm();
