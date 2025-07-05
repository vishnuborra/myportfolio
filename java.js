// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const threshold = 100; // Adjust this value to control the scroll depth

  if (scrollPosition > threshold) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
});



function openCV() {
  // Replace 'path/to/cv.pdf' with the actual path to your CV file
  var cvPath ='cv/vishnu_resume.pdf';

  // Open the CV in a new tab
  window.open(cvPath, '_blank');
}

  
  


  const burger = document.querySelector("#burger-menu");
  const ul = document.querySelector("nav ul");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  // Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
