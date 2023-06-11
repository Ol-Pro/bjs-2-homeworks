"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b ** 2) - (4 * a * c);
	if (d < 0) {
		arr.push();
	} else if (d == 0) {		
		let oneRoot = -b / (2 * a);
			arr.push(oneRoot);
	} else if (d > 0) {
		let firstRoot = (-b + Math.sqrt(d))/(2 * a);
		let secondRoot = (-b - Math.sqrt(d))/(2 * a);
			arr.push(firstRoot, secondRoot);		  		
	} 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const P = percent / 100 / 12;
	const S = amount - contribution;
	const n = countMonths;
	const monthlyPayment = S * (P + P / (Math.pow(1 + P, n) - 1));
	const totalAmount = (monthlyPayment * n).toFixed(2);
	let num = Number(totalAmount);
	return num;
}
calculateTotalMortgage(10, 0, 50000, 12)