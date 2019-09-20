function exceptionRoman(roman) {
    let transformed = roman;

    transformed = transformed.replace('IIII', 'IV'); // 4
    transformed = transformed.replace('VIIII', 'IX'); // 9
    transformed = transformed.replace('XXXX', 'XL'); // 40
    transformed = transformed.replace('LXXXX', 'XC'); // 90
    transformed = transformed.replace('CCCC', 'CD'); // 400
    transformed = transformed.replace('DCCCC', 'CM'); // 900

    return transformed;
};

function convertArabic(value) {
    let data = {
      convert: '',
      remain: parseInt(value)
    };
    let result = '';

    data = arabicGetDivised(data.remain, 'M', 1000);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'CM', 900);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'D', 500);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'CD', 400);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'C', 100);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'XC', 90);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'L', 50);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'XV', 40);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'X', 10);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'IX', 9);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'V', 5);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'IV', 4);
    result += data.convert;
    data = arabicGetDivised(data.remain, 'I', 1);
    result += data.convert;
    return exceptionRoman(result);
}



function initDictionary() {
  const max = 5000;
  const dictionary = {};
  for (let i = 1; i < max; i++) {
    const roman = convertArabic(i);
    dictionary[roman] = i;
  }
  return dictionary;
}

function arabicGetDivised(value, roman, arab) {
    const diff = Math.floor(value / arab);
    const convert = roman.repeat(Math.floor(value / arab));
    const remain = value - diff * arab;
    return {convert, remain};
};
function isValidRomanNumber(input, dictionary){
    let error = 'Not a valid number.';
    const transformed = exceptionRoman(input);
    if (transformed in dictionary) error = `${error} Did you mean '${transformed}' instead?`;

    return error;
};

module.exports = { isValidRomanNumber, initDictionary };