const textInput = document.getElementById('name-input');

const textOutput = document.getElementById('name-output');

textInput.addEventListener('input', (e) => {
    textOutput.textContent = e.currentTarget.value.trim() ? e.currentTarget.value.trim() : 'Anonymous';
})

