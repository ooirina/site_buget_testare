
/**
 * 5.1 Definirea ratelor de schimb
 * Ratele sunt raportate la moneda de bază RON (1 RON = x Valută)
 * Conform specificațiilor: RON:1, EUR:0.20, USD:0.22 
 */
const exchangeRates = {
    RON: 1,
    EUR: 0.20,
    USD: 0.22,
    // Putem adăuga și alte monede necesare pentru traducerile din Etapa 6 (ex: pentru arabă/spaniolă)
    GBP: 0.17 
};

/**
 * 5.2 Funcția convertCurrency(amount, target) 
 * Convertește o sumă din moneda de bază (RON) în moneda țintă.
 * * @param {number} amount - Suma în RON (sau moneda de bază)
 * @param {string} targetCurrency - Codul monedei în care vrem să convertim (ex: "EUR")
 * @returns {string} - Suma convertită formatată cu 2 zecimale
 */
function convertCurrency(amount, targetCurrency) {
    // Validare simplă a input-ului
    if (isNaN(amount) || amount < 0) {
        console.error("Suma invalidă pentru conversie.");
        return "0.00";
    }

    // Verificăm dacă moneda țintă există în lista noastră
    if (!exchangeRates[targetCurrency]) {
        console.warn(`Moneda ${targetCurrency} nu este definită. Se returnează valoarea originală.`);
        return amount.toFixed(2);
    }

    const rate = exchangeRates[targetCurrency];
    const result = amount * rate;

    return result.toFixed(2); // Returnăm rezultatul cu 2 zecimale
}

/**
 * Funcție utilitară opțională (pentru Etapa 4 - app.js)
 * Dacă utilizatorul schimbă moneda principală a aplicației, 
 * această funcție ajută la recalcularea totalurilor.
 */
function getRate(currency) {
    return exchangeRates[currency] || 1;
}

// Exportăm variabilele dacă folosim module ES6, sau le lăsăm globale pentru includere simplă în HTML
// window.exchangeRates = exchangeRates;
// window.convertCurrency = convertCurrency;