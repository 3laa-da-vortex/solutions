
export function dayRate(ratePerHour) {
  var tot = 0 
  tot = ratePerHour * 8
  return tot
}


export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * 8));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const BILLABLE_DAYS = 22; // عدد أيام العمل في الشهر الواحد
  const dailyRate = ratePerHour * 8; // تكلفة اليوم الواحد
  
  const fullMonths = Math.floor(numDays / BILLABLE_DAYS); // عدد الأشهر الكاملة
  const remainingDays = numDays % BILLABLE_DAYS; // الأيام المتبقية خارج الأشهر الكاملة
  
  // حساب تكلفة الأشهر الكاملة قبل الخصم
  const fullMonthPrice = fullMonths * BILLABLE_DAYS * dailyRate; 
  // تطبيق الخصم على الأشهر الكاملة
  const discountedMonthPrice = fullMonthPrice * (1 - discount);
  
  // حساب تكلفة الأيام المتبقية بالسعر الكامل
  const remainingDaysPrice = remainingDays * dailyRate;
  
  // جمع التكلفتين وتقريب الناتج لأقرب عدد صحيح لأعلى (Math.ceil)
  return Math.ceil(discountedMonthPrice + remainingDaysPrice);
}