document.getElementById("menubutton").addEventListener("click", function() {
    document.getElementById("menubutton").classList.toggle("active");
    document.getElementById("menu").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
});

const showElement1 = document.querySelectorAll(".animation-target");
window.addEventListener("scroll", function() {
    for (let i = 0; i < showElement1.length; i++) {
        const getElementDistance1 = showElement1[i].getBoundingClientRect().top + showElement1[i].clientHeight * .5;
        if (window.innerHeight > getElementDistance1) {
            showElement1[i].classList.add("show");
        }
    }
})

const showElement2 = document.querySelectorAll(".animation-wrap");
window.addEventListener("scroll", function() {
    for (let i = 0; i < showElement2.length; i++) {
        const getElementDistance2 = showElement2[i].getBoundingClientRect().top + showElement2[i].clientHeight ;
        if (window.innerHeight > getElementDistance2) {
            showElement2[i].classList.add("show");
        }
    }
})

window.addEventListener("load", function() {
        document.getElementById("picture1 animation-boss1").classList.add("show");
        document.getElementById("picture2 animation-boss2").classList.add("show");
        document.getElementById("top-wrapper-theme").classList.add("show");
})

const showElement3 = document.querySelectorAll(".animation-target2");
window.addEventListener("scroll", function() {
    for (let i = 0; i < showElement3.length; i++) {
        const getElementDistance3 = showElement3[i].getBoundingClientRect().top + showElement3[i].clientHeight * .5;
        if (window.innerHeight > getElementDistance3) {
            showElement3[i].classList.add("show");
        }
    }
})

const showElement4 = document.querySelectorAll(".animation-target3");
window.addEventListener("scroll", function() {
    for (let i = 0; i < showElement4.length; i++) {
        const getElementDistance4 = showElement4[i].getBoundingClientRect().top + showElement4[i].clientHeight * .5;
        if (window.innerHeight > getElementDistance4) {
            showElement4[i].classList.add("show");
        }
    }
})








