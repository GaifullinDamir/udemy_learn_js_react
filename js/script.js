"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby: '30%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){
        let strLangs = `${obj['skills']['languages'][0]} ${obj['skills']['languages'][1]}`;
        strLangs = strLangs.toUpperCase();
        return `Мне ${obj['age']} и я владею языками ${strLangs}`;
    }
};

// function showExperience(obj){

//     const {languages, programmingLangs, exp} = obj.skills;
//     const{js, php, ruby} = programmingLangs;
//     console.log(`${languages} ${js} ${php} ${ruby} ${exp}`);
// }
// showExperience(personalPlanPeter);
// console. log(showExperience(personalPlanPeter));

// console.log(5);

function showExperience(obj){
    return obj['skills']['exp'];
}

function showProgrammingLangs(obj){
    const {js, php, ruby} = obj['skills']['programmingLangs'];
    let result = "";
    if(js != null){
        result +=`Язык JS изучен на ${js}.\n`;
    }
    if(php != null){
        result += `Язык PHP изучен на ${php}.\n`;
    }
    if(ruby != null){
        result += `Язык RUBY изучен на ${ruby}.`;
    }
    return result;
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));