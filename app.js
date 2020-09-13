const readMore = document.querySelector('.icon-scroll');
const readMoreText = document.querySelector('.readMore');
const readMoreIcon = document.querySelector('.readMoreIcon');


readMore.addEventListener('mouseover', () => {
  readMoreIcon.style.display = 'none';
  readMoreText.stype.display = 'block';
});


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
const mobileMenuStyle = getComputedStyle(mobileMenu);

burger.addEventListener("click", (evt) => {

  if (mobileMenuStyle.display === "none") {
    var twentypercent = `${(screen.width/100)*20}`
    var change = `${screen.width - twentypercent}`;
    
    wrapper.style.right = `${change}px`;
    mobileMenu.style.display = "block";
    mobileMenu.style.left = `${twentypercent}px`;
    mobileMenu.style.transition = 'all .5s';
    wrapper.style.transition = 'all .1s';

  } else {
    wrapper.style.transition = 'all .8s';
    mobileMenu.style.transition = 'all .7s';
    mobileMenu.style.display = "none";
    wrapper.style.right = "0";
  }
  evt.preventDefault();
});

mobileMenu.addEventListener("click",(evt) =>{
  if(evt.target.href){
    mobileMenu.style.display = "none";
    wrapper.style.right = "0";
  }
})