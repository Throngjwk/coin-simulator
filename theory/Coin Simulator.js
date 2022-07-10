import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";

var id = "my_custom_theory_id";
var name = "My Custom Theory";
var description = "A basic theory.";
var authors = "Gilles-Philippe Paillé";
var version = 1;

var init = () => {
    currency = theory.createCurrency();

    // Functions

    /**
     * Add Coin Gain.
     * @param {number} a Coin Add Gain
     * @param {number} b Coin Missing
     * @returns {string} String.
     */
    function AddCoin(a, b) {
        return BigNumber.from(a + b)
    }

    /**
     * Mulitipler Coin Gain.
     * @param {number} a Coin Mulitipler Gain
     * @param {number} b Coin Missing
     * @returns {string} String.
     */
     function MulitiplerCoin(a, b) {
        return BigNumber.from(a * b)
    }

    /**
     * Divide Coin Gain.
     * @param {number} a Coin Divide Gain
     * @param {number} b Coin Missing
     * @returns {string} String.
     */
     function DivideCoin(a, b) {
        return BigNumber.from(a / b)
    }

    // a1
    {
        let getDesc = (level) => "a_1=" + (a1.level);
        a1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(5, Math.log2(1.2))));
        a1.getDescription = (_) => Utils.getMath(getDesc(a1.level));
        a1.getInfo = (amount) => Utils.getMathTo(getDesc(a1.level), getDesc(a1.level + amount));
    }

    // a2
    {
        let getDesc = (level) => "a_2=" + (30 * a2.level);
        a2 = theory.createUpgrade(1, currency, new FirstFreeCost(new ExponentialCost(50, Math.log2(1.2))));
        a2.getDescription = (_) => Utils.getMath(getDesc(a2.level));
        a2.getInfo = (amount) => Utils.getMathTo(getDesc(a2.level), getDesc(a2.level + amount));
    }

    // a3
    {
        let getDesc = (level) => "a_3=" + (320 * a3.level);
        a3 = theory.createUpgrade(2, currency, new FirstFreeCost(new ExponentialCost(520, Math.log2(1.2))));
        a3.getDescription = (_) => Utils.getMath(getDesc(a3.level));
        a3.getInfo = (amount) => Utils.getMathTo(getDesc(a3.level), getDesc(a3.level + amount));
    }

    // a4
    {
        let getDesc = (level) => "a_4=" + (3400 * a4.level);
        a4 = theory.createUpgrade(3, currency, new FirstFreeCost(new ExponentialCost(5400, Math.log2(1.2))));
        a4.getDescription = (_) => Utils.getMath(getDesc(a4.level));
        a4.getInfo = (amount) => Utils.getMathTo(getDesc(a4.level), getDesc(a4.level + amount));
    }

    // a5
    {
        let getDesc = (level) => "a_5=" + (3.6e4 * a5.level);
        a5 = theory.createUpgrade(4, currency, new FirstFreeCost(new ExponentialCost(5.6e4, Math.log2(1.2))));
        a5.getDescription = (_) => Utils.getMath(getDesc(a5.level));
        a5.getInfo = (amount) => Utils.getMathTo(getDesc(a5.level), getDesc(a5.level + amount));
    }

    // a6
    {
        let getDesc = (level) => "a_6=" + (3.8e5 * a6.level);
        a6 = theory.createUpgrade(5, currency, new FirstFreeCost(new ExponentialCost(5.8e5, Math.log2(1.2))));
        a6.getDescription = (_) => Utils.getMath(getDesc(a6.level));
        a6.getInfo = (amount) => Utils.getMathTo(getDesc(a6.level), getDesc(a6.level + amount));
    }

    // a7
    {
        let getDesc = (level) => "a_7=" + (4e6 * a7.level);
        a7 = theory.createUpgrade(6, currency, new FirstFreeCost(new ExponentialCost(6e6, Math.log2(1.2))));
        a7.getDescription = (_) => Utils.getMath(getDesc(a7.level));
        a7.getInfo = (amount) => Utils.getMathTo(getDesc(a7.level), getDesc(a7.level + amount));
    }

    // a8
    {
        let getDesc = (level) => "a_8=" + (4.2e7 * a8.level);
        a8 = theory.createUpgrade(6, currency, new FirstFreeCost(new ExponentialCost(6.2e7, Math.log2(1.2))));
        a8.getDescription = (_) => Utils.getMath(getDesc(a8.level));
        a8.getInfo = (amount) => Utils.getMathTo(getDesc(a8.level), getDesc(a8.level + amount));
    }

    // a9
    {
        let getDesc = (level) => "a_9=" + (4.4e8 * a9.level);
        a9 = theory.createUpgrade(6, currency, new FirstFreeCost(new ExponentialCost(6.4e8, Math.log2(1.2))));
        a9.getDescription = (_) => Utils.getMath(getDesc(a9.level));
        a9.getInfo = (amount) => Utils.getMathTo(getDesc(a9.level), getDesc(a9.level + amount));
    }
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency.value += a1.level
    currency.value += 30 * a2.level
    currency.value += 320 * a3.level
    currency.value += 3400 * a4.level
    currency.value += 3.6e4 * a5.level
    currency.value += 3.8e5 * a6.level
    currency.value += 4e6 * a7.level
    currency.value += 4.2e7 * a8.level
    currency.value += 4.4e8 * a9.level
}

var getPrimaryEquation = () => {
    let result = "\\dot{C} = a_1";

    result += "a_2";

    result += "a_3";

    result += "a_4";

    result += "a_5";

    result += "a_6";

    result += "a_7";

    result += "a_8";

    result += "a_9";

    result += ",";

    result += " L = ";

    result += " \\sqrt{10 \\times a_2}";

    result += ", C_2 = \\sqrt{a_4}";

    return result;
}

var getSecondaryEquation = () => {
    let result = "A"

    result += "B"

    result += "B"

    result += "C"

    result += "D"

    result += "E"

    result += "F"

    result += "G"

    result += "H"

    result += "I"

    result += "J"

    result += "K"

    result += "L"

    result += "M"

    result += "N"

    result += "O"

    result += "P"

    result += "Q"

    result += "R"

    result += "S"

    result += "T"

    result += "U"

    result += "V"

    result += "W"

    result += "X"

    result += "Y"

    result += "Z"

    result += ","

    result += theory.latexSymbol + "=\\max\\rho^{0.8}"
}

var getPublicationMultiplier = (tau) => tau.pow(0.164) / BigNumber.THREE;
var getPublicationMultiplierFormula = (symbol) => "\\frac{{" + symbol + "}^{0.164}}{3}";
var getTau = () => currency.value.pow(0.8);
var get2DGraphValue = () => currency.value.sign * (BigNumber.ONE + currency.value.abs()).log10().toNumber();

//WORDS

const words = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
]

//longest