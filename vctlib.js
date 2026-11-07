// Color converter;
// custom VCT library

// Classes
// VCT Error
/**
  * An error constructor for the VCT library.
  *
  * @class
  * @extends {Error}
  */
class VCTColorConversionError extends Error {
  /**
    * @param {string} msg - The message for the error.
  */
  constructor(msg) {
    super(msg);
  }
}
// VCT arguments array
/**
  * An array iterable for the VCT library.
  *
  * @class
  */
class VCTArgumentsArray {
 /**
   * @param {string} value - Value, Please put RGB
   * @param {number[]} color - The color array ([r, g, b])
   * @param {number} transparency - Transparency of color
  */
  constructor(value, color, transparency) {
    this.value = value;
    this.color = color;
    this.transparency = transparency;
  }
  *[Symbol.iterator]() {
    yield this.value;
    yield this.color;
    yield this.transparency;
  }
}

// Accessibles
// Access values
/**
  * This is the variable for accessing values quickly for the VCT library.
  *
  * @type {{
  *  transparency: {
  *    f: number,
  *    h: number,
  *    i: number
  *  }
  * }}
  */
const vctAccessValues = {
  "transparency": {
    "f": 0, // full
    "h": 0.5, // half
    "i": 1 // invisible
  }
};
// Meaning of VCT
const vctMeaning = "Value Color Transparency";

// Helpers
// RGB table
/**
  * RGB conversion table designed for both extracting RGB into a table and
  * for the VCT library.
  *
  * @param {number[]} rgbArray - For the RGB array
  */
function rgbTable(rgbArray) {
  if (rgbArray.length !== 3) {
    throw new VCTColorConversionError(
      "Expected actual RGB table (3 items), got "
      + rgbArray.length + " items."
    );
  }
  return {
    r: rgbArray[0] % 256,
    g: rgbArray[1] % 256,
    b: rgbArray[2] % 256
  }
};
// Convert from VCT
/**
  * Converts VCT into RGB (with alpha so RGBA alternative)
  *
  * @param {VCTArgumentsArray} vctArgumentsArray - VCT arguments array
  */
function vctToRgb(vctArgumentsArray) {
  if (vctArgumentsArray.value === "RGB") {
    return {
      ...rgbTable(vctArgumentsArray.color),
      a: (100 - vctArgumentsArray.transparency * 100) / 100
    }
  } else {
    throw new VCTColorConversionError(
      "Expected RGB, got " + vctArgumentsArray.value
    );
  }
};
// Convert from RGB
/**
  * Converts RGB to VCT (VCTArgumentsArray)
  *
  * @param {number[]} rgbArray - RGB Array
  * @param {number} transparency - The transparency of the RGB
  */
function rgbToVct(rgbArray, transparency) {
  return new VCTArgumentsArray("RGB", rgbArray, transparency);
};
