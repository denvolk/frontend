const SELECTOR_RU = document.getElementById("ruL");
const SELECTOR_ENG = document.getElementById("engL");

const HEADER = document.getElementsByClassName("header")[0];

const PS_CANVAS = document.getElementById('PS-canvas');
const AI_CANVAS = document.getElementById('AI-canvas');
const AAE_CANVAS = document.getElementById('AAE-canvas');
const FIGMA_CANVAS = document.getElementById('Figma-canvas');

const MAX_SLIDES = 3;
const PREV_BTN_1 = document.getElementById('prev-btn-1');
const NEXT_BTN_1 = document.getElementById('next-btn-1');
const PREV_BTN_2 = document.getElementById('prev-btn-2');
const NEXT_BTN_2 = document.getElementById('next-btn-2');
const PREV_BTN_3 = document.getElementById('prev-btn-3');
const NEXT_BTN_3 = document.getElementById('next-btn-3');
let currSlide_1 = 1;
let currSlide_2 = 1;
let currSlide_3 = 1;

let psCanvas;
let aiCanvas;
let aaeCanvas;
let figmaCanvas;

let text;

document.addEventListener("DOMContentLoaded", function changeColorAndHash(){
    SELECTOR_ENG.style.color = "#070707";
    SELECTOR_RU.style.color = "#828282";
    document.location.hash = "#eng";
});
document.addEventListener("DOMContentLoaded", drawSkills);
document.addEventListener("DOMContentLoaded", hideSlides);

fetch("https://raw.githubusercontent.com/denvolk/frontend/pure-js/json/text.json")    //Для GitHub Pages
//fetch("http://localhost:63342/frontend/json/text.json")   //Для локального использования
    .then(response => response.json())
    .then(data => text = data);

function changeLanguage(lang)   {
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

function drawCanvas(img)   {
    //let canvas = document.getElementById('PS-canvas').getContext('2d');
    let canvas;
    let image = new Image();
    let w = 0;
    let h = 0;

    switch (img)    {
        case 'PS-canv':
            w = h = 90;
            document.getElementById('PS-canvas').width = w; document.getElementById('PS-canvas').height = h;
            canvas = document.getElementById('PS-canvas').getContext('2d');
            image.src = 'pics/PS.png';
            break;
        case 'AI-canv':
            w = h = 90;
            document.getElementById('AI-canvas').width = w; document.getElementById('AI-canvas').height = h;
            canvas = document.getElementById('AI-canvas').getContext('2d');
            image.src = 'pics/AI.png';
            break;
        case 'AAE-canv':
            w = h = 90;
            document.getElementById('AAE-canvas').width = w; document.getElementById('AAE-canvas').height = h;
            canvas = document.getElementById('AAE-canvas').getContext('2d');
            image.src = 'pics/AAE.png';
            break;
        case 'Figma-canv':
            w = 59; h = 90;
            document.getElementById('Figma-canvas').width = w; document.getElementById('Figma-canvas').height = h;
            canvas = document.getElementById('Figma-canvas').getContext('2d');
            image.src = 'pics/Figma.png';
            break;
        default:
            alert('No canvas provided!');
    }

    image.addEventListener('load', function()   {
        canvas.drawImage(image, 0, 0, w, h);
    });
    //image.onload = function(){canvas.drawImage(image, 0, 0, w, h)};
}

function drawSkills()   {
    drawCanvas('PS-canv');
    drawCanvas('AI-canv');
    drawCanvas('AAE-canv');
    drawCanvas('Figma-canv');
    //psCanvas = PS_CANVAS.getContext('2d').getImageData(0, 0, PS_CANVAS.width, PS_CANVAS.height);
}

function makeGrayScale(img)    {
    /*let imageData = PS_CANVAS.getContext('2d').getImageData(0, 0, PS_CANVAS.width, PS_CANVAS.height);
    let data = imageData.data;
    psCanvas = Array.from(data);
    changePixelData(data, 0);*/

    let imageData;
    let data;

    switch (img)    {
        case 'PS-canvas':
            imageData = PS_CANVAS.getContext('2d').getImageData(0, 0, PS_CANVAS.width, PS_CANVAS.height);
            data = imageData.data;
            psCanvas = Array.from(data);
            break;
        case 'AI-canvas':
            imageData = AI_CANVAS.getContext('2d').getImageData(0, 0, AI_CANVAS.width, AI_CANVAS.height);
            data = imageData.data;
            aiCanvas = Array.from(data);
            break;
        case 'AAE-canvas':
            imageData = AAE_CANVAS.getContext('2d').getImageData(0, 0, AAE_CANVAS.width, AAE_CANVAS.height);
            data = imageData.data;
            aaeCanvas = Array.from(data);
            break;
        case 'Figma-canvas':
            imageData = FIGMA_CANVAS.getContext('2d').getImageData(0, 0, FIGMA_CANVAS.width, FIGMA_CANVAS.height);
            data = imageData.data;
            figmaCanvas = Array.from(data);
            break;
        default:
            alert('No canvas id provided!')
    }

    changePixelData(data, 0);

    switch (img) {
        case 'PS-canvas':
            PS_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
            break;
        case 'AI-canvas':
            AI_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
            break;
        case 'AAE-canvas':
            AAE_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
            break;
        case 'Figma-canvas':
            FIGMA_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
            break;
        default:
            alert('No canvas id provided!')
    }
    //PS_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
}

function returnColor(img)   {
    /*let imageData = PS_CANVAS.getContext('2d').getImageData(0, 0, PS_CANVAS.width, PS_CANVAS.height);
    let data = imageData.data;
    changePixelData(data, 1, psCanvas);*/

    let imageData;
    let data;

    switch (img)    {
        case 'PS-canvas':
            imageData = PS_CANVAS.getContext('2d').getImageData(0, 0, PS_CANVAS.width, PS_CANVAS.height);
            data = imageData.data;
            changePixelData(data, 1, psCanvas);
            PS_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
            psCanvas = [];
            break;
        case 'AI-canvas':
            imageData = AI_CANVAS.getContext('2d').getImageData(0, 0, AI_CANVAS.width, AI_CANVAS.height);
            data = imageData.data;
            changePixelData(data, 1, aiCanvas);
            AI_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
            aiCanvas = [];
            break;
        case 'AAE-canvas':
            imageData = AAE_CANVAS.getContext('2d').getImageData(0, 0, AAE_CANVAS.width, AAE_CANVAS.height);
            data = imageData.data;
            changePixelData(data, 1, aaeCanvas);
            AAE_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
            aaeCanvas = [];
            break;
        case 'Figma-canvas':
            imageData = FIGMA_CANVAS.getContext('2d').getImageData(0, 0, FIGMA_CANVAS.width, FIGMA_CANVAS.height);
            data = imageData.data;
            changePixelData(data, 1, figmaCanvas);
            FIGMA_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
            figmaCanvas = [];
            break;
        default:
            alert('No canvas id provided!');
    }

    //PS_CANVAS.getContext('2d').putImageData(imageData, 0, 0);
    //psCanvas = [];
}

function changePixelData(data, mode, defaultData)  {
    if (mode === 0) {
        for (let iter = 0; iter < data.length; iter += 4)   {
            let average = (data[iter] + data[iter + 1] + data[iter + 2]) / 3;

            data[iter] = average;
            data[iter + 1] = average;
            data[iter + 2] = average;
        }
    }
    else if (mode === 1)    {
        for (let iter = 0; iter < data.length; iter += 4)   {
            data[iter] = defaultData[iter];
            data[iter + 1] = defaultData[iter + 1];
            data[iter + 2] = defaultData[iter + 2];
        }
    }
}

PS_CANVAS.addEventListener('mouseover', function () {makeGrayScale('PS-canvas');});
PS_CANVAS.addEventListener('mouseleave', function () {returnColor('PS-canvas');});

AI_CANVAS.addEventListener('mouseover', function () {makeGrayScale('AI-canvas');});
AI_CANVAS.addEventListener('mouseleave', function () {returnColor('AI-canvas');});

AAE_CANVAS.addEventListener('mouseover', function () {makeGrayScale('AAE-canvas');});
AAE_CANVAS.addEventListener('mouseleave', function () {returnColor('AAE-canvas');});

FIGMA_CANVAS.addEventListener('mouseover', function () {makeGrayScale('Figma-canvas');});
FIGMA_CANVAS.addEventListener('mouseleave', function () {returnColor('Figma-canvas');});
//PS_CANVAS.onmouseover = makeGrayScale('PS-canv');

function hideSlides()   {
    document.getElementById('slide-1-2').style.display = 'none';
    document.getElementById('slide-1-3').style.display = 'none';

    document.getElementById('slide-2-2').style.display = 'none';
    document.getElementById('slide-2-3').style.display = 'none';

    document.getElementById('slide-3-2').style.display = 'none';
    document.getElementById('slide-3-3').style.display = 'none';
}

function showSlide(slider, slide)    {
    let x = document.getElementsByClassName('slider')[slider - 1];
    let y = x.getElementsByClassName('slide');

    switch (slide) {
        case 1:
            y[0].style.display = 'block';
            y[1].style.display = y[2].style.display = 'none';
            break;
        case 2:
            y[1].style.display = 'block';
            y[0].style.display = y[2].style.display = 'none';
            break;
        case 3:
            y[2].style.display = 'block';
            y[0].style.display = y[1].style.display = 'none';
            break;
        default:
            alert('No slide number was provided! show');
    }
}

function nextImg(slide)  {
    switch (slide)  {
        case 1:
            if (currSlide_1 === MAX_SLIDES)  {
                showSlide(1, 1);
                currSlide_1 = 1;
            }
            else if (currSlide_1 === 1) {
                showSlide(1, 2);
                currSlide_1++;
            }
            else if (currSlide_1 === 2) {
                showSlide(1, 3);
                currSlide_1++;
            }
            break;
        case 2:
            if (currSlide_2 === MAX_SLIDES)  {
                showSlide(2, 1);
                currSlide_2 = 1;
            }
            else if (currSlide_2 === 1) {
                showSlide(2, 2);
                currSlide_2++;
            }
            else if (currSlide_2 === 2) {
                showSlide(2, 3);
                currSlide_2++;
            }
            break;
        case 3:
            if (currSlide_3 === MAX_SLIDES)  {
                showSlide(3, 1);
                currSlide_3 = 1;
            }
            else if (currSlide_3 === 1) {
                showSlide(3, 2);
                currSlide_3++;
            }
            else if (currSlide_3 === 2) {
                showSlide(3, 3);
                currSlide_3++;
            }
            break;
        default:
            alert('No slide number provided! next');
    }
}
function prevImg(slide) {
    switch (slide)  {
        case 1:
            if (currSlide_1 === 1)  {
                showSlide(1, 3);
                currSlide_1 = MAX_SLIDES;
            }
            else if (currSlide_1 === 2) {
                showSlide(1, 1);
                currSlide_1--;
            }
            else if (currSlide_1 === 3) {
                showSlide(1, 2);
                currSlide_1--;
            }
            break;
        case 2:
            if (currSlide_2 === 1)  {
                showSlide(2, 3);
                currSlide_2 = MAX_SLIDES;
            }
            else if (currSlide_2 === 2) {
                showSlide(2, 1);
                currSlide_2--;
            }
            else if (currSlide_2 === 3) {
                showSlide(2, 2);
                currSlide_2--;
            }
            break;
        case 3:
            if (currSlide_3 === 1)  {
                showSlide(3, 3);
                currSlide_3 = MAX_SLIDES;
            }
            else if (currSlide_3 === 2) {
                showSlide(3, 1);
                currSlide_3--;
            }
            else if (currSlide_3 === 3) {
                showSlide(3, 2);
                currSlide_3--;
            }
            break;
        default:
            alert('No slide number provided! prev');
    }
}

PREV_BTN_1.addEventListener('click', function () {prevImg(1);});
NEXT_BTN_1.addEventListener('click', function () {nextImg(1);});
PREV_BTN_2.addEventListener('click', function () {prevImg(2);});
NEXT_BTN_2.addEventListener('click', function () {nextImg(2);});
PREV_BTN_3.addEventListener('click', function () {prevImg(3);});
NEXT_BTN_3.addEventListener('click', function () {nextImg(3);});