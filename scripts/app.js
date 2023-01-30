"use strict";

(function () {
    function Start() {
        console.log("App Started!")

        let href = location.href;
        let url = (href.match(/([^\/]*)\/*$/)[1]);

        switch (document.title) {
            case "home":
                DisplayHomePage();
            break
            case "about":
                DisplayAboutPage();
            break
            case "services":

            break
            case "products":

            break
            case "contact":
                
            break
        }

    }

    // manipulating product link
    let productLink = document.getElementById("product_link")
    productLink.href = "products.html";
    productLink.innerHTML = "<i class=\"fa-brands fa-slack\"></i> Product";

    // Adding Human Resource
    let ul = document.getElementById("MainNav");
    let a = document.createElement('a');
    let icon = document.createElement('i');

    icon.className="fas fa-car";
    let link = document.createTextNode(" Human Resource");

    a.appendChild(icon);
    a.appendChild(link);
    a.title = "Human Resource";
    a.className="nav-link";
    a.href = "index.html";

    let li = document.createElement("li");
    li.className="nav-item";

    li.appendChild(a);
    ul.appendChild(li)
    ul.insertBefore(li, ul.children[4])


    //creating Navbar for bottom of page
    let footer = document.getElementsByTagName("footer")[0];

    let nav = document.createElement('nav');
    nav.className = "navbar fixed-bottom navbar-light bg-light";
    footer.appendChild(nav);

    let div = document.createElement('div');
    div.className ="container-fluid";
    nav.appendChild(div);

    let p = document.createElement('p');
    p.innerHTML="&copy; 2023"

    div.appendChild(p);

    window.addEventListener("load", Start)

})();

function DisplayAboutPage(){
    let a_tag = document.getElementById("p_info").innerHTML = "We are group 10 and we created this website as a working lab for any current and future";
    let p_tag = document.getElementById("p_luv").innerHTML = "Luv Modi (100657755). Currently enrolled in Computer Programming Diploma which I will be completing this spring";
    let b_tag = document.getElementById("p_Abdul").innerHTML = "Abdul Hamirani (100774943). Currently enrolled in Computer Programming Diploma which I will be completing this spring";


}

function DisplayHomePage(){

    let container = document.getElementById("index_container")
    container.style.backgroundImage = "url('../welcome.jpg')";
    container.style.backgroundPosition= "center";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundAttachment = "fixed";
    container.style.backgroundColor = "black";
    container.style.padding = "70px 0px";
    container.style.textAlign = "center";


    document.getElementById("WelcomeText").innerHTML = "Welcome to Site!";

    
}


