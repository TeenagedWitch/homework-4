const checkStr = (str) => {
  return typeof str === "string" && str.trim().length > 0;
};

const concatStrings = (str, separator) => {
  const result = [];

  if (checkStr(str)) {
    result.push(str);
  }

  const separatorIsValid = checkStr(separator);

  const innerFunction = (nextStr) => {
    if (checkStr(nextStr)) {
      if (separator && separatorIsValid) {
        result.push(separator);
      }
      result.push(nextStr);
    }

    return innerFunction;
  };

  innerFunction.toString = () => result.join("");

  return innerFunction;
};

const finalResult = concatStrings(
  "first",
  "123"
)("second")("third")().toString();

// Task 2.

class Calculator {
  constructor(num1, num2) {
    if (
      num1 !== undefined &&
      num2 !== undefined &&
      !isNaN(num1) &&
      !isNaN(num2) &&
      typeof num1 === "number" &&
      typeof num2 === "number"
    ) {
      this.firstNum = num1;
      this.secondNum = num2;
    } else {
      throw new Error("Invalid numbers passed to constructor!");
    }
  }

  setX = (num1) => {
    if (num1 === undefined || isNaN(num1)) {
      throw new Error("Enter a valid number!");
    }
    this.firstNum = num1;
  };

  setY = (num2) => {
    if (num2 === undefined || isNaN(num2)) {
      throw new Error("Enter a valid number!");
    }
    this.secondNum = num2;
  };

  logSum = () => {
    return this.firstNum + this.secondNum;
  };

  logMul = () => {
    return this.firstNum * this.secondNum;
  };

  logSub = () => {
    return this.firstNum - this.secondNum;
  };

  logDiv = () => {
    if (this.secondNum === 0) {
      throw new Error("Second parameter value equals 0.");
    }

    return this.firstNum / this.secondNum;
  };
}

const calc = new Calculator(12, 3);

const logCalculatorDiv = calc.logDiv;
