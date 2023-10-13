let title = document.querySelector('.abc');
let name = "Welcome to the official website of PAR Entertainments"
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;

    index++;

    setTimeout(() => {typeWriter()}, 53)

}

typeWriter();


document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    var windowheight = window.innerHeight;

    if (window.scrollY > 10){
        nav.classList.add('active');
    }

    else{
        nav.classList.remove('active');
    }
})






