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
        place: 'Burlington WA',
        length: '7 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Marysville WA',
        length: '10 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Blackfoot ID',
        length: '2 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Caldwell ID',
        length: '3 months'
    }
)

myProfile.placesLived.push(
    {
        place: 'Rexburg ID',
        length: '6 months'
    }
)

document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt)
    document.querySelector('#places-lived').appendChild(dd)
});