// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]
*/
const transactionOfIncomes = transactions.filter(transaction => (transaction[0] === "income"))
console.log(transactionOfIncomes);


       /*
Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]*/
       const transactionOfExpenses = transactions.filter(transaction => (transaction[0] === "expense"))
       console.log(transactionOfExpenses);


       /*

******************************************************************/


/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200*/

const totalIncome = transactionOfIncomes.reduce(function(totall,transaction){return totall + transaction[1]}, 0);
console.log(totalIncome);
/*
Task 4) Calculate the total expenses and return it.
       Output 4) 800*/

const totalIexpenses = transactionOfExpenses.reduce(function(totall,transaction){return totall + transaction[1]}, 0);

console.log(totalIexpenses);


       /*

******************************************************************/


/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400*/
    const netTotal = totalIncome - totalIexpenses;
    console.log(netTotal);

       /*
Task 6) Identify and create a new array with transactions (both incomes and expenses) above  or equal to $500.
       Output 6) [["income", 1000], ["income", 1500], ["expense", 500], ["income", 700]]

******************************************************************/
const newTransaction = transactions.filter(transaction=>transaction[1] >=500)
console.log(newTransaction)

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
