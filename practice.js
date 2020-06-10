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


