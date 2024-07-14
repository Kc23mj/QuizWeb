document.addEventListener('DOMContentLoaded', (event) => {
    console.log(window.currentMarks); // Should output: 5
    window.currentMarks += 1;
    console.log(window.currentMarks)
});
