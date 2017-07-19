window.addEventListener("scroll", function() {
    var sticky = document.getElementById('header');
    if( document.body.scrollTop+document.documentElement.scrollTop > 700)
        sticky.className = "stuck";
    else sticky.className = "";
});
