export function getItem(cards, position) {
   return cards[position]
}


export function setItem(cards, position, replacementCard) {
  return cards.toSpliced(position , 1 , replacementCard)
}

export function insertItemAtTop(cards, newCard) {
  let x = cards.push(newCard);
   return cards
}


export function removeItem(cards, position) {
  let  x = cards.splice(position , 1)
  return cards
}


export function removeItemFromTop(cards) {
  let r = cards.splice(-1 , 1);
  return cards
}


export function insertItemAtBottom(cards, newCard) {
   let i = cards.unshift(newCard);
  return cards
}


export function removeItemAtBottom(cards) {
   let r = cards.splice(0 ,1 );
  return cards
}


export function checkSizeOfStack(cards, stackSize) {
   if (cards.length == stackSize){
     return true
   }else {
     return false
   }
}
