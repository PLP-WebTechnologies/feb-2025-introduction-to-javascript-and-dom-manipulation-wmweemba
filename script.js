// Select the elements on the page based on their IDs
const textElement = document.getElementById('dynamic-text');
const button = document.getElementById('change-text-btn');
const addLinkButton = document.getElementById('add-link-btn'); 
const navMenu = document.getElementById('nav-menu');

// Add an event listener to the button to change text when clicked
button.addEventListener('click', () => {
    // Change the text content dynamically
    textElement.textContent = 'Text has been changed!';
});

// Add an event listener to the button to add a new link and change its position whe clicked
addLinkButton.addEventListener('click', () => {
    // Create a new list item
    const newNavItem = document.createElement('li');
    // Create a new anchor element
    const newLink = document.createElement('a');
    newLink.href = "#dynamic"; // Set the href attribute matching the ID of the text element
    newLink.textContent = "Dynamic"; // Set the text content
    // Add the anchor to the list item
    newNavItem.appendChild(newLink);
    // Add the list item to the navigation menu
    navMenu.appendChild(newNavItem);

    // Add a CSS class to move the button below the original button
    addLinkButton.classList.add('moved-button');
});
