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
    /*if (window.location.hash)   {
        if (window.location.hash === "#ru" && lang === "ru")
            return;
        else if (window.location.hash === "#eng" && lang === "eng")
            return;

        window.location.hash = lang;
    }
    else    {
        alert("Hash not set!");
        window.location.hash = lang;
        return;
    }

    if (window.location.hash === "#ru") {
        setTextToRu();
        SELECTOR_RU.style.color = "#070707";
        SELECTOR_ENG.style.color = "#828282";
        document.documentElement.setAttribute("lang", "ru");
    }
    else if (window.location.hash === "#eng" && lang === "eng") {
        setTextToEng();
        SELECTOR_RU.style.color = "#828282";
        SELECTOR_ENG.style.color = "#070707";
        document.documentElement.setAttribute("lang", "eng");
    }*/

    if (window.location.hash) {
        if (window.location.hash === "#ru" && lang === "eng")   {
            setTextToEng();
            SELECTOR_RU.style.color = "#828282";
            SELECTOR_ENG.style.color = "#070707";
            document.documentElement.setAttribute("lang", "eng");
            window.location.hash = lang;
        }
        else if (window.location.hash === "#eng" && lang === "ru")  {
            setTextToRu();
            SELECTOR_RU.style.color = "#070707";
            SELECTOR_ENG.style.color = "#828282";
            document.documentElement.setAttribute("lang", "ru");
            window.location.hash = lang;
        }
    }
    else {
        alert("Hash not set!");
        window.location.hash = lang;
    }
}

function setTextToRu()  {
    document.getElementById("menu-home").textContent = text["ru"]["homeVar"];
    document.getElementById("menu-about").textContent = text["ru"]["aboutMeVar"];
    document.getElementById("menu-skills").textContent = text["ru"]["skillsVar"];
    document.getElementById("menu-portfolio").textContent = text["ru"]["portfolioVar"];
    document.getElementById("menu-contacts").textContent = text["ru"]["contactsVar"];

    document.getElementById("first-name").textContent = text["ru"]["firstNameVar"];
    document.getElementById("last-name").textContent = text["ru"]["lastNameVar"];

    document.getElementById("info-first").textContent = text["ru"]["infoVarFirst"];
    document.getElementById("info-second").textContent = text["ru"]["infoVarSecond"];

    document.getElementById("about-h").textContent = text["ru"]["aboutMeVar"];
    document.getElementById("about-p1-first").textContent = text["ru"]["aboutp1VarFirst"];
    document.getElementById("about-p1-second").textContent = text["ru"]["aboutp1VarSecond"];
    document.getElementById("about-p2-first").textContent = text["ru"]["aboutp2VarFirst"];
    document.getElementById("about-p2-second").textContent = text["ru"]["aboutp2VarSecond"];
    document.getElementById("about-p3-first").textContent = text["ru"]["aboutp3VarFirst"];
    document.getElementById("about-p3-second").textContent = text["ru"]["aboutp3VarSecond"];

    document.getElementById("skills-h").textContent = text["ru"]["skillsVar"];
    document.getElementById("skills-p").textContent = text["ru"]["skillsPVar"];

    document.getElementById("portfolio-h").textContent = text["ru"]["portfolioVar"];

    document.getElementById("contacts-h").textContent = text["ru"]["contactsVar"];
    document.getElementById("contacts-p-first").textContent = text["ru"]["contactsPVarFirst"];
    document.getElementById("contacts-p-second").textContent = text["ru"]["contactsPVarSecond"];

    document.getElementById("button").textContent = text["ru"]["buttonVar"];
    document.getElementById("footer-first").textContent = text["ru"]["footerVarFirst"];
    document.getElementById("footer-second").textContent = text["ru"]["footerVarSecond"];
}

function setTextToEng() {
    document.getElementById("menu-home").textContent = text["eng"]["homeVar"];
    document.getElementById("menu-about").textContent = text["eng"]["aboutMeVar"];
    document.getElementById("menu-skills").textContent = text["eng"]["skillsVar"];
    document.getElementById("menu-portfolio").textContent = text["eng"]["portfolioVar"];
    document.getElementById("menu-contacts").textContent = text["eng"]["contactsVar"];

    document.getElementById("first-name").textContent = text["eng"]["firstNameVar"];
    document.getElementById("last-name").textContent = text["eng"]["lastNameVar"];

    document.getElementById("info-first").textContent = text["eng"]["infoVarFirst"];
    document.getElementById("info-second").textContent = text["eng"]["infoVarSecond"];

    document.getElementById("about-h").textContent = text["eng"]["aboutMeVar"];
    document.getElementById("about-p1-first").textContent = text["eng"]["aboutp1VarFirst"];
    document.getElementById("about-p1-second").textContent = text["eng"]["aboutp1VarSecond"];
    document.getElementById("about-p2-first").textContent = text["eng"]["aboutp2VarFirst"];
    document.getElementById("about-p2-second").textContent = text["eng"]["aboutp2VarSecond"];
    document.getElementById("about-p3-first").textContent = text["eng"]["aboutp3VarFirst"];
    document.getElementById("about-p3-second").textContent = text["eng"]["aboutp3VarSecond"];

    document.getElementById("skills-h").textContent = text["eng"]["skillsVar"];
    document.getElementById("skills-p").textContent = text["eng"]["skillsPVar"];

    document.getElementById("portfolio-h").textContent = text["eng"]["portfolioVar"];

    document.getElementById("contacts-h").textContent = text["eng"]["contactsVar"];
    document.getElementById("contacts-p-first").textContent = text["eng"]["contactsPVarFirst"];
    document.getElementById("contacts-p-second").textContent = text["eng"]["contactsPVarSecond"];

    document.getElementById("button").textContent = text["eng"]["buttonVar"];
    document.getElementById("footer-first").textContent = text["eng"]["footerVarFirst"];
    document.getElementById("footer-second").textContent = text["eng"]["footerVarSecond"];
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
