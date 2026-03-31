//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * Converts a number from one base to another.
 * First converts the input number to decimal, then from decimal to the target base.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  if (inputNumberSystem === outputNumberSystem) {
    throw new Error("Input and output number systems must be different.");
  }

  let dtoOut = exMain(inputNumber, inputNumberSystem, outputNumberSystem);
  return dtoOut;
}

/**
 * Helper function for conversion.
 */
export function exMain(inputNumber, inputNumberSystem, outputNumberSystem) {
  let decimal = toDecimal(inputNumber, inputNumberSystem);
  return fromDecimal(decimal, outputNumberSystem);
}

/**
 * Converts number from given base to decimal.
 */

function toDecimal(inputNumber, inputNumberSystem) {
  let result = 0;
  let power = 0;

  for (let i = inputNumber.length - 1; i >= 0; i--) {
    let digit = Number(inputNumber[i]);

    if (digit >= inputNumberSystem) {
      throw new Error("Invalid digit for this base");
    }
    
    result += digit * Math.pow(inputNumberSystem, power);
    power++;
  }

  return result;
}

/**
 * Converts decimal number to target base.
 */
function fromDecimal(number, base) {
  if (number === 0) return "0";

  let result = "";

  while (number > 0) {
    let remainder = number % base;
    result = remainder + result;
    number = Math.floor(number / base);
  }

  return result;
}
/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [10, 2];
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [10, 2];
}