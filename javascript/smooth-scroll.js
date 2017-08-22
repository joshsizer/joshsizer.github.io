var delay = 501
var lastClick = 0

function scrollTo(to, duration, element) {
    if (document.body.scrollTop == to) return;

    if(lastClick>=(Date.now()-delay)){return}
    lastClick=Date.now()
    
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = window.pageYOffset
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        }
        else { clearInterval(scrollInterval); }
    },10);
}

function scrollToElement(elID, x) {
    console.log("hello!")
    var dest = document.getElementById(elID);
    scrollTo(dest.offsetTop, 500, x);
}