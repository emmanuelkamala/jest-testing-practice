export function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
  }

export function sum(a,b) {
  return a + b;
}

export function reverse(str){
  return str.split("").reverse().join("");
}


