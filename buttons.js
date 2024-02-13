
const home = document.getElementById("home").addEventListener("click", homeButton);
const experience = document.getElementById("experience").addEventListener("click", experienceButton);
const contact = document.getElementById("contact").addEventListener("click", contactButton);
const theme = document.getElementById("theme").addEventListener("click", themeSwitch);

// Buttons seen on the pages listed within the "Experience" section
const next = document.getElementById("next");
const prev = document.getElementById("previous");

// Only create listeners if these buttons are present on a page
if (next){
    next.addEventListener("click", nextPage);
}

if(prev){
    prev.addEventListener("click", prevPage);
}

// Header Buttons
function homeButton(){
    console.log("Home Button")
    window.location.replace("index.html");
}

function experienceButton(){
    console.log("Experience Button")
    window.location.replace("experience.html");
}

function contactButton(){
    console.log("Contact Button")
    window.location.replace("contact.html");
}

// Check to see if we are in light/dark
// theme then make a swap of themes
function themeSwitch(){
    console.log("Theme Switch")

    // Fetch all buttons so thematic 
    // changes apply to all buttons
    var buttons = document.querySelectorAll('.button');

    // Fetch all images so thematic 
    // changes apply to all images
    var imgs = document.querySelectorAll('.img');

    // "document" points to the current webpage 
    // "documentElement" then acquires the HTML of the page
    // "classList" refers to the series of .css classes associated with the page
    if(document.documentElement.classList.contains("dark-theme")){
        console.log("Dark Theme Removed")
        // Swap to light theme(the default mode)
        document.documentElement.classList.remove("dark-theme");
        buttons.forEach(function(button) {
            button.classList.remove("dark-theme");
        });
        imgs.forEach(function(imgs) {
            console.log("Images add");
            imgs.classList.remove("dark-theme");
        });
    }else{
        // Swap to light theme
        console.log("Dark Theme added")
        document.documentElement.classList.add("dark-theme");
        buttons.forEach(function(button) {
            button.classList.add("dark-theme");
        });
        imgs.forEach(function(imgs) {
            console.log("Images remove");
            imgs.classList.add("dark-theme");
        });
    }
}

// Precondition: None
// Postcondition: String with the name of the current page. Ex. "experience.html"
// Obtains the full path of the page then separates out the text after the last 
// occurence of the '/' character which will contain the current page's name. 
function currentPage(){
    var pagePath = window.location.pathname;
    var indexOfLastOccurence = pagePath.lastIndexOf('/');
    var pathName = pagePath.substring(indexOfLastOccurence + 1); // Adding 1 because we don't want the '/' itself
    return pathName;
}

// Functions check what page the user 
// is currently on and shifts to appropriate
// next or previous page.

// Order of the pages: Industry Experience -> Projects -> Personal Interests
function nextPage(){
    let current = currentPage();
    console.log("Current Page: " + current);
    switch(current){
        case "experience.html":
            console.log("Next: projects.html");
            window.location.replace("projects.html");
            break;
        case "projects.html":
            console.log("Next: interests.html");
            window.location.replace("interests.html");
            break;
        default:
            console.log("Next: Default");
            break;
    }
}

function prevPage(){
    let current = currentPage();
    console.log("Current Page: " + current);
    switch(current){
        case "projects.html":
            console.log("Previous: experience.html");
            window.location.replace("experience.html");
            break;
        case "interests.html":
            console.log("Previous: projects.html");
            window.location.replace("projects.html");
            break;
        default:
            console.log("Previous: Default");
            break;
    }

    return "";
}