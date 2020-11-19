let flag = 0;

document.addEventListener('scroll', function () {
    const map = document.querySelector('.world-map-img');
    if (isInViewport(map)) {
        const places = document.querySelector('.places-img');
        places.classList.add('is-visible');
        if (flag == 0) {
            places.src = "images/1.gif";
            flag = 1;
        }
    }
    if (outOfViewport(map)) {
        flag = 0;
        const places = document.querySelector('.places-img');
        places.classList.remove('is-visible');
        places.src = "";
    }
})

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ((window.innerHeight) || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function outOfViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom >= ((window.innerHeight + 800) || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}