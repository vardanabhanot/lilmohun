const readMore = document.querySelector(".icon-scroll");
const readMoreText = document.querySelector(".readMore");
const readMoreIcon = document.querySelector(".readMoreIcon");

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

const buyNow = document.querySelector(".buyNow");
const buyNowMobile = document.querySelector("#buyNowMobile");
const closebuyNowMob = document.querySelector("#closeBuyMob");
const overlay = document.querySelector('#overlay');
const body = document.querySelector('body');

buyNow.addEventListener("click", () => {
  buyNowMobile.style.display = "block";
  overlay.style.display = "block"
  body.style.overflowY = "hidden";
});


closebuyNowMob.addEventListener("click", () => {
  buyNowMobile.style.display = "none";
  overlay.style.display = "none"
  body.style.overflowY = "unset";
});

const buyButton = document.querySelector("#buyButton");
const buyNowPCModal = document.querySelector("#buyNowPC");
const closePCModal = document.querySelector('.closePCBuy');

buyButton.addEventListener("click",()=>{
  buyNowPCModal.style.visibility="visible";
  buyNowPCModal.style.opacity="1";
  body.style.overflowY = "hidden";
});

closePCModal.addEventListener('click',()=>{
  buyNowPCModal.style.visibility="hidden";
  buyNowPCModal.style.opacity="0";
  body.style.overflowY = "unset";
})



const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector("#mobileMenu");
const wrapper = document.querySelector("#wrapper");
const mobileMenuStyle = getComputedStyle(wrapper);

burger.addEventListener("click", (evt) => {
  var twentypercent = `${(screen.width / 100) * 20}`;
  var change = `${screen.width - twentypercent}px`;
  mobileMenu.style.display = "block";
  if (mobileMenuStyle.right === "0px") {
    wrapper.style.right = `${change}`;
  } else {
    wrapper.style.right = "0px";
  }
  evt.preventDefault();
});

mobileMenu.addEventListener("click", (evt) => {
  if (evt.target.href) {
    wrapper.style.right = "0";
  }
});

//Read More

const authorReadMore = document.querySelector("#readMoreAuthor");
const aboutAuthorHeight = document.querySelector(".aboutAuthorHeight");

authorReadMore.addEventListener("click", (e) => {
  let maxHeight = getComputedStyle(aboutAuthorHeight);
  if (maxHeight.maxHeight == "262.5px") {
    aboutAuthorHeight.style.maxHeight = "63vh";
    aboutAuthorHeight.style.overflowY = "scroll";
    aboutAuthorHeight.style.transition = "0.3s max-height ease-out";
    authorReadMore.textContent = "Read Less";
  }
  else{
    aboutAuthorHeight.style.maxHeight = "42vh";
    aboutAuthorHeight.style.overflowY = "hidden";
    aboutAuthorHeight.style.transition = "0.3s max-height ease-in";
    authorReadMore.textContent = "Read More...";
  }
});

const bookReadMore = document.querySelector("#readMoreBook");
const aboutBookHeight = document.querySelector(".aboutBookHeight");

bookReadMore.addEventListener('click', (e) =>{
  let maxHeight = getComputedStyle(aboutBookHeight);
  if (maxHeight.maxHeight == "262.5px") {
    aboutBookHeight.style.maxHeight = "63vh";
    aboutBookHeight.style.overflowY = "scroll";
    aboutBookHeight.style.transition = "0.3s max-height ease-out";
    bookReadMore.textContent = "Read Less";
  }
  else{
    aboutBookHeight.style.maxHeight = "42vh";
    aboutBookHeight.style.overflowY = "hidden";
    aboutBookHeight.style.transition = "0.3s max-height ease-in";
    bookReadMore.textContent = "Read More...";
  }
})



//scroll animations

 const images = document.querySelectorAll('.anim');

        observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
                }
                else {
                    entry.target.style.animation = 'none';
                }
            })

        })
        images.forEach(image => {
          observer.observe(image)
      })
