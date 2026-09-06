
export const format = (name , number) => {
  let suf = 'th';

  if (number % 10 === 1 && number % 100 != 11) suf = 'st';
  else if (number % 10 === 2 && number % 100 != 12) suf = 'nd';
  else if (number % 10 === 3 && number % 100 != 13) suf = 'rd';

  return `${name}, you are the ${number}${suf} customer we serve today. Thank you!`
};

