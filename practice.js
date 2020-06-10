export function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
  }

export function reverse(str){
  return str.split("").reverse().join("");
}

export const calculator =  {
  add: (a, b) => {return a + b;},
  subtract: (a, b) => {return a - b;},
  multipy: (a, b) => {return a * b;},
  divide: (a, b) => {return a / b;},
}

export const caesar = string => string.replace(/([a-z])/ig, ( char => {
  let charNumber = char.charCodeAt(0)
  charNumber === 122 //'z'
    ? charNumber = 97 // 'Z'
    : charNumber === 90 //'z' => 'a'
      ? charNumber = 65 //'Z' => 'A'
      : charNumber += 1
    return String.fromCharCode(charNumber)
  }) );



