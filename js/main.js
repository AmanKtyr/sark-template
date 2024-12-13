// slider
const slider = document.querySelector('.slider');

// Function to move to the next slide
function nextSlide() {
  const items = document.querySelectorAll('.item');
  slider.append(items[0]); // Move the first item to the end
}

// Function to move to the previous slide
function prevSlide() {
  const items = document.querySelectorAll('.item');
  slider.prepend(items[items.length - 1]); // Move the last item to the beginning
}

// Click event for manual control
function activate(e) {
  if (e.target.matches('.next')) nextSlide();
  if (e.target.matches('.prev')) prevSlide();
}

// Add event listener for click events
document.addEventListener('click', activate, false);

// Auto-slide functionality
let autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds






(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);



// imp notes
// Data for Important Links and What's New
const data = {
    "important-links": [
      { text: "Update your profile", url: "https://example.com/link1" },
      { text: "Check recent reports", url: "https://example.com/link2" },
      { text: "System maintenance details", url: "https://example.com/link3" },
      { text: "New project announcement", url: "https://example.com/link4" },
      { text: "Upcoming webinar schedule", url: "https://example.com/link5" },
    ],
    "whats-new": [
      { text: "New feature launched!", url: "https://example.com/news1" },
      { text: "Important security update", url: "https://example.com/news2" },
      { text: "Webinar on latest trends", url: "https://example.com/news3" },
      { text: "New office inaugurated", url: "https://example.com/news4" },
      { text: "Quarterly performance report", url: "https://example.com/news5" },
    ],
  };
  
  // Function to initialize scrolling with infinite loop
  function initializeScrolling(sectionId) {
    const section = document.getElementById(sectionId);
    const items = data[sectionId];
  
    // Add all items to the section
    items.forEach((item, index) => {
      addItemToSection(section, item, index);
    });
  
    // Start the loop for continuous scrolling
    setInterval(() => {
      scrollNext(sectionId);
    }, 3000); // Adjust scroll speed here
  }
  
  // Add a new item to the section
  function addItemToSection(section, item, index) {
    const div = document.createElement("div");
    div.className = "scrolling-item";
    div.innerHTML = `<a href="${item.url}" target="_blank">${item.text}</a>`;
    div.dataset.index = index; // Store index to keep track
    section.appendChild(div);
  }
  
  // Scroll to next item and loop the list
  function scrollNext(sectionId) {
    const section = document.getElementById(sectionId);
    const items = data[sectionId];
  
    // Remove the first item (old notification) and add it back at the bottom
    const firstChild = section.firstElementChild;
  
    if (firstChild) {
      section.removeChild(firstChild); // Remove the topmost item
      const currentIndex = (parseInt(firstChild.dataset.index) + 1) % items.length;
      addItemToSection(section, items[currentIndex], currentIndex);
    }
  }
  
  // Scroll to previous item
  function scrollPrev(sectionId) {
    const section = document.getElementById(sectionId);
    const items = data[sectionId];
    const lastChild = section.lastElementChild;
  
    if (lastChild) {
      section.removeChild(lastChild);
      const currentIndex =
        (parseInt(lastChild.dataset.index) - 1 + items.length) % items.length;
      addItemToSection(section, items[currentIndex], currentIndex);
    }
  }
  
  // Show all notifications in modal
  function showAll(sectionId) {
    const modalBody = document.getElementById("all-notifications-list");
    modalBody.innerHTML = "";
  
    data[sectionId].forEach((item) => {
      const div = document.createElement("div");
      div.className = "mb-2";
      div.innerHTML = `<a href="${item.url}" target="_blank">${item.text}</a>`;
      modalBody.appendChild(div);
    });
  
    const modal = new bootstrap.Modal(document.getElementById("allNotificationsModal"));
    modal.show();
  }
  
  // Initialize both sections
  initializeScrolling("important-links");
  initializeScrolling("whats-new");

  

  // clint
  var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);