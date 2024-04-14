

function showList() {
    gsap.to('.burger', {
        left: 0,
        duration: 0.6
    })
    document.querySelector('.hamburger-icon button').style.display = 'none';
}

function hideList() {
    gsap.to('.burger', {
        left: -1000,
        duration: 0.6
    })
    document.querySelector('.hamburger-icon button').style.display = 'block';
}