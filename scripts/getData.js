async function getData(){
    // Gets Data from byui_cost.txt
    try{
        const response = await fetch('../byui_cost.json');
        const data = await response.json();
        return data;
    }
    catch (error){
        console.error(error)
    }
};


export {getData};