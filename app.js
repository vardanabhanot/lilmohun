//this is for the down animation arrow on the desktop version
const readMore = document.querySelector(".icon-scroll");
const readMoreText = document.querySelector(".readMore");
const readMoreIcon = document.querySelector(".readMoreIcon");

//FAQ :- This is to make the faq divs collaspe and expand
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
//FAQ :- Collapse ends here

//BuYNowMobile Button:- to make the button open the modal with buy links or mobile
const buyNow = document.querySelector(".buyNow");
const buyNowMobile = document.querySelector("#buyNowMobile");
const closebuyNowMob = document.querySelector("#closeBuyMob");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");

buyNow.addEventListener("click", (e) => {
  e.preventDefault();
  buyNowMobile.style.display = "block";
  overlay.style.display = "block";
  body.style.overflowY = "hidden";
});

closebuyNowMob.addEventListener("click", () => {
  buyNowMobile.style.display = "none";
  overlay.style.display = "none";
  body.style.overflowY = "unset";
});
//BuyNowMobile Button:- Ends here

//BuyNowPC Button:- To make buy Button on the Laptop+ screen work
const buyButton = document.querySelector("#buyButton");
const buyNowPCModal = document.querySelector("#buyNowPC");
const closePCModal = document.querySelector(".closePCBuy");

buyButton.addEventListener("click", (e) => {
  e.preventDefault();
  buyNowPCModal.style.visibility = "visible";
  buyNowPCModal.style.opacity = "1";
  body.style.overflowY = "hidden";
});

closePCModal.addEventListener("click", () => {
  buyNowPCModal.style.visibility = "hidden";
  buyNowPCModal.style.opacity = "0";
  body.style.overflowY = "unset";
});
//BuyNowPC Button:- Ends here

//Mobile Navigation Menu
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
//Mobile Nav Ends here

//Read More button for 720px screens and around that
//USed to enable and disable the scroll and adjust the height of the div

//Read more for Author Section
const authorReadMore = document.querySelector("#readMoreAuthor");
const aboutAuthorHeight = document.querySelector(".aboutAuthorHeight");

authorReadMore.addEventListener("click", (e) => {
  let maxHeight = getComputedStyle(aboutAuthorHeight);
  
  if (maxHeight.overflowY != "scroll") {
    aboutAuthorHeight.style.maxHeight = "63vh";
    aboutAuthorHeight.style.overflowY = "scroll";
    aboutAuthorHeight.style.transition = "0.3s max-height ease-out";
    authorReadMore.textContent = "Read Less";
  } else {
    aboutAuthorHeight.style.maxHeight = "42vh";
    aboutAuthorHeight.style.overflowY = "hidden";
    aboutAuthorHeight.style.transition = "0.3s max-height ease-in";
    authorReadMore.textContent = "Read More...";
  }
});

//Read More for Book Section
const bookReadMore = document.querySelector("#readMoreBook");
const aboutBookHeight = document.querySelector(".aboutBookHeight");
const available = document.querySelector("#available");

bookReadMore.addEventListener("click", (e) => {
  let maxHeight = getComputedStyle(aboutBookHeight);
 
  if (maxHeight.overflowY != "scroll") {
    aboutBookHeight.style.maxHeight = "63vh";
    aboutBookHeight.style.overflowY = "scroll";
    aboutBookHeight.style.transition = "0.3s max-height ease-out";
    bookReadMore.textContent = "Read Less";
    available.style.display = "none";
  } else {
    aboutBookHeight.style.maxHeight = "42vh";
    aboutBookHeight.style.overflowY = "hidden";
    aboutBookHeight.style.transition = "0.3s max-height ease-in";
    bookReadMore.textContent = "Read More...";

    setTimeout(() => {
      available.style.display = "block";
    }, 500);
  }
});

//Read More Ends here

//scroll animations applied on About Author Section
const images = document.querySelectorAll(".anim");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});
images.forEach((image) => {
  observer.observe(image);
});
//scroll animation ends here

//form submit

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("contactEmail").value;
  const name = document.getElementById("contactName").value;
  const message = document.getElementById("contactMessage").value;
  const formButton = document.querySelector(".formButton");

  formButton.classList.add("onclick");
  formButton.classList.item(250);
 
  const url = `https://script.google.com/macros/s/AKfycbyhkmrcLjzNmiiTc8jddt0nkx_tgge3UH2zRvtw/exec?email=${email}&name=${name}&message=${message}`;
  const options = {
    method: "POST",
    mode: "cors",
    header: {
      "Content-Type": "applications/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      message: message
    })
  };

  fetch(url, options)
    .then(response => response.json())
    .then((response) => {
      if (response.result == 'success') {
        formButton.classList.remove("onclick");
        formButton.classList.add("validate");
        formButton.classList.item(450);

        setTimeout(() => {
          formButton.classList.remove("validate");
        }, 2500);

        //formSubmitResponse.style.animation = "success 4s forwards ease-out";
        document.getElementById("contactEmail").value = "";
        document.getElementById("contactName").value = "";
        document.getElementById("contactMessage").value = "";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
//form Submission Ends here

//Checking country of the user to show Amazon link of that specified country
const ipLookUp = () => {
  const url = `https://geolocation-db.com/json/09ba3820-0f88-11eb-9ba6-e1dd7dece2b8`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let countryName = data.country_name;
      localStorage.setItem("country", countryName);
      amazonBuyChange(countryName);
    })
    .catch((err, status) => {
      console.log(err, status);
    });
};

//swapping the links according to the country we got through ipLookUp()
const amazonBuyChange = (country) => {
  const amazonLink = document.querySelectorAll(".amazonLink");
  const India =
    "https://www.amazon.in/Sinister-Spells-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const Australia =
    "https://www.amazon.com.au/Sinister-Spells-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const Brazil =
    "https://www.amazon.com.br/Sinister-Spells-English-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const Canada =
    "https://www.amazon.ca/Sinister-Spells-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const France =
    "https://www.amazon.fr/Sinister-Spells-Kaveel-Lilmohun/dp/B08F719G26/";

  const Germany =
    "https://www.amazon.de/Sinister-Spells-English-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const Italy =
    "https://www.amazon.it/Sinister-Spells-English-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const Japan =
    "https://www.amazon.co.jp/Sinister-Spells-English-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const Mexico =
    "https://www.amazon.com.mx/Sinister-Spells-English-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const Netherlands =
    "https://www.amazon.nl/Sinister-Spells-English-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const Singapore =
    "https://www.amazon.sg/Sinister-Spells-Lilmohorror-Kaveel-Lilmohun/dp/B08F719G26/";

  const Spain =
    "https://www.amazon.es/Sinister-Spells-English-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  const UnitedKingdom =
    "https://www.amazon.co.uk/Sinister-Spells-Kaveel-Lilmohun-ebook/dp/B08FBCTZT6/";

  amazonLink.forEach((link) => {
    switch (country) {
      case "India":
        link.setAttribute("href", India);
        break;
      case "Australia":
        link.setAttribute("href", Australia);
        break;
      case "Brazil":
        link.setAttribute("href", Brazil);
        break;
      case "Canada":
        link.setAttribute("href", Canada);
        break;
      case "France":
        link.setAttribute("href", France);
        break;
      case "Germany":
        link.setAttribute("href", Germany);
        break;
      case "Italy":
        link.setAttribute("href", Italy);
        break;
      case "Japan":
        link.setAttribute("href", Japan);
        break;
      case "Mexico":
        link.setAttribute("href", Mexico);
        break;

      case "Netherlands":
        link.setAttribute("href", Netherlands);
        break;

      case "Singapore":
        link.setAttribute("href", Singapore);
        break;
      case "Spain":
        link.setAttribute("href", Spain);
        break;

      case "United Kingdom":
        link.setAttribute("href", UnitedKingdom);
        break;
      default:
        link.setAttribute("href", "https://www.amazon.com/dp/B08FBCTZT6");
    }
  });
};

const fetchingCountryName = () => {
  if (localStorage.getItem("country")) {
    amazonBuyChange(localStorage.getItem("country"));
  } else {
    ipLookUp();
  }
};
fetchingCountryName();
//fetching country end here


//go to top button on scroll
let topbutton = document.getElementById("toTopBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let topbutton = document.getElementById("toTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

//go to top ends here