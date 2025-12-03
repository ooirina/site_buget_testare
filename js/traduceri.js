// i18n.js
let currentLang = 'ro';
let translations = {};

async function loadLang(lang){
    const res = await fetch(`lang/${lang}.json`);
    translations = await res.json();
    currentLang = lang;
    updateUI();
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
}

function updateUI(){
    for(const id in translations){
        const el = document.getElementById(id);
        if(el) el.innerText = translations[id];
    }
}

document.getElementById('languageSwitcher').addEventListener('change', e => {
    loadLang(e.target.value);
});

// Load default language
loadLang('ro');
