export function needsLicense(kind) {
  if (kind == 'car'){
    return true
  } else if (kind == 'truck'){
    return true 
  } else {
    return false
  }
}

export function chooseVehicle(option1, option2){
   if (option1 < option2){
     return `${option1} is clearly the better choice.`
   }else if (option1 > option2){
     return `${option2} is clearly the better choice.`
   }else {
     return `not valid`
   }
}


export function calculateResellPrice(originalPrice, age) {
   var endingprice = 0;
  if (age < 3){
    endingprice = originalPrice * 0.80
      return endingprice
  } else if ( age >= 3 && age <= 10){
    endingprice = originalPrice * 0.70
    return endingprice 
  }else if (age > 10 ){
    endingprice = originalPrice * 0.50
    return endingprice
  }
}
