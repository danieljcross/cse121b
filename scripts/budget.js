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

    let income_on = data.on[0] * data.on[1] * 14;
    let income_off = data.off[0] * data.on[1] * 14;
    let income_summer = data.summer[0] * data.summer[1] * 7;


    let spending_on = data.on[2] + data.on[3] + data.on[4] + data.on[5] + data.on[6];
    let spending_off = data.off[2] + data.off[3] + data.off[4] + data.off[5] + data.off[6];
    let spending_summer = data.summer[2] + data.summer[3] + data.summer[4] + data.summer[5] + data.summer[6];

};


let calculate = document.getElementById('calculate');
calculate.addEventListener('click', doCalculations);