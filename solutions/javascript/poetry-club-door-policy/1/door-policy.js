
export function frontDoorResponse(line) {
   return line[0]
}

export function frontDoorPassword(word) {
 const capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
return capitalized
}

export function backDoorResponse(line) {
   const t= line.trim() ;
   const l = t.length;
  return t[l - 1]
}


export function backDoorPassword(word) {
   const cap = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
  return (cap + '' + ', please')
}
