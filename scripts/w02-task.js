/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Daniel Cross';
const currentYear = '2023';
const profilePicture = 'images/personal_picture.jpeg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.getElementById('profilePicture');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of ', fullName);



/* Step 5 - Array */

let favoriteFoods = ['Cheeseburgers', 'Pizza', 'Tacos', 'Pasta'];
foodElement.innerHTML = favoriteFoods;
let favoriteFoodItem = 'Corn Dogs';
favoriteFoods.push(favoriteFoodItem);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.splice(0, 1);
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;