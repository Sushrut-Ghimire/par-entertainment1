document.addEventListener('scroll', () => {
    const nav = document.querySelector('.A');
    var windowheight = window.innerHeight;

    if (window.scrollY > windowheight - 100){
        nav.classList.add('active');
    }

})

document.addEventListener('scroll', () => {
    const nav = document.querySelector('#B');
    var windowheight = window.innerHeight;

    if (window.scrollY > windowheight - 100){
        nav.classList.add('active');
    }

})

document.addEventListener('scroll', () => {
    const nav = document.querySelector('#C');
    var windowheight = window.innerHeight;

    if (window.scrollY > windowheight - 100){
        nav.classList.add('active');
    }

})