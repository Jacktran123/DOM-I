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
  'cta': {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    'img-src' : "img/header-img.png"
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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//updating for header nav 
let codesnippetimg=document.querySelector('#cta-img');
codesnippetimg.setAttribute('src', siteContent['cta']['img-src']);

let firstnav=document.querySelectorAll('a')[0];
firstnav.textContent= siteContent['nav']['nav-item-1'];

let secondnav=document.querySelectorAll('a')[1];
secondnav.textContent= siteContent['nav']['nav-item-2'];

let thirdnav=document.querySelectorAll('a')[2];
thirdnav.textContent= siteContent['nav']['nav-item-3'];

let fourthnav=document.querySelectorAll('a')[3];
fourthnav.textContent= siteContent['nav']['nav-item-4'];

let fifthnav=document.querySelectorAll('a')[4];
fifthnav.textContent= siteContent['nav']['nav-item-5'];

let sixthnav=document.querySelectorAll('a')[5];
sixthnav.textContent= siteContent['nav']['nav-item-6'];

// updating for call to action
const awesomeDom= document.querySelector('.cta-text h1');
awesomeDom.textContent= siteContent['cta']['h1'];
const button=document.querySelector('button');
button.textContent= siteContent['cta']['button'];

//updating for features main-content
let firstMainContent= document.querySelectorAll('.top-content h4')[0];
firstMainContent.textContent= siteContent['main-content']['features-h4'];
let firstMainContentp= document.querySelectorAll('.top-content p')[0];
firstMainContentp.textContent= siteContent['main-content']['features-content'];

//  updating for About content
let aboutContent= document.querySelectorAll('.top-content h4')[1];
aboutContent.textContent= siteContent['main-content']['about-h4'];
let aboutContentp= document.querySelectorAll('.top-content p')[1];
aboutContentp.textContent= siteContent['main-content']['about-content'];

// for the big image
let bigImg = document.getElementById("middle-img");
bigImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//for the services section 
let servicesContent=document.querySelectorAll('.bottom-content h4')[0];
servicesContent.textContent=siteContent['main-content']['services-h4'];
let servicesContentp=document.querySelectorAll('.bottom-content p')[0];
servicesContentp.textContent=siteContent['main-content']['services-content'];
 
// for the Product section
let productContent=document.querySelectorAll('.bottom-content h4')[1];
productContent.textContent=siteContent['main-content']['product-h4'];
let productContentp=document.querySelectorAll('.bottom-content p')[1];
productContentp.textContent=siteContent['main-content']['product-content'];

// for the vision section
let visionContent=document.querySelectorAll('.bottom-content h4')[2];
visionContent.textContent=siteContent['main-content']['vision-h4'];
let visionContentp=document.querySelectorAll('.bottom-content p')[2];
visionContentp.textContent=siteContent['main-content']['vision-content'];

// for contact section
 let contactSection=document.querySelector('.contact h4');
 contactSection.textContent= siteContent['contact']['contact-h4'];
 let addressSection=document.querySelectorAll('.contact p')[0];
 addressSection.textContent= siteContent['contact']['address'];
 let phoneSection=document.querySelectorAll('.contact p')[1];
 phoneSection.textContent= siteContent['contact']['phone'];
 let emailSection=document.querySelectorAll('.contact p')[2];
 emailSection.textContent= siteContent['contact']['email'];
 
//  for the footer
let footer=document.querySelector('footer');
footer.textContent=siteContent['footer']['copyright'];

// add more content
const headerEl= document.querySelector('header nav');
const Learnmore=document.createElement('a');
Learnmore.textContent='Learn More';
const Funding=document.createElement('a');
Funding.textContent='Fund Us';
headerEl.append(Learnmore);
headerEl.prepend(Funding);

//stretch goal update style 
function navstyle(){
  return firstnav.style.color='blue'};
function normal(){
  return firstnav.style.color='black'};

secondnav.style.color= 'purple';

firstnav.addEventListener( 'mouseenter', navstyle);
firstnav.addEventListener('mouseleave', normal);