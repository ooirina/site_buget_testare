// app.js
let incomeTotal = 0;
let expenses = [];

// Functie de actualizare rezultate
function updateResults() {
    const totalExpenses = expenses.reduce((a, b) => a + b, 0);
    document.getElementById('totalIncomeValue').innerText = incomeTotal.toLocaleString();
    document.getElementById('totalExpensesValue').innerText = totalExpenses.toLocaleString();
    document.getElementById('finalBudgetValue').innerText = (incomeTotal - totalExpenses).toLocaleString();
}

// Adaugare venit
document.getElementById('add_income').addEventListener('click', () => {
    const val = parseFloat(document.getElementById('incomeInput').value);
    if(!isNaN(val)) {
        incomeTotal += val;
        document.getElementById('incomeInput').value = '';
        updateResults();
    }
});

// Adaugare cheltuiala
document.getElementById('add_expense').addEventListener('click', () => {
    const val = parseFloat(document.getElementById('expenseInput').value);
    if(!isNaN(val)) {
        expenses.push(val);
        document.getElementById('expenseInput').value = '';
        renderExpenses();
        updateResults();
    }
});

function renderExpenses() {
    const list = document.getElementById('expenseList');
    list.innerHTML = '';
    expenses.forEach((e, i) => {
        const li = document.createElement('li');
        li.textContent = e.toLocaleString();
        list.appendChild(li);
    });
}

// Conversie valutară simplă (rate fixe)
const rates = {
    "RON": 1,
    "EUR": 0.2,
    "USD": 0.22
};

document.getElementById('convert').addEventListener('click', () => {
    const currency = document.getElementById('currencySelect').value;
    const finalBudget = incomeTotal - expenses.reduce((a,b)=>a+b,0);
    const converted = finalBudget * rates[currency];
    document.getElementById('convertedValue').innerText = converted.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2}) + ' ' + currency;
});
