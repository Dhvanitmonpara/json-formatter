const inputArea = document.getElementById('input-text');
const outputArea = document.getElementById('output-text');
const formatifyButton = document.getElementById('formatify');
const minifyButton = document.getElementById('minify');

const formatifyCode = () => {
    try {
        const code = inputArea.value;
        const formattedCode = JSON.stringify(JSON.parse(code), null, 2);
        outputArea.value = formattedCode;
    } catch (error) {
        outputArea.value = 'Invalid JSON input!';
    }
}

const minifyCode = () => {
    try {
        const code = inputArea.value;
        const minifiedCode = JSON.stringify(JSON.parse(code));
        outputArea.value = minifiedCode;
    } catch (error) {
        outputArea.value = 'Invalid JSON input!';
    }
}

formatifyButton.addEventListener('click', formatifyCode);
minifyButton.addEventListener('click', minifyCode);