// code your solution here
function saturdayFun(activity = "roller-skate") {
    let returnString = "This Saturday, I want to " + activity + "!";
    return returnString;
}

const mondayWork = function (activity = "go to the office") {
    let returnString = "This Monday, I will " + activity + ".";
    return returnString;
}

mondayWork();



let wrapAdjective = function(style="+") {

    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}


wrapAdjective("%")("a dedicated programmer");