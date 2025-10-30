// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Hamburger menu clicked
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//outside click

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//toggle zone

const zoneObj = {
  zone1: {
    name: "Infinity Link Bridge",
    details:
      "Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami.",
    img: "img/healing.jpg",
  },
  zone2: {
    name: "Community Garden",
    details:
      "Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami.",
    img: "img/healing.jpg",
  },
  zone3: {
    name: "Children Playground",
    details:
      "Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami.",
    img: "img/healing.jpg",
  },
  zone4: {
    name: "Thematic Garden",
    details:
      "Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami.",
    img: "img/healing.jpg",
  },
};

function readZone(zone) {
  const details = document.getElementById("details");
  const title = document.getElementById("details-title");
  const content = document.getElementById("details-content");
  const img = document.getElementById("details-img");
  if (zone == "btnInfinityLinkBridge") {
    details.style.display = "block";
    title.innerHTML = zoneObj.zone1.name;
    content.innerHTML = zoneObj.zone1.details;
    img.src = zoneObj.zone1.img;
  } else if (zone == "btnCommunityGarden") {
    details.style.display = "block";
    title.innerHTML = zoneObj.zone2.name;
    content.innerHTML = zoneObj.zone2.details;
    img.src = zoneObj.zone2.img;
  } else if (zone == "btnChildrenPlayground") {
    details.style.display = "block";
    title.innerHTML = zoneObj.zone3.name;
    content.innerHTML = zoneObj.zone3.details;
    img.src = zoneObj.zone3.img;
  } else if (zone == "btnThematicGarden") {
    details.style.display = "block";
    title.innerHTML = zoneObj.zone4.name;
    content.innerHTML = zoneObj.zone4.details;
    img.src = zoneObj.zone4.img;
  }
  // Scroll to details section if on mobile
  if (window.innerWidth <= 575) {
    const offset = 150;
    const detailsPosition =
      details.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: detailsPosition, behavior: "smooth" });
  }
}

function toggleZone(buttonId) {
  const details = document.getElementById("details");
  const buttons = document.querySelectorAll(".zoneButton");
  buttons.forEach((button) => {
    if (button.id === buttonId) {
      if (button.classList.contains("active")) {
        button.style.backgroundColor = "gray";
        button.classList.remove("active");
        if (![...buttons].some((btn) => btn.classList.contains("active"))) {
          details.style.display = "none";
        }
      } else {
        button.style.backgroundColor = "#28a745";
        button.classList.add("active");
        details.style.display = "block";
        readZone(buttonId);
      }
    } else {
      button.style.backgroundColor = "gray";
      button.classList.remove("active");
      if (![...buttons].some((btn) => btn.classList.contains("active"))) {
        details.style.display = "none";
      }
    }
  });
}

// vegetasi toggle

const vegetasiObj = {
  tanaman1: {
    name: "Pohon Eucalyptus deglupta",
    details:
      "Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami.",
  },
  tanaman2: {
    name: "Pohon Apple",
    details:
      "Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami.",
  },
  tanaman3: {
    name: "Pohon Mangga",
    details:
      "Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami. Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami.Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami. Jika orang yang tidak pernah melihat pohon Eucalyptus deglupta sebelumnya, maka sepintas batang pohon ini tampak seperti dicat oleh manusia, padahal warna yang ada di batang pohon merupakan warna yang terjadi melalui proses alami.",
  },
};

// This function will update the title and description based on the active slide
function updateContent() {
  // Find the active carousel item
  const activeItem = document.querySelector(".carousel-item.active");

  // Get the ID of the active item
  const itemId = activeItem ? activeItem.id : null;

  // Get the title and description elements
  const titleElement = document.getElementById("title-tanaman");
  const descElement = document.getElementById("desc-tanaman");

  // Set the title and description based on the active item ID
  switch (itemId) {
    case "tanaman1":
      titleElement.textContent = vegetasiObj.tanaman1.name;
      descElement.textContent = vegetasiObj.tanaman1.details;
      break;
    case "tanaman2":
      titleElement.textContent = vegetasiObj.tanaman2.name;
      descElement.textContent = vegetasiObj.tanaman2.details;
      break;
    case "tanaman3":
      titleElement.textContent = vegetasiObj.tanaman3.name;
      descElement.textContent = vegetasiObj.tanaman3.details;
      break;
    default:
      titleElement.textContent = vegetasiObj.tanaman1.name;
      descElement.textContent = vegetasiObj.tanaman1.details;
      break;
  }
}

// Call the updateContent function when the carousel slides
$("#carouselExampleControls").on("slid.bs.carousel", function () {
  updateContent();
});

// turn off auto slide
$("#carouselExampleControls").carousel({
  interval: false, // This disables the auto-slide feature
});

// Initialize the content when the page loads
window.onload = function () {
  updateContent();
};

(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);
