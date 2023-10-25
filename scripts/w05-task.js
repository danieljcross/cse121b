/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#gridly');
let templeList = []

/* async displayTemples Function */

const displayTemples = (temples) => {
templeList.forEach(temple => {
    let articleElement = document.createElement('article'); 
    let h3Element = document.createElement('h3');
    h3Element.textContent = temple.templeName;
    let imageElement = document.createElement('image');
    imageElement.setAttribute('src', temple.imageUrl);
    imageElement.setAttribute('alt', temple.location);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imageElement);
    templesElement.appendChild(articleElement);
});
}


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    try{
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
        if (response.ok){
            templeList = await response.json();
            displayTemples(templeList);
        }
        else{
            console.error('Error fetching data ', response.statusText);
        }
    }
    catch (error){
        console.error('Error fetching data', error.message);
    };
};

/* reset Function */

const reset = () => {
    let templesElement = document.getElementById('gridly');
    templesElement.innerHTML = '';
};

/* sortBy Function */

function sortBy(temples){
    reset()
    let filter = document.getElementById('sortBy').value;

    switch (filter) {
        case "utah":
            let utahTemples = templeList.filter((temple) => {
                return temple.location.toLowerCase().includes('utah')
            });
        case "nonutah":
            let nonUtahTemples = templeList.filter((temple) =>{
                return !temple.location.toLowerCase().includes('utah')
            });
        case 'older':
            let olderTemples = templeList.filter((temple) => {
                let dedicatedDate = new Date(temple.dedicatedDate, 0, 1);
                return dedicatedDate < new Date(1950, 0, 1);
            });
        case 'all':
                return temples;
    }
};


getTemples();

/* Event Listener */

document.getElementById('sortBy').addEventListener('change', () => {sortBy(templeList)});