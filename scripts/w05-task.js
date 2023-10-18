/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#gridly');
let templeList = []

/* async displayTemples Function */

const displayTemples = (temples) => {
templeList.forEach(temples => {
    let articleElement = document.createElement('article'); 
    let h3Element = document.createElement('h3');
    h3Element.textContent = temples.templeName;
    let imageElement = document.createElement('image');
    imageElement.src = temples.imageUrl;
    imageElement.alt = temples.location;
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imageElement);

    /* Not checked yet */
    templesElement.appendChild(articleElement);
});
}


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    try{
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
        if (response.ok){
            templeList = await response.json();
            displayTemples(templeList)
        }
        else{
            console.error('Error fetching data ', response.statusText)
        }
    }
    catch (error){
        console.error('Error fetching data', error.message)
    };
};

/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
