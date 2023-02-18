"use strict";

function SayHello(name){
    return `Привет, ${name}!`;
}

function ReturnNeighboringNumbers(inNumber){
    return [inNumber - 1, inNumber, inNumber + 1];
}

function GetMathResult(base, quantity){
    
    if(typeof(quantity) === 'number' && quantity > 0){
        let result = '';
        let tempBase = base;
        let delta = base;

        for(let i = 0; i < quantity; i++){
            tempBase += delta;
            if(i + 1 != quantity){
                result += `${tempBase}---`;
            } else {
                result += `${tempBase}`;
            }
        }
        return result;
    } else {
        return base;
    }
}

console.log(GetMathResult(5, 3));