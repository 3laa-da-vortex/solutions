
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;


export function remainingMinutesInOven(actualMinutesInOven) {
    let remain = 40 - actualMinutesInOven
  return remain
}


export function preparationTimeInMinutes(numberOfLayers) {
    let preptime = numberOfLayers * 2
  return preptime
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    let tot =  numberOfLayers * 2 + actualMinutesInOven
  return tot
}
