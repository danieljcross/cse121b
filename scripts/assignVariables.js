import "byui_cost.json"

function assignVariables(){
    // Assign numbers to all variables
    let hpw_on = 0;
    let dph_on = 0;
    let hpw_off = 0;
    let dph_off = 0;
    let tuition_on = 0;
    let tuition_off = 0;
    let food_on = 0;
    let food_off = 0;
    let car_on = 0;
    let car_off = 0;
    let other_on = 0;
    let other_off = 0;

    // costs = [hpw_on, dph_on, hpw_off, dph_off, tuition_on, tuition_off, food_on, food_off, car_on, car_off, other_on, other_off]

    
    // // IDK what's going on here. This was from ChatGPT to assign variables to the values from HTML
    // for (let i = 0; i < costs.length; i++){
    //     let htmlElement = document.getElementById(variableNames[i]);
    //     if (htmlElement){
    //         let variableValue = htmlElement.value;
    //         window[variableNames[i]] = variableValue;
    //     }
    //     else{
    //         // This is nowhere near good. Figure out how to assign it to the value in byui_cost
    //         let variableValue = byui_costs.value;
    //     }
    //     return variableValue;
    // }

    if (hpw_on == 0){
        hpw_on = byui_cost.json
    }


    let income_on = hpw_on * dph_on * 14;
    let income_off = hpw_off * dph_off * 14;
    let income_summer = hpw_off * dph_off * 7;
}