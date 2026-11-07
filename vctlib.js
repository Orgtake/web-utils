// Color converter;
// custom VCT library

// Classes
// VCT Error
/**
  * An error constructor for the VCT library.
  *
  @class
  @extends {Error}
  @param {string} msg - The message for the error.
  */
class VCTColorConversionError extends Error {
  constructor(msg) {
    super(msg);
  }
}
// VCT arguments array
/**
  * An array iterable for the VCT library.
  *
  @class
  @param {string} value - Value, Please put RGB
  @param {number[]} color - The color array ([r, g, b])
  @param {number} transparency - Transparency of color
  */
class VCTArgumentsArray {
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
  * Transparency: for transparency
  * f = full, 0,
  * h = half, 0.5,
  * i = invisible, 1
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
  * @param {VCTArgumentsArray} - VCT arguments array
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
  */
function rgbToVct(rgbArray, transparency) {
  return new VCTArgumentsArray("RGB", rgbArray, transparency);
};
