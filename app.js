console.log("Hello World");


const sum = (a,b)=>{
    return a+b
}

console.log(sum(7,3));

module.exports = { sum };


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (amntDollars) => {
    let amntYens = (amntDollars / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return amntYens;
}
const fromEuroToDollar = (amntEuros) => {
    return amntEuros * oneEuroIs["USD"];
}

const fromYenToPound = (amntYens) => {
    let amountInPound = (amntYens / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return amountInPound;
}
module.exports={sum,fromDollarToYen,fromEuroToDollar,fromYenToPound};