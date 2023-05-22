const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, //How much of the object needs to be visible for the class transition
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, options);

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((element) => observer.observe(element));