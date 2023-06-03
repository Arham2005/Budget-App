let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
  const incomeInput = document.getElementById('incomeInput');
  const incomeAmount = parseFloat(incomeInput.value);
  
  totalIncome += incomeAmount;
  
  document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
  document.getElementById('remainingBudget').textContent = (totalIncome - totalExpenses).toFixed(2);
  
  incomeInput.value = '';
}

function addExpense() {
  const expenseNameInput = document.getElementById('expenseNameInput');
  const expenseAmountInput = document.getElementById('expenseAmountInput');
  const expenseName = expenseNameInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);
  
  totalExpenses += expenseAmount;
  
  document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
  document.getElementById('remainingBudget').textContent = (totalIncome - totalExpenses).toFixed(2);
  
  expenseNameInput.value = '';
  expenseAmountInput.value = '';
}
