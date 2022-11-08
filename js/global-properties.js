let $ = document;

///////////////////////////// id and class selectors ///////////////////

function _id(elem) {
    return $.getElementById(elem);
}

function _class(elem) {
    return $.getElementsByClassName(elem);
}

/////////////////////////// categories ////////////////////////////////

let categoriesNamesObject = {
    electronics: ["Electronics", "laptop", "slider/electronic.jpg", "category-page.html"],
    gameTools: ["Game Tools", "gamepad", "slider/gaming.jpg", "category-page.html"],
    toys: ["Toy Store", "child", "slider/toy.jpg", "category-page.html"],
    kitchen: ["Kitchen Tools", "glass", "slider/kitchen.jpg", "category-page.html"],
    library: ["Library", "book", "slider/book.jpg", "category-page.html"],
    camping: ["Camping", "fire", "slider/camping.jpg", "category-page.html"],
    fashion: ["Fashion", "male", "slider/clothes.jpg", "category-page.html"],
    sport: ["Sport Tools", "futbol-o", "slider/sport.jpg", "category-page.html"]
};

let allCategoriesListObject = {
    electronics: [
        {
            main: "Camera accesories",
            imgUrl: "electronics/camera.jpg",
            ssub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Car accesories",
            imgUrl: "electronics/car-accessories.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"]
        },
        {
            main: "Cell-Phone accesories",
            imgUrl: "electronics/cell-phone.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"]
        },
        {
            main: "Computer accesories",
            imgUrl: "electronics/computer-accesories.png",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"]
        },
        {
            main: "Home audio accesories",
            imgUrl: "electronics/home-audio.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"]
        },
        {
            main: "Office accesories",
            imgUrl: "electronics/office-electronics.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Security accesories",
            imgUrl: "electronics/security.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"]
        }
    ],

    gameTools: [
        {
            main: "Playstation accesories",
            imgUrl: "gaming/playstation.jpeg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"]
        },
        {
            main: "XBOX accesories",
            imgUrl: "gaming/xbox.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"]
        },
        {
            main: "PC accesories",
            imgUrl: "gaming/pc.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"]
        },
        {
            main: "Gaming Clothes",
            imgUrl: "gaming/clothes.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"]
        },
        {
            main: "Video Games",
            imgUrl: "gaming/video-games.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"]
        },
        {
            main: "VR accesories",
            imgUrl: "gaming/vr.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"]
        }
    ],

    toys: [
        {
            main: "Action figures",
            imgUrl: "toys/action-figure.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"]
        },
        {
            main: "Animals",
            imgUrl: "toys/animal.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"]
        },
        {
            main: "Cars and radio controlled",
            imgUrl: "toys/car.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"]
        },
        {
            main: "Construction toys",
            imgUrl: "toys/cunstruction.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"]
        },
        {
            main: "Dolls",
            imgUrl: "toys/dolls.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"]
        },
        {
            main: "Educational toys",
            imgUrl: "toys/educational.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"]
        }
    ],

    kitchen: [
        {
            main: "Kitchen furniture",
            imgUrl: "kitchen/furniture.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"]
        },
        {
            main: "Sinks and kitchen taps",
            imgUrl: "kitchen/sink.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"]
        },
        {
            main: "Kitchen appliances",
            imgUrl: "kitchen/Kitchen-Appliances.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"]
        },
        {
            main: "Cooking accesories",
            imgUrl: "kitchen/cook.jpeg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"]
        }
    ],

    library: [
        {
            main: "Reference books",
            imgUrl: "library/reference_books.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "University books",
            imgUrl: "library/university.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Scool books",
            imgUrl: "library/school-books.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Novels",
            imgUrl: "library/novel.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Children books",
            imgUrl: "library/children.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Comic books",
            imgUrl: "library/comic.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        }
    ],

    camping: [
        {
            main: "Tent Camping",
            imgUrl: "camping/tent.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Backpacking Camping",
            imgUrl: "camping/backpack.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "RV and Van Camping",
            imgUrl: "camping/van.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Canoe Camping",
            imgUrl: "camping/canoe.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        }
    ],

    fashion: [
        {
            main: "Dress",
            imgUrl: "fashion/dress.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Clocks",
            imgUrl: "fashion/clock.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Male",
            imgUrl: "fashion/male.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Female",
            imgUrl: "fashion/female.jpeg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Children",
            imgUrl: "fashion/children.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Work",
            imgUrl: "fashion/work.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        }
    ],

    sport: [
        {
            main: "Bodybuilding",
            imgUrl: "sport/bodybuilding.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Crossfit",
            imgUrl: "sport/crossfit.jpeg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Yoga",
            imgUrl: "sport/yoga.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        },
        {
            main: "Martial arts",
            imgUrl: "sport/martial.jpg",
            sub1: ["Sub-Category1", "#"],
            sub2: ["Sub-Category2", "#"],
            sub3: ["Sub-Category3", "#"],
            sub4: ["Sub-Category4", "#"],
            sub5: ["Sub-Category5", "#"],
            sub6: ["Sub-Category6", "#"],
            sub7: ["Sub-Category7", "#"]
        }
    ]

};

let categoriesNamesArrey = Object.entries(categoriesNamesObject);

let allCategoriesListArrey = Object.entries(allCategoriesListObject);

/////////////////////////// best seller section maker ////////////////////////
let bestSellerInfoArrey = [
    {
        BSTitle: "Electronic",
        imgUrl: "electronic.jpg",
        linkHref: "#"
    },
    {
        BSTitle: "Gaming",
        imgUrl: "gaming.jpg",
        linkHref: "#"
    },
    {
        BSTitle: "Book",
        imgUrl: "book.jpg",
        linkHref: "#"
    },
    {
        BSTitle: "Fashion",
        imgUrl: "clothes.jpg",
        linkHref: "#"
    },
    {
        BSTitle: "Camping",
        imgUrl: "camping.jpg",
        linkHref: "#"
    },
    {
        BSTitle: "Kitchen",
        imgUrl: "kitchen.jpg",
        linkHref: "#"
    },
    {
        BSTitle: "Sport",
        imgUrl: "sport.jpg",
        linkHref: "#"
    },
    {
        BSTitle: "Toys",
        imgUrl: "toy.jpg",
        linkHref: "#"
    }
];

function BSSectionMaker() {
    let bestSellerSection = _id("best-seller-section");
    for (let i = 0; i < bestSellerInfoArrey.length; i++) {
        bestSellerSection.insertAdjacentHTML('beforeEnd', ` 
    <div class="best-seller">
        <div class="B-S-title">
            <h2>${bestSellerInfoArrey[i].BSTitle}</h2>
        </div>
        <div class="B-S-image">
            <a href="${bestSellerInfoArrey[i].linkHref}">
            <img src="images/slider/${bestSellerInfoArrey[i].imgUrl}" alt=""></a>
        </div>
        <div class="B-S-link">
            <a href="${bestSellerInfoArrey[i].linkHref}">Shop Now</a>
        </div>
    </div> `)
    }
}

/////////////////////////// discount section maker //////////////////////////
let discountInfoArrey = [
    {
        DSTitle: "Electronic",
        imgUrl: "electronic.jpg",
        linkHref: "#"
    },
    {
        DSTitle: "Gaming",
        imgUrl: "gaming.jpg",
        linkHref: "#"
    },
    {
        DSTitle: "Book",
        imgUrl: "book.jpg",
        linkHref: "#"
    },
    {
        DSTitle: "Fashion",
        imgUrl: "clothes.jpg",
        linkHref: "#"
    },
    {
        DSTitle: "Camping",
        imgUrl: "camping.jpg",
        linkHref: "#"
    },
    {
        DSTitle: "Kitchen",
        imgUrl: "kitchen.jpg",
        linkHref: "#"
    },
    {
        DSTitle: "Sport",
        imgUrl: "sport.jpg",
        linkHref: "#"
    },
    {
        DSTitle: "Toys",
        imgUrl: "toy.jpg",
        linkHref: "#"
    }
];

function DSSectionMaker() {
    let discountProdutSection = _id("discount-product-section");
    for (let i = 0; i < discountInfoArrey.length; i++) {
        discountProdutSection.insertAdjacentHTML('beforeEnd', ` 
        <div class="discount-product">
            <div class="DS-title">
                <h2>${discountInfoArrey[i].DSTitle}</h2>
            </div>
            <div class="DS-image">
                <a href="${discountInfoArrey[i].linkHref}">
                <img src="images/slider/${discountInfoArrey[i].imgUrl}" alt=""></a>
            </div>
            <div class="DS-link">
                <a href="${discountInfoArrey[i].linkHref}">Shop Now</a>
            </div>
        </div> `)
    };
}

///////////////////////// go home single link /////////////////////////

function goHomeLinkCreator() {
    let goHomePageLink = _class("go-home-page");

    goHomePageLink[0].insertAdjacentHTML('beforeEnd', `  
        <a href="main-page.html" title="Go to home page"><i class="fa fa-home" aria-hidden="true"></i></a>
    `);

}

//////////////////////// scroll window to top //////////////////////

function scrollPageToTop() {
    let goUpContainer = _id("go-up");
    let goUpButton = _id("go-up-button");

    window.addEventListener('scroll', () => {
        if (window.scrollY > 800) {
            goUpContainer.style.bottom = "20%";
        } else {
            goUpContainer.style.bottom = "-20%";
        }
    })

    goUpButton.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
}

//////////////////////// resize main content //////////////////////

function resizeMainContent() {
    let bigHeader = _id("big-header");
    let mainPageContent = _id("main");
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
}

/////////////////////////// selected categories /////////////////////////

// function selectedCategory() {
//     let categoryNameLinkToItsPage = _class("categoryLinkToPage");
//     let selectedCategoryArrey = ['Electronics'];

//     for (let i = 0; i < categoryNameLinkToItsPage.length; i++) {
//         categoryNameLinkToItsPage[i].addEventListener('click', (event) => {
//             selectedCategoryArrey = [];
//             let selectedCategoryToItsPage = event.target.textContent.trim();
//             selectedCategoryArrey.push(selectedCategoryToItsPage);

//             localStorage.setItem('selectedCategoryArrey', JSON.stringify(selectedCategoryArrey));
//         })
//     }
// }

/////////////////////////// selected category saver ///////////////////////

function selectedCategorySaver() {
    let mainCategoryLinkToPage = _class("CategoryLinkToPage");
    let selectedCategoryArrey = ['Electronics'];

    function saveSelectedCategory(selected) {
        selectedCategoryArrey = [];
        let selectedCategoryToItsPage = selected.textContent.trim();
        selectedCategoryArrey.push(selectedCategoryToItsPage);

        localStorage.setItem('selectedCategoryArrey', JSON.stringify(selectedCategoryArrey));
    }

    for (let i = 0; i < mainCategoryLinkToPage.length; i++) {
        mainCategoryLinkToPage[i].addEventListener('click', event => {
            if (event.target.getAttribute('class') == "CategoryLinkToPage") {
                saveSelectedCategory(event.target);
            } else {
                saveSelectedCategory(event.target.parentElement);
            }
        })
    }
}

////////////////////////// scroll to a specific part of content //////////////

function scrollToSelectedPart( topDistance , contentPart) {
    let especificePartDistance = topDistance.offsetTop - 100;
    window.addEventListener('resize', () => {
        especificePartDistance = topDistance.offsetTop - 100;
    })

    for (let i = 0; i < contentPart.length; i++) {
        contentPart[i].addEventListener('click', event => {
            window.scrollTo(0, especificePartDistance);
        })
    }
}

/////////////////////////// export properties ////////////////////////////

export {
    $, _id, _class, categoriesNamesObject, allCategoriesListObject,
    categoriesNamesArrey, allCategoriesListArrey, goHomeLinkCreator,
    scrollPageToTop, resizeMainContent, selectedCategorySaver, scrollToSelectedPart,
    DSSectionMaker, BSSectionMaker
}