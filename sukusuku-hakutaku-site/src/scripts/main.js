document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.createElement('h1');
    greeting.textContent = 'Welcome to the Sukusuku Hakutaku Site!';
    document.body.appendChild(greeting);

    const description = document.createElement('p');
    description.textContent = 'Sukusuku Hakutaku is a delightful creature known for its cuteness and charm. Explore the wonders of this enchanting being!';
    document.body.appendChild(description);

    const button = document.createElement('button');
    button.textContent = 'Learn More';
    button.addEventListener('click', () => {
        alert('Sukusuku Hakutaku loves to play and spread joy! Stay tuned for more updates!');
    });
    document.body.appendChild(button);
});