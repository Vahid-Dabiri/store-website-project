

$ = document;

function _class(className) {
    return $.getElementsByClassName(className);
}

function _id(idName) {
    return $.getElementById(idName);
}

sliderPicsArrey = [
    {
        Description: "pic1",
        url: "pic1.jpg"
    },
    {
        Description: "pic2",
        url: "pic2.jpg"
    },
    {
        Description: "pic3",
        url: "pic3.jpg"
    },
    {
        Description: "pic4",
        url: "pic4.jpg"
    },
    {
        Description: "pic5",
        url: "pic5.jpg"
    },
    {
        Description: "pic6",
        url: "pic6.jpg"
    }
]

//////////////////////////////// make slider ///////////////////////////////

let sliderContainer = _id("sliderContainer");
let reflectionContainer = _id("reflection");
let sliderDots = _id("dots");

for (let i = 0; i < sliderPicsArrey.length; i++) {
    sliderContainer.insertAdjacentHTML('afterBegin', ` <div class="imgContainer">
    <img src="images/slider/${sliderPicsArrey[i].url}" alt="${sliderPicsArrey[i].Description}">
    </div> `);
    sliderDots.insertAdjacentHTML('afterBegin', ` 
    <span class="dot" onclick="displaySlide(${i})"></span> `);
}

let curentIndex = 1;
function displaySlide(imgIndex) {
    curentIndex = imgIndex;
    let imageContainer = _class("imgContainer");
    let dots = _class("dot");
    if (curentIndex > imageContainer.length) {
        curentIndex = 1;
    }
    if (curentIndex < 1) {
        curentIndex = imageContainer.length;
    }
    for (let i = 0; i < imageContainer.length; i++) {
        imageContainer[i].style.display = "none";
        dots[i].className = dots[i].className.replace("active", "");
    }

    imageContainer[curentIndex - 1].style.display = "block";
    dots[curentIndex - 1].className = "active dot";
}
displaySlide(1);

let bigHeader = _id("big-header");
let mainPageContent = _id("main");
let mainPageSlider = _id("main-page-slider");
let mainPageSliderStyle = getComputedStyle(mainPageSlider);
let mainPageContentStyle = getComputedStyle(mainPageContent);
let bigHeaderStyle = getComputedStyle(bigHeader);

function resizeMainContent() {
    let bigHeaderHeight = bigHeader.offsetHeight;
    mainPageContent.style.marginTop = bigHeaderHeight + "px";
};

if (bigHeaderStyle.display == "block") {
    let bigHeaderHeight = bigHeader.offsetHeight;
    mainPageContent.style.marginTop = (bigHeaderHeight - 15) + "px";
}

window.addEventListener("resize", () => {
    if (bigHeaderStyle.display == "block") {
        resizeMainContent();
    } else {
        mainPageContent.style.marginTop = 0 + "px";
    }
});

/////////////////////// resize slider //////////////////////////////

let nextButten = _class("next");
let pervNextButton = _id("prev-next-buttons");
pervNextButton.style.height = mainPageSliderStyle.height;
pervNextButton.style.marginTop = "-" + mainPageSliderStyle.height;

///////////////////////// auto slide ////////////////////////////////

setInterval(() => {
    nextButten[0].click();
}, 5000);

