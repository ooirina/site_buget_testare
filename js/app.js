// Totaluri simple
let totalIncome = 0;
let totalExpenses = 0;

// Actualizare afișaj
function updateResults() {
    document.getElementById("totalIncomeValue").innerText = totalIncome + " RON";
    document.getElementById("totalExpensesValue").innerText = totalExpenses + " RON";
    document.getElementById("finalBudgetValue").innerText = (totalIncome - totalExpenses) + " RON";
}

// Adaugă venit
document.getElementById("add_income").addEventListener("click", () => {
    const val = parseFloat(document.getElementById("incomeInput").value);
    if (isNaN(val) || val <= 0) return alert("Sumă invalidă!");

    totalIncome += val;
    document.getElementById("incomeInput").value = "";

    updateResults();
});

// Adaugă cheltuială
document.getElementById("add_expense").addEventListener("click", () => {
    const val = parseFloat(document.getElementById("expenseInput").value);
    if (isNaN(val) || val <= 0) return alert("Sumă invalidă!");

    totalExpenses += val;
    document.getElementById("expenseInput").value = "";

    updateResults();
});

// Scade venit
document.getElementById("delete_income_btn").addEventListener("click", () => {
    const val = parseFloat(document.getElementById("delete_income_input").value);
    if (isNaN(val) || val <= 0) return alert("Sumă invalidă!");

    totalIncome -= val;
    if (totalIncome < 0) totalIncome = 0;

    document.getElementById("delete_income_input").value = "";

    updateResults();
});

// Scade cheltuială
document.getElementById("delete_expense_btn").addEventListener("click", () => {
    const val = parseFloat(document.getElementById("delete_expense_input").value);
    if (isNaN(val) || val <= 0) return alert("Sumă invalidă!");

    totalExpenses -= val;
    if (totalExpenses < 0) totalExpenses = 0;

    document.getElementById("delete_expense_input").value = "";

    updateResults();
});

// Reset
document.getElementById("reset_all").addEventListener("click", () => {
    if (!confirm("Resetezi tot?")) return;

    totalIncome = 0;
    totalExpenses = 0;

    updateResults();
    document.getElementById("convertedValue").innerText = "—";
});

// Rate valutare
const rates = { RON: 1, EUR: 0.2, USD: 0.22 };

// Conversie
document.getElementById("convert").addEventListener("click", () => {
    const currency = document.getElementById("currencySelect").value;
    const finalBudget = totalIncome - totalExpenses;
    const converted = finalBudget * rates[currency];

    document.getElementById("convertedValue").innerText =
        converted.toFixed(2) + " " + currency;
});
