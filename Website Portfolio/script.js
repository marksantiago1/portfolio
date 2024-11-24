// Get the mobile menu toggle button, the navigation links container, and all nav links
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#nav-links li a'); // Select all anchor tags inside the navigation links

// Add event listener to the hamburger menu to toggle the navigation visibility
mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('active'); // Toggle the 'active' class on the <nav> element
});

// Add event listener to each navigation link to close the menu when clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active'); // Remove the 'active' class when any link is clicked
  });
});

// Open Modal with the clicked image
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
  
    // Set the image source for the modal to the clicked image's source
    modal.style.display = "flex";
    modalImg.src = imgElement.getElementsByTagName("img")[0].src;
  }
  
  // Close the Modal when clicked anywhere outside the image
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }

  // Add 'show' class when About section is in view
  window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const position = aboutSection.getBoundingClientRect().top;

    // If the section is in view, trigger the animation
    if (position < window.innerHeight && position >= 0) {
      aboutSection.classList.add('show');
    }
  });