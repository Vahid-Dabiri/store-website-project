import {
    $, _id, _class, scrollPageToTop, goHomeLinkCreator
} from "./global-properties.js"

goHomeLinkCreator();
scrollPageToTop();

let countryName = _id("country-name");
let cityName = _id("city-name");
// let state = _id("state");
let postalCode = _id("postal-code");
let phoneNumber = _id("phone-number-add");
let saveAddressBtn = _id("save-address-btn");
let moreAddress = _id("more-address");

let contriesNameArray = [
    "Iran",
    "United States",
    "Qatar",
    "United Arabic Emarat",
    "Saudi Arabia",
    "Egept"
];

let cityNamesArray = [
    {
        country: "Iran",
        capital: "Tehran",
        city1: "Shiraz",
        city2: "Isfahan",
        city3: "Mashad",
        city4: "Kerman",
        city5: "Bandar-Abbas"
    },
    {
        country: "United States",
        capital: "Washington DC",
        city1: "New York (NY)",
        city2: "Los Angeles (LA)",
        city3: "Ohaio",
        city4: "Texas",
        city5: "Halywood"
    },
    {
        country: "Saudi Arabia",
        capital: "Riaz",
        city1: "Mecca",
        city2: "Medinah",
        city3: "Jadah",
        city4: "Tabuk",
        city5: "Najran"
    },
    {
        country: "Qatar",
        capital: "Doha",
        city1: "Alrayan",
        city2: "Alkhor",
        city3: "Dokhan",
        city4: "Om bab"
    },
    {
        country: "United Arabic Emarat",
        capital: "Abudabi",
        city1: "Dubai",
        city2: "Sharjah",
        city3: "Alain",
        city4: "Ajman",
        city5: "Fojeirah"
    },
    {
        country: "Egept",
        capital: "Qairo",
        city1: "Escandarie",
        city2: "Gize",
        city3: "Shabr Alkhaime",
        city4: "Aghsar"
    }
];

contriesNameArray.forEach(element => {
    countryName.insertAdjacentHTML('beforeEnd', `
    <option class="country-option" value="${element}">${element}</option>
    `)
});

function makeCities() {
    cityName.innerHTML = '';
    cityName.insertAdjacentHTML('beforeEnd', `
            <option class="choose-city" value="choose-city">Choose your city</option>
        `)
}

countryName.addEventListener('change', event => {
    if (countryName.value == "choose-country") {
        makeCities();
    }
    let chooseCountry = countryName.value;
    for (let i = 0; i < cityNamesArray.length; i++) {
        if (cityNamesArray[i].country == chooseCountry) {
            makeCities();
            let citiesArray = Object.entries(cityNamesArray[i]);
            for (let j = 1; j < citiesArray.length; j++) {
                cityName.insertAdjacentHTML('beforeEnd', `
                <option class="choose-city" value="${citiesArray[j][1]}">${citiesArray[j][1]}</option>
                `)
            }
        }
    }
});

let addressContainer = _id("address-container");
let fullAddressArray = [];
if (JSON.parse(localStorage.getItem('addressInfo')) != null) {
    fullAddressArray = JSON.parse(localStorage.getItem('addressInfo'));
}

function fullAddressMaker(addCountry, addCity, addPostal, addPhone, addMore) {
    addressContainer.insertAdjacentHTML('beforeEnd', `
        <div class="saved-address">
            <div class="address-info">
                <span class="country-saved">Country: ${addCountry}</span>
                <span class="city-saved">City: ${addCity}</span>
                <span class="postal-code-saved">Postal Code: ${addPostal}</span>
                <span class="phone-number-saved">Phone Number: ${addPhone}</span>
                <span class="more-info-saved">More Information: ${addMore}</span>
            </div>
            <div id="address-setting">
                <button class="check-btn"><i class=" fa fa-check-circle"></i></button>
                <button class="remove-btn"><i class=" fa fa-times"></i></button>
            </div>
        </div>
    `)
}

let savedAddress = _class("saved-address");
let addressInfo = _class("address-info");
let countrySaved = _class("country-saved");
let citySaved = _class("city-saved");
let postalCodeSaved = _class("postal-code-saved");
let phoneNumderSaved = _class("phone-number-saved");
let moreAddSaved = _class("more-add-saved");

function chooseBtnSelector() {
    let chooseAddress = _class("check-btn");
    for (let i = 0; i < chooseAddress.length; i++) {
        chooseAddress[i].addEventListener('click', event => {
            for (let j = 0; j < chooseAddress.length; j++) {
                chooseAddress[j].style.color = 'black';
            }
            // chooseAddress[i].style.color = 'lime';
            if (event.target.className.includes('fa')) {
                event.target.parentNode.style.color = 'lime';
            } else {
                event.target.style.color = 'lime';
            }
        })
    }
}
chooseBtnSelector();

function removeBtnSelector() {
    let removeAddress = _class("remove-btn");
    for (let i = 0; i < removeAddress.length; i++) {
        removeAddress[i].addEventListener('click', event => {
            if (event.target.className.includes('fa')) {
                event.target.parentNode.parentNode.parentNode.remove();
                localStorage.setItem("addressInfo", JSON.stringify(addressContainer.innerHTML));
                chooseBtnSelector();
            } else {
                event.target.parentNode.parentNode.remove();
                localStorage.setItem("addressInfo", JSON.stringify(addressContainer.innerHTML));
                chooseBtnSelector();
            }
        })
    }
}
removeBtnSelector();

saveAddressBtn.addEventListener('click', event => {
    if (countryName.value != "choose-country" && cityName.value != "choose-city" &&
        postalCode.value != '' && phoneNumber.value != '') {
        fullAddressMaker(countryName.value, cityName.value, postalCode.value, phoneNumber.value, moreAddress.value);
        let fullAddressObject = {
            countryName: countryName.value,
            cityName: cityName.value,
            postalCode: postalCode.value,
            phoneNumber: phoneNumber.value,
            moreAddress: moreAddress.value
        };
        fullAddressArray.push(fullAddressObject);
        localStorage.setItem('addressInfo', JSON.stringify(fullAddressArray));
    } else {
        alert('please fill all the requaerment inputs!!!');
    }

    function updateLocalStorage() {
        removeBtnSelector();
    }

    updateLocalStorage();
    // chooseBtnSelector();
    // removeBtnSelector();
});

if (JSON.parse(localStorage.getItem('addressInfo')) != null) {
    let addressExtract = JSON.parse(localStorage.getItem('addressInfo'));
    addressContainer.insertAdjacentHTML('beforeEnd', addressExtract);

    chooseBtnSelector();
    removeBtnSelector();
}


