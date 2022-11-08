import { $, _id, _class, categoriesNamesArrey, allCategoriesListArrey, selectedCategorySaver } from "./global-properties.js"

/////////////////////////////// header template //////////////////////////////

let Web_page_Header = _id("header");

Web_page_Header.innerHTML = ` 

<style>
    .close-angle-icon {
        display: none;
    }
</style>

    <header id="big-header">
    <div class="fix-header">
        <div class="discount go-discount">
            <a href="#" id="discount-link">SEE OUR AMAZING DISCOUNTS</a>
        </div>
        <div class="first-header">
            <div class="buy-basket">
                <span class="buy-number">0</span>
                <a href="#"><i class="fa fa-shopping-basket"></i></a>
            </div>

            <div class="register">
                <span><a href="signIn-logIn-page.html"><span>SignIn | LogIn</span> <i class="fa fa-sign-in"></i></a></span>
            </div>
            <div class="search-container1">
                <form action="#" method="get" class="search-bar1">
                    <select class="category"></select>
                    <input type="text" placeholder="search here . . ." name="search-txt">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>

            <img src="images/logo-social.png" alt="logo" class="logo">
        </div>
    </div>


    <div class="second-header">
        <nav>
            <ul class="nav-bar">
                <li class="nav first-li"><a href="#" class="nav-bar-link"><i class="fa fa-bars"
                            aria-hidden="true"></i><span id="menu">Product
                            Categories <div class="product-menu">
                                <div class="category-product-menu">

                                <ul id="category-large-list">
                                    
                                </ul>
                                    
                                </div>
                                <div class="sub-categ-menu">
                                    <div class="categ-name">
                                        <p id="categ-Name">Category 1</p>
                                    </div>
                                    <div class="sub-categs-larg">

                                    </div>
                                </div>

                            </div></span></a>
                    <span class="separator">|</span>
                </li>
                
            </ul>
        </nav>

        <div class="address">
            <a href="#">Sellect your address<span><i class="fa fa-map-marker" aria-hidden="true"></i></span></a>
        </div>

    </div>

</header>

<header id="small-header">
    <div class="sm-header-container">
        <div class="discount go-discount">
            <a href="#" id="discount-link">SEE OUR AMAZING DISCOUNTS</a>
        </div>
        <div class="logo-menu">
            <div class="hambergur-menu">
                <span id="menu"><i class="fa fa-bars bar-mark" aria-hidden="true"></i></span>
            </div>
            <img src="images/logo-social.png" alt="logo" class="logo">
            <div class="question">
                <a href="ask-question.html" class="nav-bar-link" id="hamber-menu"><i class="fa fa-question-circle question-mark"
                        aria-hidden="true"></i></a>
            </div>
        </div>
        <div class="sm-header-search">

            <div class="search-container1">
                <select class="category"></select>
                <form action="" method="get" class="search-bar1">

                    <input type="text" placeholder="search here . . ." name="search-txt">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>

        </div>
        <div class="basket-register-container">
            <div class="buy-basket">
                <span class="buy-number">0</span>
                <a href="#"><i class="fa fa-shopping-basket"></i></a>
            </div>
            <div class="register">
                <span><a href="signIn-logIn-page.html"><span>LogIn</span> <i class="fa fa-sign-in"></i></a></span>
            </div>
            <div class="address">
                <a href="#">Sellect your address<span><i class="fa fa-map-marker"
                            aria-hidden="true"></i></span></a>
            </div>
        </div>
    </div>

    <div class="hamber-menu-container">
        <nav>
            <ul class="nav-bar">
                <li class="nav cross-sign-nav"><i class="fa fa-times" aria-hidden="true"></i></li>
                <li class="nav first-li"><a href="#" class="nav-bar-link" id="category-menu-list"><i class="fa fa-bars"
                            aria-hidden="true"></i>Product Categories
                            <span id="menu"> 
                            <i class="fa fa-angle-up close-angle-icon" aria-hidden="true"></i>
                            <i class="fa fa-angle-down open-angle-icon" aria-hidden="true"></i>
                        </span>
                            </a>
                        
                    <div class="category-product-menu hide-category" id="category-product-menu">
                        <ul id="category-product-lists">
                            
                        </ul>
                    </div>
                </li>
                
            </ul>

        </nav>
    </div>
</header> `;

////////////////////// hidden header //////////////////////////////////

let hidden_header = _class("second-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        hidden_header[0].style.display = "none";
    } else {
        hidden_header[0].style.display = "grid";
    }
});

///////////////////// make lists ////////////////////////////

let navBar = _class("nav-bar");
for (let i = 0; i < navBar.length; i++) {
    navBar[i].insertAdjacentHTML('beforeEnd' , `  
    <li class="nav"><a href="main-page.html" class="nav-bar-link"><i class="fa fa-home"
                aria-hidden="true"></i><span>Home</span></a></li>
    <li class="nav"><a href="category-page.html" class="nav-bar-link go-popular CategoryLinkToPage">
                <span><i class="fa fa-users" aria-hidden="true"></i></span>Popular Products</a></li>
    <li class="nav"><a href="category-page.html" class="nav-bar-link CategoryLinkToPage">
                <i class="fa fa-percent" aria-hidden="true"></i><span>Discounts</span></a></li>
    <li class="nav"><a href="ask-question.html" class="nav-bar-link"><i class="fa fa-question-circle"
                aria-hidden="true"></i><span>Ask Question?</span></a></li>
    <li class="nav"><a href="about-us.html" class="nav-bar-link"><span><i class="fa fa-address-book"
                aria-hidden="true"></i></span>About Us</a></li>
    `)
}

selectedCategorySaver();

let categorySearchInput = _class("category");
for (let i = 0; i < categorySearchInput.length; i++) {
    categorySearchInput[i].insertAdjacentHTML('beforeEnd' , `  
        <option value="all-categories">All Categories</option>
        <option value="men-shoes">Men Shoes</option>
        <option value="women-shoes">Women Shoes</option>
        <option value="t-shirt">T-Shirt</option>
        <option value="mobile">Mobile</option>
        <option value="computer">Computer</option>
        <option value="food">Food</option>
        <option value="belt">Belt</option>
        <option value="drink">Drink</option>
        <option value="travel">Travel</option>
    `)
}

/////////////////////////// arrey and object of lists ///////////////////////

let categoryListName = _id("category-large-list");
let subCategsContainerLarg = _class("sub-categs-larg");

///////////////////////// make categories list ////////////////////////////////

categoriesNamesArrey.forEach(category => {
    categoryListName.insertAdjacentHTML('beforeEnd', `<li class="main-categ"><a href="#"
    class="categ-link"><i class="fa fa-${category[1][1]}"
        aria-hidden="true"></i>${category[1][0]}</a></li>`);
});

/////////////////////////// small screen list maker ////////////////////

let hamberMenuContainer = _class("hamber-menu-container")
let closeMenuSign = _class("cross-sign-nav");
let openHamberMenu = _class("hambergur-menu");
let categoryMenuList = _id("category-menu-list");
let smallCategoryProductMenu = _id("category-product-menu");
let hamberMenuLink = $.querySelector(".hamber-menu-container .nav-bar li a");
let openCategorySign = _class("open-angle-icon");
let closeCategorySign = _class("close-angle-icon");
let categoryProductLists = _id("category-product-lists");

categoriesNamesArrey.forEach(category => {
    categoryProductLists.insertAdjacentHTML('beforeEnd', `
 <li class="main-categ"><a href="#" class="categ-link"><i
            class="fa fa-${category[1][1]}" aria-hidden="true"></i>${category[1][0]}
            <i class="fa fa-angle-up close-angle-icon" aria-hidden="true"></i>
            <i class="fa fa-angle-down open-angle-icon" aria-hidden="true"></i></a>
 </li>

 <div class="sub-categ-menu sub-categ-open-close">
     <div class="sub-categs-mini">

     </div>
 </div> `);

});

let subCategsContainerMini = _class("sub-categs-mini");

/////////////////////////// catrgories /////////////////////////////

/////////////////////////// large screen list maker ////////////////////

function creatListForScreenWidth(showList) {

    for (let i = 0; i < showList.length; i++) {

        subCategsContainerLarg[0].insertAdjacentHTML('beforeEnd',
            `<ul class="sub-categs-ul"></ul>`);
        let subCategsUl = _class("sub-categs-ul");

        subCategsUl[i].insertAdjacentHTML('beforeEnd', ` <li> <a href="#"> 
            ${showList[i].main} <i class="fa fa-angle-right" aria-hidden="true"> </i> </a> </li> 
        `);

        let listObjectLength = Object.entries(showList[i]);

        for (let j = 2; j < listObjectLength.length; j++) {

            subCategsUl[i].insertAdjacentHTML('beforeEnd',
                `<li><a href="${listObjectLength[j][1][1]}">${listObjectLength[j][1][0]}</a></li>`);
        }
    }
}

let cetegLists = _class("main-categ");
let categLinks = _class("categ-link");
let categIconsLargScreen = $.querySelectorAll("#category-large-list li .categ-link i");
let categNameId = _id("categ-Name");

cetegLists[0].classList.add("selected-list");
categLinks[0].classList.add("selected-link");

creatListForScreenWidth(allCategoriesListArrey[0][1]);

function categoryIndexNameFinder(event, linkNum) {
    let innerSelectedCategory = categLinks[linkNum];
    let selectedCategory = innerSelectedCategory.textContent.trim();

    categNameId.innerHTML = selectedCategory;
    for (let g = 0; g < categoriesNamesArrey.length; g++) {

        if (categoriesNamesArrey[g][1].includes(selectedCategory)) {
            let categoryName = allCategoriesListArrey[g][1];
            subCategsContainerLarg[0].innerHTML = '';
            creatListForScreenWidth(categoryName);
            subCategsContainerMini[g].innerHTML = subCategsContainerLarg[0].innerHTML;
        }
    }
}

let largHeader = $.querySelector("#big-header");

let largeHeaderDisplay = getComputedStyle(largHeader);

for (let i = 0; i < categLinks.length; i++) {
    categLinks[i].addEventListener("mouseover", (event) => {
        categoryIndexNameFinder(event, i);

        if (largeHeaderDisplay.display == "block") {
            for (let j = 0; j < categLinks.length; j++) {
                let beClassSelectedLink = categLinks[j].classList.contains("selected-link");
                let beClassSelectedList = categLinks[j].parentElement.classList.contains("selected-list");

                if (beClassSelectedLink && beClassSelectedList) {
                    categLinks[j].parentElement.classList.remove("selected-list");
                    categLinks[j].classList.remove("selected-link");
                }
                categLinks[i].parentElement.classList.add("selected-list");
                categLinks[i].classList.add("selected-link");
            }
        }
    })
};


/////////////////////////////////// small header menu //////////////////////////////////////

function openCloseSignControl(clickedTag, numOfSign) {
    if (clickedTag) {
        closeCategorySign[numOfSign].style.display = "inline-block";
        openCategorySign[numOfSign].style.display = "none";
    } else {
        closeCategorySign[numOfSign].style.display = "none";
        openCategorySign[numOfSign].style.display = "inline-block";
    }
}

openHamberMenu[0].addEventListener("click", () => {
    hamberMenuContainer[0].style.left = "0px";
    hamberMenuContainer[0].style.transition = "0.5s ease";
});

closeMenuSign[0].addEventListener("click", () => {
    hamberMenuContainer[0].style.left = "-3000px";
});

categoryMenuList.addEventListener("click", () => {

    smallCategoryProductMenu.classList.toggle("show-hide");
    hamberMenuLink.classList.toggle("hamber-menu-container-open");
    let categorySignState = hamberMenuLink.classList.contains("hamber-menu-container-open");
    openCloseSignControl(categorySignState, 0);
});

let subCategsOpenClose = _class("sub-categ-open-close");

if (largeHeaderDisplay.display == "none") {
    for (let i = 0; i < categLinks.length; i++) {
        categLinks[i].addEventListener("click", (event) => {
            event.preventDefault();
            categoryIndexNameFinder(event, i);
        });
    }
}

for (let i = 0; i < subCategsOpenClose.length; i++) {

    let openOrCloseCategories = subCategsOpenClose[i].previousElementSibling.firstElementChild;

    openOrCloseCategories.addEventListener("click", (event) => {

        subCategsOpenClose[i].classList.toggle("show-hide");
        openOrCloseCategories.classList.toggle("sub-categ-menu-container-open");

        let subcategorySignState = event.target.classList.contains("sub-categ-menu-container-open");
        openCloseSignControl(subcategorySignState, i + 1);
    })
}
