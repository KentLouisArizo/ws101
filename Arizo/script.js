document.getElementById('userForm').addEventListener('submit', function(event) {
    const form = event.target;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
        }
    });
    if (!allFilled) {
        event.preventDefault();
        alert('Please fill out all required fields.');
    } else {
        const formData = new FormData(form);
        console.log('Form Data');

        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        alert('form submitted successfully!');
    }
});
