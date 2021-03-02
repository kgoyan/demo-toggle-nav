// Step 1: query the document to find the element we will be clicking on 
const button = document.querySelector('.hamburger-btn');

// Step 2: add a click event listener on the button 
button.addEventListener('click', () => {
    // when the button is clicked, grab the nav element and add the special class 
    document.querySelector('nav').classList.toggle('show-nav');
});