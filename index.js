let action;
function saturdayFun(action = 'roller-skate'){
      //console.log(`This Saturday, I want to ${action}!`);
      return (`This Saturday, I want to ${action}!`)
}  
//saturdayFun(action);

let work;
function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}
let sym;
let adj;
function wrapAdjective(sym='*'){
    return function wrapper(adj='hard worker'){
        return `You are ${sym }${ adj}${sym}!`
    }
}
console.log(wrapAdjective("||"));