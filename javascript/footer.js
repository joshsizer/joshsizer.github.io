var footer_div_id = "footer"
// inserts the footer html into the div with the id of footer
$('#' + footer_div_id).html(createFooterString())


function createFooterString() {

   return "<footer class=\"footer\">" +
                "<div class=\"container\">" +
                    "<div class=\"footer-flex\">" +
                        "<span>&copy; 2018 Joshua Sizer</span>"	+
                        "<span>Contact: joshsizer@gmail.com<span>" +                 
                    "</div>" +
                "</div>" +
            "</footer>" 
}
