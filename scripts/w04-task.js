/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Daniel Cross',
    photo: 'images/personal_picture.jpeg',
    favoriteFoods: ['pizza', 'orange chicken', 'pasta', 'lasagna'],
    hobbies: ['baseball', 'watching TV', 'cooking', 'hiking'],
    placesLived: []
};


myProfile.placesLived.push(
    {
        place: ['Burlington WA', 'Marysville WA', 'Blackfoot ID', 'Caldwell ID', 'Rexburg ID'],
        length: ['7 years', '10 years', '2 years', '3 months', '6 months']
    }
);

document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo') = myProfile.photo;
document.querySelector('#name') = myProfile.photo;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


