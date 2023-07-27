//getting data of tab-links class and tab-contents class 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

//function for hiding content of skills/education/experience on click
function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }

    //adding line below skills/experience/education on click
    event.currentTarget.classList.add("active-link");
    //getting data of skills,experience, education Id and Adding data of given Id on click
    document.getElementById(tabname).classList.add("active-tab");
}

function openMenu()
{
    sidemenu.style.right = "0";
}

function closeMenu()
{
    sidemenu.style.right = "-200px";
}