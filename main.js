let dropdownCollection = document.querySelectorAll(".custom-dropdrowns");

let dropdownArray = Array.from(dropdownCollection);

dropdownArray.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        console.log(dropdown);
        (!dropdown.classList.contains('active')) ?
            dropdown.classList.add('active') :
            dropdown.classList.remove('active')
    })
});




let offerSectionContainer = document.querySelector(".offer-section .overflowed");
let prevButtonOffer = document.querySelector("#prevOffer");
let nextButtonOffer = document.querySelector("#nextOffer");

let stepSectionContainer = document.querySelector(".steps-section .overflowed");
let prevButtonStep = document.querySelector("#prevStep");
let nextButtonStep = document.querySelector("#nextStep");

let advantageSectionContainer = document.querySelector(".advantages-section .overflowed");
let prevButtonAdvantage = document.querySelector("#prevAdvantage");
let nextButtonAdvantage = document.querySelector("#nextAdvantage");

setSectionListeners(offerSectionContainer, prevButtonOffer, nextButtonOffer);
setSectionListeners(stepSectionContainer, prevButtonStep, nextButtonStep);
setSectionListeners(advantageSectionContainer, prevButtonAdvantage, nextButtonAdvantage);



function setSectionListeners(container, prevButton, nextButton) {
    let subElements = Array.from(container.children); 
    let maximumReached = false;
    let opacityButtons = '0.6';

    nextButton.addEventListener("click", () => {
        prevButton.style.opacity = '1';
        if (maximumReached == false) {
            subElements.forEach(element => {

                let style = element.currentStyle || window.getComputedStyle(element);

                let currentMarginRight = parseInt(style.marginRight.substring(0, style.marginRight.length - 2 ));
                let currentMarginLeft = parseInt(style.marginLeft.substring(0, style.marginRight.length - 2 ));
                let marginSums = currentMarginLeft + currentMarginRight;

                let lastTranslate = getTranslateX(element);
                let currentTranslate = lastTranslate - (element.offsetWidth + marginSums );


                let totalElementWidth = (subElements.length * element.offsetWidth);
                let maxElementsinRow = (( Math.trunc(container.offsetWidth / element.offsetWidth) ) - 2  );
                let maxWidthinRow = element.offsetWidth * maxElementsinRow;

                    element.style.transform = "translateX(" + (currentTranslate) + "px)";
                
            });
        } else {
            subElements.forEach(element => {
                element.style.transform = "translateX(" + (0) + "px)";
                prevButton.style.opacity = opacityButtons;
                nextButton.style.opacity = '1';
                maximumReached = false;
            });
        }
    });

    prevButton.addEventListener("click", () => {
        prevButton.style.opacity = '1';
        subElements.forEach(element => {
            let style = element.currentStyle || window.getComputedStyle(element);

            let currentMarginRight = parseInt(style.marginRight.substring(0, style.marginRight.length - 2 ));
            let currentMarginLeft = parseInt(style.marginLeft.substring(0, style.marginRight.length - 2 ));
            let marginSums = currentMarginLeft + currentMarginRight;

            let lastTranslate = getTranslateX(element);
            let currentTranslate = lastTranslate + (element.offsetWidth + marginSums);

            if ( currentTranslate < 0) {
                element.style.transform = "translateX(" + (currentTranslate) + "px)";
            } else {
                element.style.transform = "translateX(" + (0) + "px)";
            }
        });
    });

    nextButton.style.opacity = '1';
    prevButton.style.opacity = opacityButtons;
}
function getTranslateX(element) {
    var style = window.getComputedStyle(element);
    var matrix = new WebKitCSSMatrix(style.webkitTransform);
    return matrix.m41;
}
