const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// this function should contain the bonus percentage the employee is to receive.
function bonusCalc(employee) {
  let bonusPercent = 0;
  let employeeNumber = employee.employeeNumber;
  let reviewScore = employee.reviewRating;
  let annualIncome = employee.annualSalary;

  function ratincCalc(reviewScore){
    
  }
  function employLengthCalc(employeeNumber){

  }

  function annualIncomeCalc(annualIncome){
    
  }

  function maxMinBonusGate(bonusPercent){
    
  }
  
}

// this function should be the adjusted annual compensation (base annual + bonus)
function totalCompCalc(params) {
  
}

// this function should be the employee's total bonus roundered to the nearest dollar
function totalBonusCalc(params) {
  
}

function BonusMetrics(employee){
  this.name = employee.name
  this.bonusPercentage = bunusCalc(employee)
}