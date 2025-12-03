document.addEventListener('DOMContentLoaded', function() {
    const sampleText = document.getElementById('sample-text');
    const bgColorBtn = document.getElementById('bg-color-btn');
    const fontSizeBtn = document.getElementById('font-size-btn');
    const centerTextBtn = document.getElementById('center-text-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    const defaultStyles = {
        backgroundColor: '#ffffff',
        fontSize: '16px',
        textAlign: 'left'
    };

    let currentFontSize = 16;

    const bgColors = ['#ffeaa7', '#a29bfe', '#fd79a8', '#55efc4', '#74b9ff', '#dfe6e9'];
    let currentBgColorIndex = 0;

    function changeBackgroundColor() {
        currentBgColorIndex = (currentBgColorIndex + 1) % bgColors.length;
        sampleText.style.backgroundColor = bgColors[currentBgColorIndex];
    }

    function increaseFontSize() {
        currentFontSize += 2;
        sampleText.style.fontSize = currentFontSize + 'px';
    }

    function centerText() {
        sampleText.style.textAlign = 'center';
    }

    function resetStyles() {
        sampleText.style.backgroundColor = defaultStyles.backgroundColor;
        sampleText.style.fontSize = defaultStyles.fontSize;
        sampleText.style.textAlign = defaultStyles.textAlign;
        currentFontSize = 16;
        currentBgColorIndex = 0;
    }

    bgColorBtn.addEventListener('click', changeBackgroundColor);
    fontSizeBtn.addEventListener('click', increaseFontSize);
    centerTextBtn.addEventListener('click', centerText);
    resetBtn.addEventListener('click', resetStyles);
});