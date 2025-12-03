document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const analyzeBtn = document.getElementById('analyze-btn');
    const resultsDiv = document.getElementById('results');
    const charCountSpan = document.getElementById('char-count');
    const wordCountSpan = document.getElementById('word-count');
    const reversedTextDiv = document.getElementById('reversed-text');

    analyzeBtn.addEventListener('click', function() {
        const text = textInput.value;

        if (text.trim() === '') {
            charCountSpan.textContent = '0';
            wordCountSpan.textContent = '0';
            reversedTextDiv.textContent = 'No text to reverse';
            resultsDiv.style.display = 'block';
            return;
        }
        
        const charCount = text.length;
        charCountSpan.textContent = charCount;
        
        const words = text.trim().split(/\s+/);
        const wordCount = words.length;
        wordCountSpan.textContent = wordCount;

        const reversedText = text.split('').reverse().join('');
        reversedTextDiv.textContent = reversedText;

        resultsDiv.style.display = 'block';
    });
});