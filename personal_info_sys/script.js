class Person {
    constructor(firstName, lastName, age, email, hobbies = []) {
        // if (!firstName || !lastName || !email) {
        //     throw new Error("First name, last name, and email cannot be empty.");
        // }
        // if (!Number.isInteger(age) || age <= 0) {
        //     throw new Error("Age must be a positive integer.");
        // }

        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email)) {
        //     throw new Error("Invalid email format.");
        // }
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.hobbies = hobbies;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails() {
        return [
            `Full Name: ${this.getFullName()}`,
            `Age: ${this.age}`,
            `Email: ${this.email}`,
            `Hobbies: ${this.hobbies.join(', ')}`
        ].join('\n');
    }

    addHobby(hobby) {
        if (!this.hobbies.includes(hobby)) {
            this.hobbies.push(hobby);
        } else {
            console.log(`Hobby '${hobby}' already exists in the list.`);
        }
    }

    removeHobby(hobby) {
        const index = this.hobbies.indexOf(hobby);
        if (index !== -1) {
            this.hobbies.splice(index, 1);
        } else {
            console.log(`Hobby '${hobby}' not found in the list.`);
        }
    }

    sendEmail(subject, message) {
        console.log(`Email sent by ${this.email}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
    }
}

const prompt = require("prompt-sync")();

// Function to prompt user for input and create a Person object
function createPersonFromInput() {
    try {
        const firstName = prompt("Enter first name: ").trim();
        if (!firstName) {
            throw new Error("First name cannot be empty.");
        }

        const lastName = prompt("Enter last name: ").trim();

        const ageInput = prompt("Enter age: ").trim();
        const age = parseInt(ageInput, 10);
        if (!ageInput || isNaN(age) || age <= 0) {
            throw new Error("Age must be a positive integer.");
        }

        const email = prompt("Enter email: ").trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            throw new Error("Email cannot be empty.");
        }
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format.");
        }

        const hobbiesInput = prompt("Enter hobbies (comma separated): ").trim();
        const hobbies = hobbiesInput ? hobbiesInput.split(',').map(hobby => hobby.trim()) : [];

        const person = new Person(firstName, lastName, age, email, hobbies);

        console.log(person.getDetails());  // Output the full details

        const addHobbyResponse = prompt("Do you want to add a hobby? (yes/no): ").trim().toLowerCase();
        if (addHobbyResponse === 'yes') {
            const newHobby = prompt("Enter a hobby to add: ").trim();
            if (newHobby) {
                person.addHobby(newHobby);
            }
            console.log(person.hobbies);  // Output updated hobbies
        }

        const removeHobbyResponse = prompt("Do you want to remove a hobby? (yes/no): ").trim().toLowerCase();
        if (removeHobbyResponse === 'yes') {
            const hobbyToRemove = prompt("Enter a hobby to remove: ").trim();
            if (hobbyToRemove) {
                person.removeHobby(hobbyToRemove);
            }
            console.log(person.hobbies);  // Output updated hobbies
        }

        const emailSubject = prompt("Enter email subject: ").trim();
        const emailMessage = prompt("Enter email message: ").trim();
        person.sendEmail(emailSubject, emailMessage);

    } catch (error) {
        console.error(error.message);
    }
}

// Run the function to prompt user input and create a Person object
createPersonFromInput();
