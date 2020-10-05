const readMore = document.querySelector('.icon-scroll');
const readMoreText = document.querySelector('.readMore');
const readMoreIcon = document.querySelector('.readMoreIcon');


// readMore.addEventListener('mouseover', () => {
//   readMoreIcon.style.display = 'none';
//   readMoreText.stype.display = 'block';
// });


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


const buyNow = document.querySelector('.buyNow');
const buyNowMobile = document.querySelector('#buyNowMobile');

buyNow.addEventListener("click", () => {
  buyNowMobile.style.display = "block";
})

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('#mobileMenu');
const wrapper = document.querySelector('#wrapper');
const mobileMenuStyle = getComputedStyle(wrapper);

burger.addEventListener("click", (evt) => {
  var twentypercent = `${(screen.width/100)*20}`
  var change = `${screen.width - twentypercent}px`;
  if (mobileMenuStyle.right === "0px") {  
    wrapper.style.right = `${change}`;
  } else{
    wrapper.style.right = "0px";   
  }
  evt.preventDefault();
});

mobileMenu.addEventListener("click",(evt) =>{
  if(evt.target.href){
    wrapper.style.right = "0";
  }
})