import {assignVariables} from "./assignVariables.js"

async function doCalculations(){
    const data = await assignVariables();
    console.log(data);
    

    let table = document.getElementById('table');
    let newHTML = '<tr>';
    data.on.forEach( (item) => {
        newHTML += `<td>${item}</td>`;
    })
    newHTML += `</tr>`;
    table.innerHTML += newHTML;

    let income_on = 0;
    let income_off = 0;
    let income_summer = 0;
    let spending_on = 0;
    let off_spending_off = 0;
    let spending_summer = 0;

    for (i[0, 1] in data.on){
        income_on += i;
    };
    for (i[0, 1] in data.off){
        income_off += i;
    };
    for (i[0, 1] in data.summer){
        income_summer += i;
    };

    for (i[2, 3, 4, 5, 6] in data.on){
        spending_on += i;
    };
    for (i[2, 3, 4, 5, 6] in data.off){
        spending_off += i;
    };
    for (i[2, 3, 4, 5, 6] in data.summer){
        spending_summer += i;
    };

}


let calculate = document.getElementById('calculate');
calculate.addEventListener('click', doCalculations);