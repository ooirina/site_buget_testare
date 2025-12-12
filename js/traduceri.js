// ================================
// Dictionar complet de traduceri
// ================================
const dictionary = {
    ro: {
        app_title: "Calculator Buget",
        income: "Venituri",
        expense: "Cheltuieli",
        currency: "Conversie Valutară",

        add_income: "Adaugă",
        add_expense: "Adaugă",
        delete_income_btn: "Șterge venit",
        delete_expense_btn: "Șterge cheltuială",

        total_income: "Total venituri",
        total_expenses: "Total cheltuieli",
        final_budget: "Buget final",

        convert: "Convertește",
        reset_all: "Resetează tot",

        placeholder_income: "0",
        placeholder_delete_income: "Sumă de scăzut",
        placeholder_expense: "0",
        placeholder_delete_expense: "Sumă de scăzut"
    },

    en: {
        app_title: "Budget Calculator",
        income: "Income",
        expense: "Expenses",
        currency: "Currency Conversion",

        add_income: "Add",
        add_expense: "Add",
        delete_income_btn: "Remove income",
        delete_expense_btn: "Remove expense",

        total_income: "Total income",
        total_expenses: "Total expenses",
        final_budget: "Final budget",

        convert: "Convert",
        reset_all: "Reset all",

        placeholder_income: "0",
        placeholder_delete_income: "Amount to subtract",
        placeholder_expense: "0",
        placeholder_delete_expense: "Amount to subtract"
    },

    es: {
        app_title: "Calculadora de Presupuesto",
        income: "Ingresos",
        expense: "Gastos",
        currency: "Conversión de Moneda",

        add_income: "Agregar",
        add_expense: "Agregar",
        delete_income_btn: "Eliminar ingreso",
        delete_expense_btn: "Eliminar gasto",

        total_income: "Total ingresos",
        total_expenses: "Total gastos",
        final_budget: "Presupuesto final",

        convert: "Convertir",
        reset_all: "Restablecer todo",

        placeholder_income: "0",
        placeholder_delete_income: "Cantidad a restar",
        placeholder_expense: "0",
        placeholder_delete_expense: "Cantidad a restar"
    },

    ar: {
        app_title: "حاسبة الميزانية",
        income: "الدخل",
        expense: "المصروفات",
        currency: "تحويل العملة",

        add_income: "إضافة",
        add_expense: "إضافة",
        delete_income_btn: "حذف الدخل",
        delete_expense_btn: "حذف المصروف",

        total_income: "إجمالي الدخل",
        total_expenses: "إجمالي المصروفات",
        final_budget: "الميزانية النهائية",

        convert: "تحويل",
        reset_all: "إعادة تعيين الكل",

        placeholder_income: "0",
        placeholder_delete_income: "قيمة للحذف",
        placeholder_expense: "0",
        placeholder_delete_expense: "قيمة للحذف"
    }
};

// ================================
// Funcție principală de actualizare UI
// ================================
function updateUI(lang = "ro") {
    const tr = dictionary[lang];

    // TEXT simplu
    for (const key in tr) {
        if (key.startsWith("placeholder")) continue; // skip placeholders

        const el = document.getElementById(key);
        if (el) el.innerText = tr[key];
    }

    // PLACEHOLDERS traduse
    if (document.getElementById("incomeInput"))
        document.getElementById("incomeInput").placeholder = tr.placeholder_income;

    if (document.getElementById("delete_income_input"))
        document.getElementById("delete_income_input").placeholder = tr.placeholder_delete_income;

    if (document.getElementById("expenseInput"))
        document.getElementById("expenseInput").placeholder = tr.placeholder_expense;

    if (document.getElementById("delete_expense_input"))
        document.getElementById("delete_expense_input").placeholder = tr.placeholder_delete_expense;

    // RTL pentru arabă
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
}

// ================================
// Eveniment selectare limbă
// ================================
document.getElementById("languageSwitcher").addEventListener("change", (e) => {
    updateUI(e.target.value);
});

// ================================
// Inițializare limbă implicită
// ================================
document.addEventListener("DOMContentLoaded", () => {
    updateUI("ro");
});
