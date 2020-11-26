let flag = 0;

window.addEventListener('scroll', () => {
    animateMap();
    animateIcons();
})

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