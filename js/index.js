const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//---- Nav Bar ----
const navLink = document.querySelectorAll("nav a");
// console.log(navLink);
navLink[0].innerHTML = siteContent["nav"]["nav-item-1"];
navLink[1].innerHTML = siteContent["nav"]["nav-item-2"];
navLink[2].innerHTML = siteContent["nav"]["nav-item-3"];
navLink[3].innerHTML = siteContent["nav"]["nav-item-4"];
navLink[4].innerHTML = siteContent["nav"]["nav-item-5"];
navLink[5].innerHTML = siteContent["nav"]["nav-item-6"];

//---- Header/CTA ----
//Images
const headerImg = document.querySelector("#cta-img");
headerImg.src = "img/header-img.png";
//Content
const cta = document.querySelector(".cta");
const ctaH1 = document.querySelector("h1");
const ctaBtn = document.querySelector("button")

ctaH1.textContent = siteContent["cta"]["h1"];
ctaBtn.textContent = siteContent["cta"]["button"];

//---- Body ----
//Images
const middleImg = document.querySelector(".middle-img");
middleImg.src = "img/mid-page-accent.jpg";
//Titles
const middleTitle = document.querySelectorAll(".main-content .text-content h4");
middleTitle[0].textContent = siteContent["main-content"]["features-h4"];
middleTitle[1].textContent = siteContent["main-content"]["about-h4"];
middleTitle[2].textContent = siteContent["main-content"]["services-h4"];
middleTitle[3].textContent = siteContent["main-content"]["product-h4"];
middleTitle[4].textContent = siteContent["main-content"]["vision-h4"];
//Text
const middleText = document.querySelectorAll(".main-content .text-content p");
middleText[0].textContent = siteContent["main-content"]["features-content"];
middleText[1].textContent = siteContent["main-content"]["about-content"];
middleText[2].textContent = siteContent["main-content"]["services-content"];
middleText[3].textContent = siteContent["main-content"]["services-content"];
middleText[4].textContent = siteContent["main-content"]["product-content"];
middleText[5].textContent = siteContent["main-content"]["vision-content"];




