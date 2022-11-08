import {
    categoriesNamesArrey, allCategoriesListArrey, $, _id, _class, goHomeLinkCreator,
    DSSectionMaker, BSSectionMaker
} from './global-properties.js'

let categoryPageContent = _id("category-page-content");
let mainCategoryNameInner = JSON.parse(localStorage.getItem('selectedCategoryArrey'));

categoryPageContent.insertAdjacentHTML('afterBegin', `  
<header>
<div class="category-name-head">
    <h1 id="mainCategoryName">${mainCategoryNameInner[0]}</h1>
</div>
</header>

<!-- ---------------------- main part ---------------------- -->
<section id="subCategoryMenuListSection">
<div class="subCategoryMenuList">
    <div id="crossSign"><i class="fa fa-times" aria-hidden="true"></i></div>
    <ul id="sub-category-lists-categpage">
    </ul>
</div>
</section>
<main>
<div id="subCategoriesContainer">
    
</div>
</main>
`);

let subCategoriesContainer = _id("subCategoriesContainer");
let subCategoryListsCategPage = _id("sub-category-lists-categpage");
let subCategoryMenuList = _class("subCategoryMenuList");
let mainPartOfPage = $.querySelector("main");
let pageHeader = $.querySelector("header");
let pageFooterTemplate = _id("footer-template");
let mainCategoryName = _id("mainCategoryName");

if (mainCategoryName.innerHTML == "Discounts") {
    mainPartOfPage.insertAdjacentHTML('beforeEnd', `  
    <section id="discount-product-section">

    </section>
    `)
    DSSectionMaker();
}

if (mainCategoryName.innerHTML == "Popular Products") {
    mainPartOfPage.insertAdjacentHTML('beforeEnd', `  
    <section id="best-seller-section">

    </section>
    `)
    BSSectionMaker();
}

for (let i = 0; i < categoriesNamesArrey.length; i++) {

    if (categoriesNamesArrey[i][1].includes(mainCategoryNameInner[0])) {
        for (let g = 0; g < allCategoriesListArrey[i][1].length; g++) {
            subCategoriesContainer.insertAdjacentHTML("beforeEnd", `  
                <div class="subCategory">
                    <img src="images/sub-category-imgs/${allCategoriesListArrey[i][1][g].imgUrl}" alt="" 
                    class="subCategoryImgs">
                    <h3>${allCategoriesListArrey[i][1][g].main}</h3>
                </div>
            `)
        }

    }
}

let subCategory = _class("subCategory");

function searchCategoriesList(clientSelectedCategory) {
    for (let i = 0; i < allCategoriesListArrey.length; i++) {
        for (let g = 0; g < allCategoriesListArrey[i][1].length; g++) {
            let findSelectedCategoryList = allCategoriesListArrey[i][1][g].main;
            if (findSelectedCategoryList == clientSelectedCategory) {
                let categoryListsArrey = Object.entries(allCategoriesListArrey[i][1][g]);
                for (let h = 2; h < categoryListsArrey.length; h++) {
                    subCategoryListsCategPage.insertAdjacentHTML("beforeEnd", `  
                        <a href="${categoryListsArrey[h][1][1]}"><li>${categoryListsArrey[h][1][0]}</li></a>
                    `)
                }
            }
        }
    }
}

function pageBlur(blursize) {
    mainPartOfPage.style.filter = `blur(${blursize}px)`;
    pageFooterTemplate.style.filter = `blur(${blursize}px)`;
    pageHeader.style.filter = `blur(${blursize}px)`;
}

for (let i = 0; i < subCategory.length; i++) {
    subCategory[i].addEventListener('click', event => {
        if (event.target.getAttribute('class') == "subCategory") {
            let selectedCaregoryWCIf = event.target.textContent.trim();
            subCategoryListsCategPage.innerHTML = '';
            searchCategoriesList(selectedCaregoryWCIf);
        } else {
            let selectedCaregoryWCElse = event.target.parentElement.textContent.trim();
            subCategoryListsCategPage.innerHTML = '';
            searchCategoriesList(selectedCaregoryWCElse);
        }
        let topHeigthOfList = subCategoryListsCategPage.offsetHeight / 2;
        subCategoryMenuList[0].style.top = -topHeigthOfList + "px";
        pageBlur(5);
    })
}

let removeCategoryLists = _id("crossSign");

removeCategoryLists.addEventListener('click', () => {
    subCategoryMenuList[0].style.top = "-1000px";
    setTimeout(pageBlur(0), 1000);
});

goHomeLinkCreator();