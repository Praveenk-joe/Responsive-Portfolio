// ANIMATION TRIGGER
const animateMeElements = document.querySelectorAll("#pkimg");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-photo");
    }
  });
});

animateMeElements.forEach(element => {
  observer.observe(element);
});

// service-card
const animateMeElement = document.querySelectorAll(".service__card");
const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-nextt-photo");
    }
  });
});

animateMeElement.forEach(element => {
  observers.observe(element);
});




// qualification
const animateMeElementss = document.querySelectorAll(".skills,.about__content");
const observerr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-photo");
    }
  });
});

animateMeElementss.forEach(element => {
  observerr.observe(element);
});


// ANIMATION TRIGGER 2
const animateMeElemen = document.querySelectorAll(".qualification__item");
const observe = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-next-photo");
    }
  });
});

animateMeElemen.forEach(element => {
  observe.observe(element);
});

// project1

const MeElemen = document.querySelectorAll(".cont1");
const or = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-next-photo");
    }
  });
});

MeElemen.forEach(element => {
  or.observe(element);
});

// project2

const animateElementss = document.querySelectorAll(".cont2");
const orr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-photo");
    }
  });
});

animateElementss.forEach(element => {
  orr.observe(element);
});


const animaateElementss = document.querySelectorAll(".hero__content");
const oorr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-next-photo");
    }
  });
});

animaateElementss.forEach(element => {
  oorr.observe(element);
});