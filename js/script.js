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
    let icons = document.querySelectorAll('.icon-moving');
    let scroll = window.pageYOffset;

    icons.forEach(icon => {
        let speed = icon.dataset.speed;
        icon.style.transform = `rotate(${scroll * speed}deg)`;
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