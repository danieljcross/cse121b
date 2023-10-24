function doCalculations(){
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
    let income_on = hpw_on * dph_on * 14;
    let income_off = hpw_off * dph_off * 14;
    let summer_income = hpw_off * dph_off * 7;

    costs = [hpw_on, dph_on, hpw_off, dph_off, tuition_on, tuition_off, food_on, food_off, car_on, car_off, other_on, other_off]

    assignVariables(costs)

    // This might become irrelevant, depending on if that loop works or not
    // This is preparation in case it doesn't work
    hpw_on = document.getElementById('hpw_on');
    dph_on = document.getElementById('dph_on');
    hpw_off = document.getElementById('hpw_off');
    dph_off = document.getElementById('dpw_off');
    tuition_on = document.getElementById('tuition_on');
    tuition_off = document.getElementById('tuition_off');
    food_on = document.getElementById('food_on');
    food_off = document.getElementById('food_off');
    car_on = document.getElementById('car_on');
    car_off = document.getElementById('food_off');
    other_on = document.getElementById('other_on');
    other_off = document.getElementById('other_off');
}


function assignVariables(costs){

    // IDK what's going on here. This was from ChatGPT to assign variables to the values from HTML
    for (let i = 0; i < costs.length; i++){
        let htmlElement = document.getElementById(variableNames[i]);
        if (htmlElement){
            let variableValue = htmlElement.value;
            window[variableNames[i]] = variableValue;
        }
        else{
            // This is nowhere near done. Figure out how to assign it to the value in byui_cost
            let variableValue = byui_cost.value;
        }
        return variableValue;
    }


}