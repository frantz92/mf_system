let flag = 0;
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    hideNav();
    animateMap();
    animateIcons();
})

function hideNav() {
    const currScrollPos = window.pageYOffset;
    if (prevScrollPos > currScrollPos) {
        document.getElementById("main-nav").style.top = "0";
    } else {
        document.getElementById("main-nav").style.top = "-20vh";
        document.querySelector('.hamburger').classList.remove('is-active');
        document.querySelector('.menu').style.transform = 'translateY(-200%)';
    }
    prevScrollPos = currScrollPos;
}

function animateMap() {
    const map = document.querySelector('.world-map');
    if (isInViewport(map)) {
        const places = document.querySelector('.places-img');
        const world = document.querySelector('.world-img');
        world.style.display = "none";
        places.style.display = "block";
        if (flag == 0) {
            places.src = "";
            places.src = "images/1.gif";
            flag = 1;
        }
    }
    if (outOfViewport(map)) {
        const places = document.querySelector('.places-img');
        const world = document.querySelector('.world-img');
        world.style.display = "block";
        places.style.display = "none";
        flag = 0;
    }
}

function animateIcons() {
    let scroll = pageYOffset;
    let rotate = document.querySelectorAll('.icon-rotate');
    let move = document.querySelectorAll('.icon-move');
    let scale = document.querySelectorAll('.icon-scale');

    rotate.forEach(icon => {
        let speed = icon.dataset.speed;
        icon.style.transform = `rotate(${scroll / 2 * speed}deg)`;
    })

    move.forEach(icon => {
        let speed = icon.dataset.speed;
        if (icon.classList.contains('icon-rotate')) {
            icon.style.transform += `translateY(${scroll * speed}px)`;
        } else {
            icon.style.transform = `translateY(${scroll * speed}px)`;
        }
    })

    scale.forEach(icon => {
        let speed = icon.dataset.speed;
        if (icon.classList.contains('icon-move')) {
            icon.style.transform += `scale(${1 + scroll * speed / 500})`;
        } else {
            icon.style.transform = `scale(${1 + scroll * speed / 500})`;
        }
    })
}

function collMenu() {
    const hamMenu = document.querySelector('.hamburger');
    const menuList = document.querySelector('.menu');

    hamMenu.classList.toggle('is-active');

    if (hamMenu.classList.contains('is-active')) {
        menuList.style.transform = 'translateY(0)';
    } else {
        menuList.style.transform = 'translateY(-200%)';
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight)
    );
}

function outOfViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top > window.innerHeight ||
        rect.bottom < 0
    );
}
