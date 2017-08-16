var navbar_div_id = "nav"
var active_link_class = "active"

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
    "links": ["home","about","code","music","volunteer"]
};

// inserts the navbar html into the div with the id of nav
$('#' + navbar_div_id).html(createNavbarString())

/**
 * Generates the html for the navbar, dynamically adding 
 * links based on the navbar_info JSON Object
 */
function createNavbarString() {
    var navbar_link_list = ""

    console.log(window.location.hostname)

    for (cur_link_index in navbar_info.links) {
        var cur_link = navbar_info.links[cur_link_index];
        navbar_link_list += "<li><a ";
        if (cur_link === active_link) {
            navbar_link_list 
        }
    }

    var list = "<li><a href=\"#\">Home</a></li>" +
                "<li><a href=\"#section-code\">Code</a></li>" +
                "<li><a href=\"#section-music\">Music</a></li>" +
                "<li><a href=\"#section-robotics\">Robotics</a></li>" +
                "<li><a href=\"#section-volunteer\">Volunteer</a></li>"
    var full = "<nav class=\"navbar\">" + 
                    "<div class=\"navbar-flex\">" +          
                        "<div class=\"navbar-logo\"><a href=\"#\">Joshua Sizer</a></div>" +
                        "<ul>" + 
                            list + 
                        "</ul>" + 
                        "</div>"  +
                    "</nav>" 
    return full                    
}