const SELECTOR_RU = document.getElementById("ruL");
const SELECTOR_ENG = document.getElementById("engL");

const HEADER = document.getElementsByClassName("header")[0];

let text;

document.addEventListener("DOMContentLoaded", function changeColorAndHash(){
    SELECTOR_ENG.style.color = "#070707";
    SELECTOR_RU.style.color = "#828282";
    document.location.hash = "#eng";
});

fetch("https://raw.githubusercontent.com/denvolk/frontend/test-branch/json/text.json")    //Для GitHub Pages
//fetch("http://localhost:63342/frontend/json/text.json")   //Для локального использования
    .then(response => response.json())
    .then(data => text = data);

function changeLanguage(lang)   {
    if (window.location.hash)   {
        window.location.hash = lang;
    }
    else    {
        alert("Hash not set!");
        window.location.hash = lang;
    }

    if (window.location.hash === "#ru") {
        setTextToRu();
        SELECTOR_RU.style.color = "#070707";
        SELECTOR_ENG.style.color = "#828282";
        document.documentElement.setAttribute("lang", "ru");
    }
    else if (window.location.hash === "#eng") {
        setTextToEng();
        SELECTOR_RU.style.color = "#828282";
        SELECTOR_ENG.style.color = "#070707";
        document.documentElement.setAttribute("lang", "eng");
    }
}

function setTextToRu()  {
    document.getElementById("span-menu-home").textContent = text["ru"]["homeVar"];
    document.getElementById("span-menu-about").textContent = text["ru"]["aboutMeVar"];
    document.getElementById("span-menu-skills").textContent = text["ru"]["skillsVar"];
    document.getElementById("span-menu-portfolio").textContent = text["ru"]["portfolioVar"];
    document.getElementById("span-menu-contacts").textContent = text["ru"]["contactsVar"];

    document.getElementById("span-first-name").textContent = text["ru"]["firstNameVar"];
    document.getElementById("span-last-name").textContent = text["ru"]["lastNameVar"];

    document.getElementById("span-info-first").textContent = text["ru"]["infoVarFirst"];
    document.getElementById("span-info-second").textContent = text["ru"]["infoVarSecond"];

    document.getElementById("span-about").textContent = text["ru"]["aboutMeVar"];
    document.getElementById("span-about-p1-first").textContent = text["ru"]["aboutp1VarFirst"];
    document.getElementById("span-about-p1-second").textContent = text["ru"]["aboutp1VarSecond"];
    document.getElementById("span-about-p2-first").textContent = text["ru"]["aboutp2VarFirst"];
    document.getElementById("span-about-p2-second").textContent = text["ru"]["aboutp2VarSecond"];
    document.getElementById("span-about-p3-first").textContent = text["ru"]["aboutp3VarFirst"];
    document.getElementById("span-about-p3-second").textContent = text["ru"]["aboutp3VarSecond"];

    document.getElementById("span-skills").textContent = text["ru"]["skillsVar"];
    document.getElementById("span-skills-p").textContent = text["ru"]["skillsPVar"];

    document.getElementById("span-portfolio").textContent = text["ru"]["portfolioVar"];

    document.getElementById("span-contacts").textContent = text["ru"]["contactsVar"];
    document.getElementById("span-contacts-p-first").textContent = text["ru"]["contactsPVarFirst"];
    document.getElementById("span-contacts-p-second").textContent = text["ru"]["contactsPVarSecond"];

    document.getElementById("span-button").textContent = text["ru"]["buttonVar"];
    document.getElementById("span-footer-first").textContent = text["ru"]["footerVarFirst"];
    document.getElementById("span-footer-second").textContent = text["ru"]["footerVarSecond"];
}

function setTextToEng() {
    document.getElementById("span-menu-home").textContent = text["eng"]["homeVar"];
    document.getElementById("span-menu-about").textContent = text["eng"]["aboutMeVar"];
    document.getElementById("span-menu-skills").textContent = text["eng"]["skillsVar"];
    document.getElementById("span-menu-portfolio").textContent = text["eng"]["portfolioVar"];
    document.getElementById("span-menu-contacts").textContent = text["eng"]["contactsVar"];

    document.getElementById("span-first-name").textContent = text["eng"]["firstNameVar"];
    document.getElementById("span-last-name").textContent = text["eng"]["lastNameVar"];

    document.getElementById("span-info-first").textContent = text["eng"]["infoVarFirst"];
    document.getElementById("span-info-second").textContent = text["eng"]["infoVarSecond"];

    document.getElementById("span-about").textContent = text["eng"]["aboutMeVar"];
    document.getElementById("span-about-p1-first").textContent = text["eng"]["aboutp1VarFirst"];
    document.getElementById("span-about-p1-second").textContent = text["eng"]["aboutp1VarSecond"];
    document.getElementById("span-about-p2-first").textContent = text["eng"]["aboutp2VarFirst"];
    document.getElementById("span-about-p2-second").textContent = text["eng"]["aboutp2VarSecond"];
    document.getElementById("span-about-p3-first").textContent = text["eng"]["aboutp3VarFirst"];
    document.getElementById("span-about-p3-second").textContent = text["eng"]["aboutp3VarSecond"];

    document.getElementById("span-skills").textContent = text["eng"]["skillsVar"];
    document.getElementById("span-skills-p").textContent = text["eng"]["skillsPVar"];

    document.getElementById("span-portfolio").textContent = text["eng"]["portfolioVar"];

    document.getElementById("span-contacts").textContent = text["eng"]["contactsVar"];
    document.getElementById("span-contacts-p-first").textContent = text["eng"]["contactsPVarFirst"];
    document.getElementById("span-contacts-p-second").textContent = text["eng"]["contactsPVarSecond"];

    document.getElementById("span-button").textContent = text["eng"]["buttonVar"];
    document.getElementById("span-footer-first").textContent = text["eng"]["footerVarFirst"];
    document.getElementById("span-footer-second").textContent = text["eng"]["footerVarSecond"];
}

function scrollToPoint(point)   {
    if (point)  {
        switch (point)  {
            case "home":
                scrollToTop();
                break;

            case "about":
                document.querySelector(".about").scrollIntoView({behavior: "smooth"});
                break;

            case "skills":
                document.querySelector(".skills").scrollIntoView({behavior: "smooth"});
                break;

            case "portfolio":
                document.querySelector(".portfolio").scrollIntoView({behavior: "smooth"});
                break;

            case "contacts":
                document.querySelector(".contacts").scrollIntoView({behavior: "smooth"});
                break;
        }
    }
}

function scrollToTop()  {
    HEADER.style.position = "static";
    document.querySelector(".header").scrollIntoView({behavior: "smooth"});
    HEADER.style.position = "sticky";
}
