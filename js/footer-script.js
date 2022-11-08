import { categoriesNamesArrey, _id, _class, selectedCategorySaver } from './global-properties.js'

let footerTemplate = document.getElementById("footer-template");

footerTemplate.insertAdjacentHTML('beforeEnd', ` 

<div id="footer-container">
<div id="login-footer">
    <a href="signIn-logIn-page.html">signIn | LogIn</a>
</div>
<div id="footer-content">

    <div id="social-media-footer">
        <div class="contact-container">
            <a href="#" id="footer-instagram"><img class="socials-footer"
                    src="images/social-media/instagram.png" alt="instagram"></a>
        </div>
        <div class="contact-container">
            <a href="#" id="footer-facebook"><img class="socials-footer" src="images/social-media/facebook.png"
                    alt="facebook"></a>
        </div>
    </div>

    <div id="contacts-footer">
        <div class="contact-container">
            <a href="#" id="footer-email"><img class="socials-footer" src="images/social-media/email.png"
                    alt="email">
                <p id="email-address">vahiddabiri1994@gmail.com</p>
                </a>
        </div>
        <div class="contact-container">
            <a href="#" id="footer-phone"><img class="socials-footer" src="images/social-media/phone.png"
                    alt="phone">
                    <p id="phone-number">(98) 916 409 3431</p>
                </a>
        </div>
        <div class="contact-container">
            <a href="on-map.html" id="footer-location"><img class="socials-footer" src="images/social-media/location.png"
                    alt="location">
                    <p id="location-address">Find us on the map</p>
                </a>
        </div>
    </div>

    <div id="information-footer">

        <ul id="footer-categories">
            <li class="list-footer head-list-footer">Categories</li>
            
        </ul>

        <ul id="usefull-list-footer">
            <li class="list-footer head-list-footer">Usefull Links</li>
            <a href="about-us.html">
                <li class="list-footer footer-links">About us</li>
            </a>
            <a href="#">
                <li class="list-footer footer-links">Contact us</li>
            </a>
            <a href="#">
                <li class="list-footer footer-links">Work with us</li>
            </a>
            <a href="#">
                <li class="list-footer footer-links">Costom guide</li>
            </a>
            <a href="on-map.html">
                <li class="list-footer footer-links">Where are we?</li>
            </a>
        </ul>

    </div>

</div>
<div id="copy-right">
   <p>© All material and intellectual rights of this work belong to this store.</p> 
   <p>To use the contents of this website, having a "non-commercial purpose" and mentioning the "source" is enough.</p>
</div>
</div>

`);

let footerCategories = _id("footer-categories");

categoriesNamesArrey.forEach(category => {
    footerCategories.insertAdjacentHTML('beforeEnd', ` 
    <a href="${category[1][3]}" class="categoryLinkToPage">
        <li class="list-footer footer-links">${category[1][0]}</li>
    </a>
`)
});

selectedCategorySaver();