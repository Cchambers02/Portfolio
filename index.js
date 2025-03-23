document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-tabs a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the default jump behavior
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission to server
        const name = document.getElementById('first').value;
        const email = document.getElementById('email').value;
        const message = document.querySelector('textarea[name="message"]').value;
        
        // Simple validation example
        if (name && email && message) {
            alert('Thank you for your message!');
            // Here you can also implement an AJAX request to send the data to a server
        } else {
            alert('Please fill in all fields.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.querySelector('.myResume a');
    resumeLink.addEventListener('click', () => {
        alert('Thank you for downloading my resume!');
        // You could also increment a download count here or track the event
    });
});

//highlight function
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'project-items'
    const projectItems = document.querySelectorAll('.project-items');

    // Add event listeners to each project item
    projectItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('highlight'); // Add 'highlight' class on mouseover
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('highlight'); // Remove 'highlight' class on mouseout
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'project-items'
    const projectItems = document.querySelectorAll('.myResume');

    // Add event listeners to each project item
    projectItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('highlight'); // Add 'highlight' class on mouseover
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('highlight'); // Remove 'highlight' class on mouseout
        });
    });
});

// Greeting Function
document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    currentTime = new Date().getHours();
    let greeting;

    if (currentTime < 12) {
        greeting = "Good Morning";
    }
    else if (currentTime < 18)
        greeting = "Good Afternoon";
    else{
        greeting = "Good Evening";
    }

    greetingElement.textContent = greeting;
});

document.addEventListener('DOMContentLoaded', function() {
    let currentNumber = 1;  // Corrected typo from "curentNumber" to "currentNumber"
    const maxNumber = 4;   // Changed "maxNUmber" to "maxNumber" to fix case sensitivity
    const intervalNum = 150;

    const intervalElement = document.getElementById('yearsExperience');
    intervalElement.textContent = currentNumber;

    const interval = setInterval(() => {
        if (currentNumber < maxNumber) {
            currentNumber++; // Increment the number
            intervalElement.textContent = currentNumber; // Update the display
        } else {
            clearInterval(interval); // Stop updating when the max number is reached
        }
    }, intervalNum);
});

document.addEventListener('DOMContentLoaded', function() {
    let currentNumber = 1;  // Corrected typo from "curentNumber" to "currentNumber"
    const maxNumber = 12;   // Changed "maxNUmber" to "maxNumber" to fix case sensitivity
    const intervalNum = 100;

    const intervalElement = document.getElementById('projectsCompleted');
    intervalElement.textContent = currentNumber;

    const interval = setInterval(() => {
        if (currentNumber < maxNumber) {
            currentNumber++; // Increment the number
            intervalElement.textContent = currentNumber; // Update the display
        } else {
            clearInterval(interval); // Stop updating when the max number is reached
        }
    }, intervalNum);
});