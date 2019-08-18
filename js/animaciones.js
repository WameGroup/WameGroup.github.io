
let sencillas = new ScrollReveal();
sencillas.reveal('.normal', {
    origin: 'bottom',
    delay: 100,
    interval: 16,
    distance: '200px',
    mobile: true
});
sencillas.reveal('.left', {
    origin: 'left',
    delay: 100,
    interval: 16,
    distance: '1000px',
    mobile: false
});
sencillas.reveal('.up', {
    origin: 'bottom',
    delay: 100,
    interval: 16,
    duration: 1000,
    distance: '200px',
    mobile: false
});
sencillas.reveal('.right', {
    origin: 'right',
    delay: 100,
    interval: 16,
    distance: '1000px',
    mobile: false
});
sencillas.reveal('.bot', {
    origin: 'top',
    delay: 100,
    interval: 16,
    distance: '200px',
    mobile: false
});
sencillas.reveal('.left-rotate', {
    origin: 'left',
    delay: 100,
    interval: 16,
    duration: 1000,
    distance: '1000px',
    rotate: {
        z: 200
    },
    mobile: false
});
sencillas.reveal('.up-rotate', {
    origin: 'bottom',
    delay: 100,
    interval: 16,
    duration: 1000,
    distance: '200px',
    rotate: {
        z: 180
    },
    mobile: false
});
sencillas.reveal('.right-rotate', {
    origin: 'right',
    delay: 100,
    interval: 16,
    distance: '1000px',
    duration: 1000,
    rotate: {
        z: -200
    },
    mobile: false
});
sencillas.reveal('.bot-rotate', {
    origin: 'top',
    delay: 100,
    interval: 16,
    distance: '200px',
    duration: 1000,
    rotate: {
        z: 180
    },
    mobile: false
});