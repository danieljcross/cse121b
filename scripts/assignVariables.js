import { getData } from "./getData.js";

async function assignVariables(){
    const data = await getData();
    // Assign numbers to all variables
    let hpw_on = document.getElementById('hpw_on');
    let dph_on = document.getElementById('dph_on');
    let hpw_off = document.getElementById('hpw_off');
    let dph_off = document.getElementById('dph_off');
    let hpw_summer = document.getElementById('hpw_summer');
    let dph_summer = document.getElementById('dph_summer');
    let tuition_on = document.getElementById('tuition_on');
    let tuition_off = document.getElementById('tuition_off');
    let tuition_summer = document.getElementById('tuition_summer');
    let housing_on = document.getElementById('housing_on');
    let housing_off = document.getElementById('housing_off');
    let housing_summer = document.getElementById('housing_summer');
    let food_on = document.getElementById('food_on');
    let food_off = document.getElementById('food_off');
    let food_summer = document.getElementById('food_summer');
    let car_on = document.getElementById('car_on');
    let car_off = document.getElementById('car_off');
    let car_summer = document.getElementById('car_summer');
    let other_on = document.getElementById('other_on');
    let other_off = document.getElementById('other_off');
    let other_summer = document.getElementById('other_summer');

    let costs_on = [hpw_on, dph_on, tuition_on, housing_on, food_on, car_on, other_on]
    let costs_off = [hpw_off, dph_off, tuition_off, housing_off, food_off, car_off, other_off]
    let costs_summer = [hpw_summer, dph_summer, tuition_summer, housing_summer, food_summer, car_summer, other_summer]


    let costs_values = {
        "on":[],
        "off":[],
        "summer":[]
    };

    for (let i = 0; i < costs_on.length; i++){
        let element = costs_on[i];
        if (element.value == 0){
            element.value = data.on[element.id.split("_")[0]];
        }
        costs_values.on.push(element.value)
    };
    for (let i = 0; i < costs_off.length; i++){
        let element = costs_off[i];
        if (element.value == 0){
            element.value = data.off[element.id.split("_")[0]];
        }
        costs_values.off.push(element.value)
    };
    for (let i = 0; i < costs_summer.length; i++){
        let element = costs_summer[i];
        if (element.value == 0){
            element.value = data.summer[element.id.split("_")[0]];
        }
        costs_values.summer.push(element.value)
    };
    return costs_values;



    let income_on = hpw_on * dph_on * 14;
    let income_off = hpw_off * dph_off * 14;
    let income_summer = hpw_summer * dph_summer * 7;
}

export {assignVariables};