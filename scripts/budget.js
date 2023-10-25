import {assignVariables} from "./assignVariables.js"

async function doCalculations(){
    // Waits for data from assignVariables function
    const data = await assignVariables();

    console.log(data);

    // Calculates incomes
    let income_on = data.on[0] * data.on[1] * 14;
    let income_off = data.off[0] * data.on[1] * 14;
    let income_summer = data.summer[0] * data.summer[1] * 7;

    console.log(income_on)

    // Calculates spending by semester
    let spending_on = parseFloat(data.on[2]) + parseFloat(data.on[3]) + parseFloat(data.on[4]) + parseFloat(data.on[5]) + parseFloat(data.on[6]);
    let spending_off = parseFloat(data.off[2]) + parseFloat(data.off[3]) + parseFloat(data.off[4]) + parseFloat(data.off[5]) + parseFloat(data.off[6]);
    let spending_summer = parseFloat(data.summer[2]) + parseFloat(data.summer[3]) + parseFloat(data.summer[4]) + parseFloat(data.summer[5]) + parseFloat(data.summer[6]);

    // Calculates totals after each semester
    let after_on = income_on - spending_on;
    let after_on2 = after_on + income_off - spending_off;
    let after_off = after_on2 + income_off - spending_off;
    let after_summer = after_off + income_summer - spending_summer;

    // Attaches calculated numbers to the HTML
    document.getElementById('on_earn_1').innerHTML = income_on;
    document.getElementById('on_spend_1').innerHTML = spending_on;
    document.getElementById('on_after_1').innerHTML = after_on;
    document.getElementById('on_earn_2').innerHTML = income_on;
    document.getElementById('on_spend_2').innerHTML = spending_on;
    document.getElementById('on_after_2').innerHTML = after_on2;
    document.getElementById('off_earn').innerHTML = income_off;
    document.getElementById('off_spend').innerHTML = spending_off;
    document.getElementById('off_after').innerHTML = after_off;
    document.getElementById('summer_earn').innerHTML = income_summer;
    document.getElementById('summer_spend').innerHTML = spending_summer;
    document.getElementById('summer_after').innerHTML = after_summer;

    // Declare variable for the loop and for the table. Open tr tag.
    let heads = ['Semester','Income', 'Spending', 'After'];
    let table = document.getElementById('table');
    let newHTML = `<tr>`;


    // Loop through to name columns
    heads.forEach( (head) => {
        newHTML += `<th>${head}</th>`;  
    });


    // Add ending tag to tr
    newHTML += `</tr>`;
    table.innerHTML += newHTML;

    
    // Print string at very end
    let final_string = `Going into debt for college can be worth it! It is better to know now what will happen with your money!`;
    document.getElementById('final').innerHTML = final_string;

};


// Actually does this function
let calculate = document.getElementById('calculate');
calculate.addEventListener('click', doCalculations);