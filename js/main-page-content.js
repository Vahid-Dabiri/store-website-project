import {
    $, _id, _class, categoriesNamesArrey, scrollPageToTop, resizeMainContent, selectedCategorySaver,
    scrollToSelectedPart, DSSectionMaker, BSSectionMaker
} from "./global-properties.js"

/////////////////////////////// main content position ////////////////////////////

resizeMainContent();

//////////////////////////////// make slider ///////////////////////////////

let sliderPicsArrey = [
    {
        Description: "sport",
        url: "sport.jpg",
        linkHref: "#"
    },
    {
        Description: "gaming",
        url: "gaming.jpg",
        linkHref: "#"
    },
    {
        Description: "book",
        url: "book.jpg",
        linkHref: "#"
    },
    {
        Description: "clothes",
        url: "clothes.jpg",
        linkHref: "#"
    },
    {
        Description: "kitchen",
        url: "kitchen.jpg",
        linkHref: "#"
    },
    {
        Description: "toy",
        url: "toy.jpg",
        linkHref: "#"
    },
    {
        Description: "electronic",
        url: "electronic.jpg",
        linkHref: "#"
    },
    {
        Description: "camping",
        url: "camping.jpg",
        linkHref: "#"
    }
]


let sliderContainer = _id("sliderContainer");
let reflectionContainer = _id("reflection");
let sliderDots = _id("dots");

for (let i = 0; i < sliderPicsArrey.length; i++) {
    sliderContainer.insertAdjacentHTML('afterBegin', ` <div class="imgContainer">
    <a href = "${sliderPicsArrey[i].linkHref}">
    <img src="images/slider/${sliderPicsArrey[i].url}" alt="${sliderPicsArrey[i].Description}"></a>
    </div> `);
    sliderDots.insertAdjacentHTML('afterBegin', ` 
    <span class="dot"></span> `);
}

let curentIndex = 1;
let imageContainer = $.getElementsByClassName("imgContainer");
let dots = $.getElementsByClassName("dot");
let imageNumber = $.getElementById("slideCounteId");

function infinitSlider(imgIndex) {
    curentIndex = imgIndex;

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

infinitSlider(1);

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        infinitSlider(i + 1);
    });
}

let prevbutton = document.getElementsByClassName("prev");
prevbutton[0].addEventListener("click", function () {
    infinitSlider(curentIndex - 1);
});
let nextButten = document.getElementsByClassName("next");
nextButten[0].addEventListener("click", function () {
    infinitSlider(curentIndex + 1);
});

let mainPageSlider = _id("main-page-slider");
let mainPageSliderStyle = getComputedStyle(mainPageSlider);

/////////////////////// resize slider //////////////////////////////

let pervNextButton = _id("prev-next-buttons");
pervNextButton.style.height = mainPageSliderStyle.height;
pervNextButton.style.marginTop = "-" + mainPageSliderStyle.height;

///////////////////////// auto slide ////////////////////////////////

setInterval(() => {
    nextButten[0].click();
}, 5000);

////////////////////////// best seller section //////////////////////////

let bestSellerTitle = _id("best-seller-title");
let bestSellerBorder = _class("BS-title-border");
let bestSellerDistance = bestSellerTitle.offsetTop - innerHeight;

BSSectionMaker();

///////////////////////////////// best seller animation ///////////////////////////

// window.addEventListener('scroll', () => {

//     if (window.scrollY >= bestSellerDistance) {
//         bestSellerTitle.style.animation = "forwardBackwardMove 3s";
//         bestSellerBorder[0].style.animation = "rightLeftMoveContainer 1.5s";
//     } else {
//         bestSellerTitle.style.animation = "";
//         bestSellerBorder[0].style.animation = "";
//     }
// })

//////////////////////////////// BS (best sell) slider product ///////////////////////////////

let BSSliderInfoArrey = [
    {
        ProTitle: "Electronic",
        imgUrl: "electronic.jpg",
        linkHref: "#",
        price: "100"
    },
    {
        ProTitle: "Gaming",
        imgUrl: "gaming.jpg",
        linkHref: "#",
        price: "112"
    },
    {
        ProTitle: "Book",
        imgUrl: "book.jpg",
        linkHref: "#",
        price: "23"
    },
    {
        ProTitle: "Clothes",
        imgUrl: "clothes.jpg",
        linkHref: "#",
        price: "10"
    },
    {
        ProTitle: "Camping",
        imgUrl: "camping.jpg",
        linkHref: "#",
        price: "2000"
    },
    {
        ProTitle: "Kitchen",
        imgUrl: "kitchen.jpg",
        linkHref: "#",
        price: "1000"
    },
    {
        ProTitle: "Sport",
        imgUrl: "sport.jpg",
        linkHref: "#",
        price: "50"
    },
    {
        ProTitle: "Toys",
        imgUrl: "toy.jpg",
        linkHref: "#",
        price: "20"
    }
]

let BSSliderProducts = _id("B-S-slider-products");
let smallSliderPervNextButton = _class("perv-next-button");
let prevSlideButton = _class("prev-slide");
let nextSlideButton = _class("next-slide");
let nextSlideButtonStyle = getComputedStyle(nextSlideButton[0]);
let BSSliderContainer = _id('BS-slider-Container');
let BSSliderContainerStyle = getComputedStyle(BSSliderContainer);

for (let i = 0; i < BSSliderInfoArrey.length; i++) {
    BSSliderProducts.insertAdjacentHTML('afterBegin', ` 
    <div class="BS-slider-product">
        <div class="BS-slider-title">
            <h3>${BSSliderInfoArrey[i].ProTitle}</h3>
        </div>
        <div class="BS-slider-image">
            <a href="${BSSliderInfoArrey[i].linkHref}">
            <img src="images/slider/${BSSliderInfoArrey[i].imgUrl}" alt=""></a>
        </div>
        <div class="BS-slider-price">
        <p><span class="price">${BSSliderInfoArrey[i].price} $</span></p>
        </div>
    </div> `)
}


BSSliderProducts.insertAdjacentHTML('afterBegin', `
<div class="BS-slider-product slider-info">
<span>Our Suggestion</span>
</div> `);

smallSliderPervNextButton[0].style.top = BSSliderProducts.offsetHeight / 2;
window.addEventListener('resize', () => {
    smallSliderPervNextButton[0].style.top = BSSliderProducts.offsetHeight / 2;
});

prevSlideButton[0].addEventListener('click', (event) => {
    BSSliderProducts.scrollBy(-101, 0);

})

nextSlideButton[0].addEventListener('click', (event) => {
    BSSliderProducts.scrollBy(101, 0);
})

BSSliderProducts.scrollLeft = 0;

///// hidden buttons in scroll start and end /////

function hideNextButton(slider, buttonNum) {
    if (slider.scrollLeft == slider.scrollWidth - slider.offsetWidth) {
        nextSlideButton[buttonNum].style.display = "none";
    } else {
        nextSlideButton[buttonNum].style.display = "block";
    }
};

function hidePrevButton(slider, buttonNum) {
    if (slider.scrollLeft == 0) {
        prevSlideButton[buttonNum].style.display = "none";
        smallSliderPervNextButton[buttonNum].style.justifyContent = 'flex-end';
    } else {
        prevSlideButton[buttonNum].style.display = "block";
        nextSlideButton[buttonNum].style.left = "";
        smallSliderPervNextButton[buttonNum].style.justifyContent = 'space-between';
    }
};

hideNextButton(BSSliderProducts, 0);
hidePrevButton(BSSliderProducts, 0);
BSSliderProducts.addEventListener('scroll', () => {
    hideNextButton(BSSliderProducts, 0);
    hidePrevButton(BSSliderProducts, 0);
});

///////////////////////////////////// discount section //////////////////////////////////

let discountDistanceTop = _id("discount-title");
let goDiscount = _class("go-discount");
let discountBorder = _class("DS-title-border");

scrollToSelectedPart(discountDistanceTop, goDiscount);

// window.addEventListener('scroll', () => {

//     if (window.scrollY >= discountDistance) {
//         discountDistanceTop.style.animation = "rightLeftMove 3s";
//         discountBorder[0].style.animation = "rightLeftMoveContainer 1.5s";
//     } else {
//         discountDistanceTop.style.animation = "";
//         discountBorder[0].style.animation = "";
///     }

// })

DSSectionMaker();

//////////////////////////////// DS(discount) slider product ///////////////////////////////

let DSSliderInfoArrey = [
    {
        ProTitle: "Electronic",
        imgUrl: "electronic.jpg",
        linkHref: "#",
        price: "100",
        discount: "50",
        dPrice: "50"
    },
    {
        ProTitle: "Gaming",
        imgUrl: "gaming.jpg",
        linkHref: "#",
        price: "112",
        discount: "60",
        dPrice: "44.80"
    },
    {
        ProTitle: "Book",
        imgUrl: "book.jpg",
        linkHref: "#",
        price: "23",
        discount: "55",
        dPrice: "10.35"
    },
    {
        ProTitle: "Clothes",
        imgUrl: "clothes.jpg",
        linkHref: "#",
        price: "10",
        discount: "55",
        dPrice: "4.50"
    },
    {
        ProTitle: "Camping",
        imgUrl: "camping.jpg",
        linkHref: "#",
        price: "2000",
        discount: "65",
        dPrice: "700"
    },
    {
        ProTitle: "Kitchen",
        imgUrl: "kitchen.jpg",
        linkHref: "#",
        price: "1000",
        discount: "60",
        dPrice: "400"
    },
    {
        ProTitle: "Sport",
        imgUrl: "sport.jpg",
        linkHref: "#",
        price: "50",
        discount: "55",
        dPrice: "22.50"
    },
    {
        ProTitle: "Toys",
        imgUrl: "toy.jpg",
        linkHref: "#",
        price: "20",
        discount: "52",
        dPrice: "10.40"
    }
]

let DSSliderProducts = _id("D-S-slider-products");
let DSSliderContainer = _id('DS-slider-Container');
let DSSliderContainerStyle = getComputedStyle(BSSliderContainer);

for (let i = 0; i < DSSliderInfoArrey.length; i++) {
    DSSliderProducts.insertAdjacentHTML('afterBegin', ` 
    <div class="DS-slider-product">
        <div class="DS-slider-title">
            <h3>${DSSliderInfoArrey[i].ProTitle}</h3>
            <div class="discount-amount">${DSSliderInfoArrey[i].discount}%</div>
        </div>
        <div class="DS-slider-image">
            <a href="${DSSliderInfoArrey[i].linkHref}">
                <img src="images/slider/${DSSliderInfoArrey[i].imgUrl}" alt="">
            </a>
        </div>
        <div class="DS-slider-price">
        <p><span class="old-price"><strike>${DSSliderInfoArrey[i].price} $</strike></span></p>
        <p><span class="new-price">${DSSliderInfoArrey[i].dPrice} $</span></p>
        </div>
    </div> `)
}

DSSliderProducts.insertAdjacentHTML('afterBegin', `
<div class="BS-slider-product slider-info">
<span>More than 50% discount</span>
</div> `);

smallSliderPervNextButton[1].style.top = DSSliderProducts.offsetHeight / 2;
window.addEventListener('resize', () => {
    smallSliderPervNextButton[1].style.top = DSSliderProducts.offsetHeight / 2;
});

prevSlideButton[1].addEventListener('click', (event) => {
    DSSliderProducts.scrollBy(-101, 0);

});

nextSlideButton[1].addEventListener('click', (event) => {
    DSSliderProducts.scrollBy(101, 0);
});

DSSliderProducts.scrollLeft = 0;

hideNextButton(DSSliderProducts, 1);
hidePrevButton(DSSliderProducts, 1);

DSSliderProducts.addEventListener('scroll', () => {
    hideNextButton(DSSliderProducts, 1);
    hidePrevButton(DSSliderProducts, 1);
});

////////////////////////////////////////// make category part ////////////////////////////

let showCategoriesMain = _class("show-categories-main");

categoriesNamesArrey.forEach(category => {
    showCategoriesMain[0].insertAdjacentHTML('beforeEnd', `
        <div class="show-category-main">
            <a href="${category[1][3]}" class="CategoryLinkToPage">
                <img src="images/${category[1][2]}" alt="">
                <h3 class="category-title">${category[1][0]}</h3>
            </a>
        </div>`)
});

selectedCategorySaver();

///////////////////////////////////////////// popular product part /////////////////////////////

////////////////////////////////////////////// first category /////////////////////////////////

let PPSliderContainer = _id("P-P-slider-container");

function popularSliderMaker() {

    PPSliderContainer.insertAdjacentHTML('beforeEnd', ` 
            <div class="popular-categ-container">
                <div class="popular-categ-title">Most Popular Products</div>
                <div class="P-P-slider">
        
                    <div class="perv-next-button">
                        <a class="prev-slide popular-buttons">&#10094;</a>
                        <a class="next-slide popular-buttons">&#10095;</a>
                    </div>
        
                    <div class="popular-categ-imgs snap-scroll" id="first">
                        
                    </div>
                </div>
    </div> `)
};

popularSliderMaker();
popularSliderMaker();
popularSliderMaker();

let popularCategContainer = _class("popular-categ-container");
let PPSlider = _class("P-P-slider");
let popularCategImages = _class("popular-categ-imgs");
let goPopular = _class("go-popular");
let popularCategTitle = _class("popular-categ-title");
let firstPopular, secondPopular, thirdPopular;

let popularCategImagesUrlArrey = [

    firstPopular = [
        ["first-popular-products/apple-earpod.jpg", "#"],
        ["first-popular-products/calculator.jpg", "#"],
        ["first-popular-products/apple-pencil.jpg", "#"],
        ["first-popular-products/apple-lightning.jpg", "#"],
        ["first-popular-products/hp-deskjet.jpg", "#"],
        ["first-popular-products/pect.png", "#"],
        ["first-popular-products/bear.jpg", "#"],
        ["first-popular-products/bike.jpg", "#"],
        ["first-popular-products/chocklate.jpg", "#"],
        ["first-popular-products/desk.jpg", "#"],
        ["first-popular-products/dumbells.jpg", "#"],
        ["first-popular-products/earth.jpg", "#"],
        ["first-popular-products/exercise-band.jpg", "#"],
        ["first-popular-products/glass.jpg", "#"],
        ["first-popular-products/hat-1.jpg", "#"]
    ],
    secondPopular = [
        ["second-popular-products/sceptre-24.jpg", "#"],
        ["second-popular-products/screen-protector.jpg", "#"],
        ["second-popular-products/Karu_LP_Laptop.png", "#"],
        ["second-popular-products/Karu_LP_Nintendo2.png", "#"],
        ["second-popular-products/Karu_LP_Playstation3.jpg", "#"],
        ["second-popular-products/long-spoon.jpg", "#"],
        ["second-popular-products/microscope.jpg", "#"],
        ["second-popular-products/plate.jpg", "#"],
        ["second-popular-products/spoon.jpg", "#"],
        ["second-popular-products/t-shirt-1.jpg", "#"],
        ["second-popular-products/TRX.jpg", "#"],
        ["second-popular-products/t-shirt-2.jpg", "#"]
    ],
    thirdPopular = [
        ["third-popular-products/fancy-cup.jpg", "#"],
        ["third-popular-products/hoode-men.jpg", "#"],
        ["third-popular-products/ice-maker.jpg", "#"],
        ["third-popular-products/Karu_LP_XBOX2.png", "#"],
        ["third-popular-products/Karu_Quad_Headset.jpg", "#"],
        ["third-popular-products/roku-streaming.jpg", "#"],
        ["third-popular-products/sweet-pants.jpg", "#"],
        ["third-popular-products/truck.jpg", "#"],
        ["third-popular-products/workout-bench.jpg", "#"],
        ["third-popular-products/wire-cuter.jpg", "#"],
        ["third-popular-products/remote.jpg", "#"],
        ["third-popular-products/robot.jpg", "#"]
    ]
];

// scrollToSelectedPart(popularCategImages[0] , goPopular);

let titleColorArrey = ["aqua", "rgb(255 184 0)", "blue", "rgb(200 203 0)"];

function popularImagesMaker() {

    for (let i = 0; i < popularCategImages.length; i++) {
        popularCategTitle[i].style.color = titleColorArrey[Math.floor(Math.random() * titleColorArrey.length)];
        for (let j = 0; j < popularCategImagesUrlArrey[i].length; j++) {
            popularCategImages[i].insertAdjacentHTML('beforeEnd', ` 
                <div class="popular-categ-img"">
                    <a href="${popularCategImagesUrlArrey[i][j][1]}"><img src="images/popular-categs/${popularCategImagesUrlArrey[i][j][0]}"></a>
                </div>
             `)
        }

    }
}

popularImagesMaker();

for (let i = 0; i < popularCategImages.length; i++) {

    smallSliderPervNextButton[i + 2].style.top = popularCategImages[i].offsetHeight / 2;
    window.addEventListener('resize', () => {
        smallSliderPervNextButton[i + 2].style.top = popularCategImages[i].offsetHeight / 2;
    });

    prevSlideButton[i + 2].addEventListener('click', (event) => {
        popularCategImages[i].scrollBy(-101, 0);

    });

    nextSlideButton[i + 2].addEventListener('click', (event) => {
        popularCategImages[i].scrollBy(101, 0);
    });

    popularCategImages[i].scrollLeft = 0;
    hideNextButton(popularCategImages[i], i + 2);
    hidePrevButton(popularCategImages[i], i + 2);

    popularCategImages[i].addEventListener('scroll', () => {
        hideNextButton(popularCategImages[i], i + 2);
        hidePrevButton(popularCategImages[i], i + 2);
    });
}

/////////////////////////////////// discount title animation /////////////////////////

// window.addEventListener('scroll', () => {

//     if (window.scrollY >= discountDistance) {
//         discountDistanceTop.style.animation = "rightLeftMove 3s";
//         discountBorder[0].style.animation = "rightLeftMoveContainer 1.5s";
//     } else {
//         discountDistanceTop.style.animation = "";
//         discountBorder[0].style.animation = "";
///     }

// })



////////////////////////////////////////////// go up button /////////////////////////////

scrollPageToTop();