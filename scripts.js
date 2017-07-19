var iframeSource=document.getElementById('iframe');
var endo=document.getElementById('endo');
var bright=document.getElementById('bright');
var mentor=document.getElementById('mentor');
var widget=document.getElementById('widget');
var front=document.getElementById('front');
var closeButton= document.getElementById("closeButton");
var portfolio= document.getElementById('Portfolio');
var description= document.getElementById('description');


portfolio.addEventListener("click", function(){
  let openModal=document.getElementById('modalContainer');
  openModal.style.display="block";
})

widget.addEventListener("click", function (){
  changeSource("https://giftcardsfast.com/store/", "This is the widget of a project I worked on in React to enable a single page ecommerce solution for small businesses.")}
)

endo.addEventListener("click", function (){changeSource(
"http://mediaendo.com", "I built this website in WordPress for a local Endodontist who wanted the ability to manage his website after its creation."
)})

bright.addEventListener("click", function (){changeSource(
"http://getbrighthealth.com", "I started working with Suzann Crumbock on cleaning up the design of a WordPress site for a local holistic doctor."
)})

mentor.addEventListener("click", function (){changeSource(
  "http://marriagemindedmentor.com", "I'm choosing a new theme and adding ecommerce functionality to this site to make it mobile responsive."
  // Still being worked on
)})

front.addEventListener("click", function (){changeSource(
  "https://giftcardsfast.com", "This is the front page for bgusinesses to sign up for my ecommerce gift card solution. It's built in React and uses Oauth tokenization for security."
  // Still being developed.
)})

closeButton.addEventListener("click", function() {
  let openModal=document.getElementById('modalContainer');
  openModal.style.display="none";
})

window.addEventListener("scroll", function() {
    var sticky = document.getElementById('header');
    if( document.body.scrollTop+document.documentElement.scrollTop > 700)
        sticky.className = "stuck";
    else sticky.className = "";
});

function changeSource (source, description) {
  iframe.src=source;
  description.innerHtml=description;

}
