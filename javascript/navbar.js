var navbar_div_id = "nav"
var active_link_class = "active"
var domain_name = window.location.hostname

// slits path name by "/", gets the first element, removes the .html
var active_link = window.location.pathname.split("/").pop().replace(".html", "");

/**
 * To add links to the navigation bar, place the name of 
 * the linked html document into the links array. Logo image
 * is not used at the moment.
 */
var navbar_info = {
    "logo-text":"Joshua Sizer",
    "logo-image-url":"img/",
    "links": ["home", "about","code","music","robotics","volunteer"]
};

// inserts the navbar html into the div with the id of nav
$('#' + navbar_div_id).html(createNavbarString())

/**
 * Generates the html for the navbar, dynamically adding 
 * links based on the navbar_info JSON Object
 */
function createNavbarString() {
    var navbar_link_list = [navbar_info.links.length]

    for (var i = 0; i < navbar_info.links.length; i++) {
        var str = ""
        var cur_link = navbar_info.links[i];
        // this is where we would do any modifcations, like capitalize or uppercase the word
        var cur_link_text = cur_link; 
        if (cur_link === "home") {
            cur_link = "index"
        }
        str += "<li><a ";
        if (cur_link === active_link) {
            str += "class=\"" + active_link_class + "\" " 
        }
        str += "href=\"" + cur_link + ".html\""
        
        str += ">" + cur_link_text + "</a></li>";
        navbar_link_list[i] = str;
    }

    var list_text = ""
    for (var i = 0; i < navbar_link_list.length; i++) {
        list_text += navbar_link_list[i];
        if (i === navbar_link_list.length - 1) {
            break
        }
        list_text += "\n"
    }

    var full = "<nav class=\"navbar\">" + 
                    "<div class=\"navbar-flex desktop\">" +          
                        "<div class=\"navbar-logo\"><a href=\"index.html\">Joshua Sizer</a></div>" +
                        "<ul>" + 
                            list_text + 
                        "</ul>" + 
                    "</div>"  +
                    "<div class=\"navbar-flex mobile\">" +
                        "<div class=\"navbar-logo\"><a href=\"index.html\">Joshua Sizer</a></div>" +                        
                        "<div class=\"menu-burger\" onclick=\"onMenuBurgerClick(this)\">" +
                            "<span class=\"burger-bar bar1\"></span>" +
                            "<span class=\"burger-bar bar2\"></span>" +
                            "<span class=\"burger-bar bar3\"></span>" +                        
                        "</div>" +
                    "</div>" + 
                "</nav>" 
    return full                    
}

function onMenuBurgerClick(x) {
    x.classList.toggle("change");    
}

/*
 *  <nav class="navbar">
        <div class="navbar-flex desktop">          
            <div class="navbar-logo"><a href="index.html">Joshua Sizer</a></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#section-code">Code</a></li>
                <li><a href="#section-music">Music</a></li>
                <li><a href="#section-robotics">Robotics</a></li>
                <li><a href="#section-volunteer">Volunteer</a></li>
            </ul>
        </div>  

        <div class="navbar-flex mobile">
            <div class="navbar-logo"><a href="#">Joshua Sizer</a></div>                        
            <div class="menu-burger" onclick="myFunction(this)">
                <span class="burger-bar bar1"></span>
                <span class="burger-bar bar2"></span>
                <span class="burger-bar bar3"></span>                        
            </div>
        </div>
    </nav>
 */