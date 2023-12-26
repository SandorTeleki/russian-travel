const russianButton = document.getElementById('russianButton');
const russianSection = document.getElementById('russian-section');
const englishButton = document.getElementById('englishButton');
const englishSection = document.getElementById('english-section');
const year = document.getElementById("year");

const currentYear = new Date().getFullYear();
year.innerText = `©${currentYear}`

russianButton.addEventListener('click', () => {
    russianButton.classList.add("header__lang-link_active");
    englishButton.classList.remove("header__lang-link_active");
    russianSection.style.display = 'block';
    englishSection.style.display = 'none';
    document.title = "Путешествие по России";
    document.documentElement.lang = 'ru';
})

englishButton.addEventListener('click', () => {
    russianButton.classList.remove("header__lang-link_active");
    englishButton.classList.add("header__lang-link_active");
    russianSection.style.display = 'none';
    englishSection.style.display = 'block';
    document.title = "Travel through Russia";
    document.documentElement.lang = 'en';
})