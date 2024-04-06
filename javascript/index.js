import { allLanguages } from "./languages.js";

const getLanguage = (language) => {
  let languageToReturn = language;

  if (language === null) {
    let localLanguage = localStorage.getItem("lang");

    if (localLanguage) {
      return localLanguage;
    }

    let userLang = navigator.language || navigator.userLanguage;
    console.log("USERLANG", userLang);
    const options = ["en", "pt-br"];

    const translateOptions = {
      "en-US": "en",
    };

    userLang = translateOptions[userLang];

    if (options.includes(`${userLang}`.toLowerCase())) {
      languageToReturn = `${userLang}`.toLowerCase();
    } else {
      languageToReturn = "pt-br";
    }
  }

  return languageToReturn;
};

const changeLanguage = (language, file = "home") => {
  let languageToChoose = language;

  languageToChoose = getLanguage(language);

  localStorage.setItem("lang", languageToChoose);

  const elements = document.querySelectorAll("body *");

  for (let i = 0; i < elements.length; i++) {
    const elementToTranslate = elements[i].getAttribute("data-translate");
    if (
      elementToTranslate &&
      allLanguages[languageToChoose][file][elementToTranslate]
    ) {
      elements[i].textContent =
        allLanguages[languageToChoose][file][elementToTranslate];
    }
  }
};

window.changeLanguage = changeLanguage;
