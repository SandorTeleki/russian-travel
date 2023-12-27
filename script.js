const russianButton = document.getElementById('russianButton');
const russianSection = document.getElementById('russian-section');
const englishButton = document.getElementById('englishButton');
const englishSection = document.getElementById('english-section');
const yearRU = document.getElementById("year-ru");
const yearEN = document.getElementById("year-en");

const currentYear = new Date().getFullYear();
yearRU.innerText = `©${currentYear} `;
yearEN.innerText = `©${currentYear} `;

function toEnglish(){
    russianButton.classList.remove("header__lang-link_active");
    englishButton.classList.add("header__lang-link_active");
    russianSection.style.display = 'none';
    englishSection.style.display = 'block';
    document.title = "Travel through Russia";
    document.documentElement.lang = 'en';
}

function toRussian(){
    russianButton.classList.add("header__lang-link_active");
    englishButton.classList.remove("header__lang-link_active");
    russianSection.style.display = 'block';
    englishSection.style.display = 'none';
    document.title = "Путешествие по России";
    document.documentElement.lang = 'ru';
}

//Event Listeners
russianButton.addEventListener('click', toRussian);
englishButton.addEventListener('click', toEnglish);

if(navigator.language === 'en-US'){
    toEnglish();
}